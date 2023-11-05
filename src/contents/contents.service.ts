import { Injectable } from '@nestjs/common';
import { Contents } from './contents.types';

@Injectable()
export class ContentsService {
  // 他のクラスでの使用ができないようにprivate readonlyにする
  private readonly contents: Contents[] = [];

  findAll(): Contents[] {
    return this.contents;
  }

  create(content: Contents): void {
    this.contents.push(content);
  }

  findById(id: string): Contents {
    return this.contents.find((content) => content.id === Number(id));
  }
}
