/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { StorageFetcher } from 'src/storage/storage-fetcher';

@Injectable()
export class AService {
  constructor(private storageFetcher: StorageFetcher) {}

  createAWithFile(file: any, filePath: any, fileName: string) {
    const uploadedfile = this.storageFetcher.uploadFile(file, filePath, fileName);
    // create a model
    // make other part
  }
}
