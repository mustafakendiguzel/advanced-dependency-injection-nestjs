import { Module } from '@nestjs/common/decorators';
import { StorageModule } from './storage/storage.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './test/a.module';

@Module({
  imports: [StorageModule, ConfigModule.forRoot({ isGlobal: true }), AModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
