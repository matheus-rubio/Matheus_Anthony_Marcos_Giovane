import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/userCreate.dto';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
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
}
