import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from 'src/interfaces/database.interface';

@Injectable()
export class EnviromentConfigService implements IDatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }
  getDatabasePort(): number {
    return this.configService.get<number>('DB_PORT');
  }
  getDatabaseUser(): string {
    return this.configService.get<string>('DB_USER');
  }
  getDatabasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DB_DATABASE');
  }
  getMigrationDirName(): string {
    return this.configService.get<string>('MIGRATIONDIR');
  }
  getMigration(): string {
    return this.configService.get<string>('MIGRATION');
  }
}
