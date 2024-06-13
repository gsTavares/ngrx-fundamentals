import { Component, OnInit } from '@angular/core';
import { BooksService } from '../book-list/books.service';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from '../state/books.selectors';
import { BooksActions, BooksApiActions } from '../state/books.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  title = 'ngrx-fundamentals';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: BooksService, private store: Store) {

  }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe({
        next: (books) => this.store.dispatch(BooksApiActions.retrievedBookList({books}))
      })
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }

}
