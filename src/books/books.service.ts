import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  //Creating a new book
  async create(CreateBookInput: CreateBookInput): Promise<Book> {
    const newBook = new this.bookModel(CreateBookInput);
    return newBook.save();
  }

  //Reading all the books
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  //Updating book based on its id
  async update(id: string, UpdateBookInput: UpdateBookInput): Promise<Book> {
    const existingBook = await this.bookModel
      .findByIdAndUpdate(id, UpdateBookInput, { new: true })
      .exec();
    if (!existingBook) {
      throw new NotFoundException(`Book with id "${id}" not found`);
    }
    return existingBook;
  }

  //deleting a book based on id
  async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
    if (!deletedBook) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return deletedBook;
  }
}
