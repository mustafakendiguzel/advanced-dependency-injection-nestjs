import { StorageFetcher } from 'src/storage/storage-fetcher';

import { Module } from '@nestjs/common';
import { LocalStorageProvider } from 'src/storage/local-storage/local-storage.provider';
import { AService } from './a.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    AService,
    {
      provide: StorageFetcher,
      useClass: LocalStorageProvider,
    },
  ],
})
export class AModule {}
