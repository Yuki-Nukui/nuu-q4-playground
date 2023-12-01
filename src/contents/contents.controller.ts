import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ContentsService } from './contents.service';
import { Contents } from '@prisma/client';
import { ContentsDto, ContentsSchema } from './contents.dto';
import { ZodValidationPipe } from 'nestjs-zod';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Get()
  async findAll(): Promise<Contents[]> {
    return this.contentsService.findAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(ContentsSchema))
  async create(@Body() content: ContentsDto): Promise<Contents> {
    return this.contentsService.create(content);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Contents> {
    return this.contentsService.findById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<Contents> {
    return this.contentsService.deleteById(id);
  }
}
