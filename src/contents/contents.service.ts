import { Injectable, NotFoundException } from '@nestjs/common';
import { Contents } from '@prisma/client';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { PrismaService } from '../prisma.service';
import { ContentsDto } from './contents.dto';

@Injectable()
export class ContentsService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Contents[]> {
    return await this.prismaService.contents.findMany();
  }

  async create(content: ContentsDto): Promise<Contents> {
    dayjs.locale(ja);
    const date = dayjs().format('YYYY/MM/DD HH:mm');

    return await this.prismaService.contents.create({
      data: {
        title: content.title,
        content: content.content,
        author: content.author,
        createdAt: date.toString(),
      },
    });
  }

  async findById(id: number): Promise<Contents> {
    const content = await this.prismaService.contents.findUnique({
      where: { id: id },
    });

    if (content === null) {
      throw new NotFoundException();
    } else {
      return content;
    }
  }

  async deleteById(id: number): Promise<Contents> {
    const content = await this.prismaService.contents.delete({
      where: { id: id },
    });

    if (content === null) {
      throw new NotFoundException();
    } else {
      return content;
    }
  }
}
