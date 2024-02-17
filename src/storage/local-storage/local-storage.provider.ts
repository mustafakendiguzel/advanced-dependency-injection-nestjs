import { StorageFetcher } from '../storage-fetcher';

export class LocalStorageProvider implements StorageFetcher {
  download(filePath: any, fileName: string): Promise<string> {
    return Promise.resolve('Local storage download');
  }
  deleteFile(file: any): any {
    return Promise.resolve('Local storage delete');
  }

  uploadFile(file: any, filePath: any, fileName: string): any {
    return Promise.resolve('Local storage upload');
  }
}
