import { Controller, Post, Body, Req, UseInterceptors } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { Request } from 'express';
import { StorageProvider } from './dto/storage-provider';
import { DynamicStorageInterceptor } from './dynamic-storage.interceptor';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('upload')
  @UseInterceptors(DynamicStorageInterceptor)
  upload(@Body() createStorageDto: CreateStorageDto, @Req() req: Request) {
    return this.storageService.upload(createStorageDto);
  }
}
