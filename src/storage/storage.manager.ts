import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { StorageProvider } from './dto/storage-provider';
import { LocalStorageProvider } from './local-storage/local-storage.provider';
import { GoogleCloudStorageProvider } from './google-cloud-storage/google-cloud-storage.provider';
import { ConfigService } from '@nestjs/config';
import { StorageFetcher } from './storage-fetcher';

@Injectable()
export class StorageManager {
  private storage: StorageFetcher;
  constructor(private readonly configService: ConfigService) {}

  setStorageProvider(provider: StorageProvider): void {
    this.storage = this.getStorageProvider(provider);
  }

  getStorageProvider(provider: StorageProvider) {
    if (provider === 'local-storage') {
      return new LocalStorageProvider();
    }

    if (provider === 'google-cloud-storage') {
      return new GoogleCloudStorageProvider(this.configService);
    }

    throw new BadRequestException('Invalid storage provider!');
  }

  async uploadFile(file: any, filePath: string, fileName: string): Promise<string> {
    return this.storage.uploadFile(file, filePath, fileName);
  }

  async downloadFile(filePath: string, fileName: string): Promise<string> {
    return this.storage.download(filePath, fileName);
  }

  async deleteFile(filePath: string, fileName: string): Promise<string> {
    return this.storage.deleteFile(filePath, fileName);
  }
}
