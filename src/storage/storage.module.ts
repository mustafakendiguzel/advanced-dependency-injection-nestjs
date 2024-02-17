import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { Module } from '@nestjs/common/decorators';
import { StorageManager } from './storage.manager';
import { DynamicStorageInterceptor } from './dynamic-storage.interceptor';

@Module({
  controllers: [StorageController],
  providers: [StorageService, DynamicStorageInterceptor, StorageManager],
  exports: [StorageService],
})
export class StorageModule {}
