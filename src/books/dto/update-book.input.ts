import { CreateBookInput } from './create-book.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID)
  @IsNotEmpty()
  @IsString()
  _id: string;
}
