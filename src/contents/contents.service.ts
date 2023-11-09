import { Injectable } from '@nestjs/common';
import { Contents } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContentsService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Contents[]> {
    return await this.prismaService.contents.findMany();
  }

  async create(content: Contents): Promise<Contents> {
    return await this.prismaService.contents.create({
      data: {
        id: content.id,
        title: content.title,
        content: content.content,
        author: content.author,
        createdAt: content.createdAt,
      },
    });
  }

  async findById(id: string): Promise<Contents> {
    return await this.prismaService.contents.findUnique({
      where: { id: Number(id) },
    });
  }
}
