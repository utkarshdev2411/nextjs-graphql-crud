import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  author: string;

  @Field(() => Int)
  @IsInt()
  @Min(1900)
  @Max(2025)
  publicationYear: number;
}
