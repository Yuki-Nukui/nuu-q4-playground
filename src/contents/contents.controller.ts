import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { Contents } from './contents.types';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Get()
  findAll(): Contents[] {
    return this.contentsService.findAll();
  }

  @Post()
  create(@Body() content: Contents): void {
    this.contentsService.create(content);
  }

  @Get(':id')
  findById(@Param('id') id: string): Contents {
    return this.contentsService.findById(id);
  }
}
