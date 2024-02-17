import { Injectable } from '@nestjs/common/decorators';
import { CreateStorageDto } from './dto/create-storage.dto';
import { StorageManager } from './storage.manager';
import { StorageProvider } from './dto/storage-provider';

@Injectable()
export class StorageService {
  constructor(private storageManager: StorageManager) {}
  upload(createStorageDto: CreateStorageDto) {
    return this.storageManager.uploadFile('test', createStorageDto.filePath, createStorageDto.fileName);
  }
}
