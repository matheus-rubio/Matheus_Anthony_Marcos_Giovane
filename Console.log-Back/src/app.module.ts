import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnviromentConfigService } from './config/enviroment-config/enviroment-config.service';
import { TypeOrmConfigModule } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService, EnviromentConfigService],
})
export class AppModule {}
