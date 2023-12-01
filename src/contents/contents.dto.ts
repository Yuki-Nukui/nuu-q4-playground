import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ContentsSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export class ContentsDto extends createZodDto(ContentsSchema) {}
