/*
https://docs.nestjs.com/interceptors#interceptors
*/

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StorageManager } from './storage.manager';

@Injectable()
export class DynamicStorageInterceptor implements NestInterceptor {
  constructor(private readonly storageManager: StorageManager) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const storageProviderType = request.headers['storage-provider'] || 'local-storage';

    if (storageProviderType) {
      this.storageManager.setStorageProvider(storageProviderType);
    }

    return next.handle();
  }
}
