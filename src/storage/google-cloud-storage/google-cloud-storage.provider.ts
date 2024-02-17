import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { Bucket } from '@google-cloud/storage';
import { StorageFetcher } from '../storage-fetcher';

export class GoogleCloudStorageProvider implements StorageFetcher {
  constructor(private readonly configService: ConfigService) {}

  download(filePath: any, fileName: string): Promise<string> {
    return Promise.resolve('Google Cloud storage download');
  }
  deleteFile(file: any): any {
    return Promise.resolve('Google Cloud storage delete');
  }

  uploadFile(file: any, filePath: any, fileName: string): any {
    return Promise.resolve('Google Cloud storage upload');
  }
}
