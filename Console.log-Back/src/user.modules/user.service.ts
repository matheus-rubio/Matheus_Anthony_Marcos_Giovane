import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/userCreate.dto';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async store(userDto: UserCreateDto): Promise<User | Error> {
    try {
      const { password } = userDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const createdUser = new this.userModel({
        ...userDto,
        password: hashedPassword,
      });
      return createdUser.save();
    } catch (error) {
      return error;
    }
  }

  async signIn(
    authCredentialDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialDto;

    const user = await this.userModel
      .findOne()
      .where('email')
      .equals(email)
      .exec();

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };

      const accessToken: string = await this.jwtService.sign(payload);

      const userReturn = {
        name: user.nm_user,
        email: user.email,
        type: user.type,
        accessToken,
      };
      return userReturn;
    } else {
      throw new UnauthorizedException('Please chacke your login credentials');
    }
  }
}
