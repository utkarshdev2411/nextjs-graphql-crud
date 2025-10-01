import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Book, BookDocument} from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  //Creating a new book
  async create(CreateBookInput: CreateBookInput): Promise<Book>{
    const newBook= new this.bookModel(CreateBookInput);
    return newBook.save();
  }

  //RReading all the books
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

}