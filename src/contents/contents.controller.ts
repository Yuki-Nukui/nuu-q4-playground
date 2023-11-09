import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { Contents } from '@prisma/client';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Get()
  async findAll(): Promise<Contents[]> {
    return this.contentsService.findAll();
  }

  @Post()
  async create(@Body() content: Contents): Promise<Contents> {
    this.contentsService.create(content);
    return content;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Contents> {
    return this.contentsService.findById(id);
  }
}
