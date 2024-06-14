import { SORT_BOOKS, ADD_TO_READING_LIST,SIDEBAR_OPEN, Book, FETCH_BOOKS_SUCCESS,  REMOVE_FROM_READING_LIST, SEARCH_BOOKS, SIDEBAR_CLOSE } from '../../services/types';

export const sortBooks = (criterion: string) => ({
  type: SORT_BOOKS,
  payload: criterion,
});

export const fetchBooksSuccess = (books: Book[]) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books
});

export const searchBooks = (query: string) => ({
  type: SEARCH_BOOKS,
  payload: query,
});

export const addToReadingList = (book: Book)=> ({
  type: ADD_TO_READING_LIST,
  payload: book,
});

export const removeFromReadingList = (book: Book) =>({
  type: REMOVE_FROM_READING_LIST,
  payload: book,
});

export const openSidebar = () => ({
  type: SIDEBAR_OPEN,
})

export const closeSidebar = () => ({
  type: SIDEBAR_CLOSE,
})