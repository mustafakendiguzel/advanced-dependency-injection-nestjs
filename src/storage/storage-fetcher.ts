export abstract class StorageFetcher {
  abstract uploadFile(file: any, filePath: string, fileName: string): Promise<string>;

  abstract deleteFile(filePath: any, fileName: string): Promise<string>;

  abstract download(filePath: any, fileName: string): Promise<string>;
}
