// types.ts
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const SORT_BOOKS = 'SORT_BOOKS';
export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const ADD_TO_READING_LIST = 'ADD_TO_READING_LIST';
export const REMOVE_FROM_READING_LIST = 'REMOVE_FROM_READING_LIST';
export const SIDEBAR_OPEN = 'SIDEBAR_OPEN';
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE';

export interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}



export interface FetchBooksSuccessAction {
  type: typeof FETCH_BOOKS_SUCCESS;
  payload: Book[];
}

export interface SortBooksAction {
  type: typeof SORT_BOOKS;
  payload: string;
}

export interface SearchBooksAction {
  type: typeof SEARCH_BOOKS;
  payload: string;
}



export interface AddToReadingListAction {
  type: typeof ADD_TO_READING_LIST;
  payload: Book;
}

export interface RemoveFromReadingListAction{
  type: typeof REMOVE_FROM_READING_LIST;
  payload: Book;
}

export interface SideBarOpen{
  type: typeof SIDEBAR_OPEN;
  payload: boolean
}

export interface SideBarClose{
  type: typeof SIDEBAR_CLOSE;
  payload: boolean
}


export type BookActionTypes =  SideBarClose | SideBarOpen | FetchBooksSuccessAction | RemoveFromReadingListAction | SortBooksAction | SearchBooksAction | AddToReadingListAction;
