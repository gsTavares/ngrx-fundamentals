import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { BooksApiActions } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

/**
 * Reducer functions acts as an interceptor to an action and performs a change using the previous state.
 * They MUST return the same type defined in the intialState
 */

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, {books}) => books)
);