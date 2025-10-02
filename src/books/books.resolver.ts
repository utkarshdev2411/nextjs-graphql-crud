// src/books/books.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book, { name: 'createBook' })
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.booksService.findAll();
  }

  @Mutation(() => Book, { name: 'updateBook' })
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput._id, updateBookInput);
  }

  @Mutation(() => Book, { name: 'removeBook' })
  removeBook(@Args('id', { type: () => ID }) id: string) {
    return this.booksService.remove(id);
  }
}
