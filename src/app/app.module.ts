import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({books: booksReducer, collection: collectionReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
