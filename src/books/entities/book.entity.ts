import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Book {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  author: string;

  @Field(() => Int)
  @Prop()
  publicationYear: number;
}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);
