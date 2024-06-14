import { Book, SORT_BOOKS,SIDEBAR_CLOSE, FETCH_BOOKS_SUCCESS, BookActionTypes, SEARCH_BOOKS, ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST, SIDEBAR_OPEN } from '../../services/types';

export interface BookState {
  books: Book[];
  sortedBooks: Book[];
  bookSearch: Book[];
  readingList: Book[];
  isSidebarOpen: boolean;
}

const initialState: BookState = {
  isSidebarOpen: false,
  books: [],
  sortedBooks: [],
  bookSearch: [],
  readingList: [],
};

const sortArray = (array: Book[], criterion: string): Book[] => {
  const sortedArray = [...array]; 
  switch (criterion) {
    case '':
      return sortedArray;
    case 'author':
      return sortedArray.sort((a, b) => a.author.localeCompare(b.author));
    case 'title':
      return sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    case 'readingLevel':
      return sortedArray.sort((a, b) => a.readingLevel.localeCompare(b.readingLevel)); 
    default:
      return sortedArray;
  }
};

const searchArray = (array: Book[], query: string): Book[] => {
  if (!query) {
    return []; 
  }
  const lowerCaseQuery = query.toLowerCase();
  return array.filter(book =>
    book.title.toLowerCase().includes(lowerCaseQuery)
  );
};

const bookReducer = (state = initialState, action: BookActionTypes): BookState => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        sortedBooks: sortArray(payload, ''),
        bookSearch: [],
      };
    case SORT_BOOKS:
      return {
        ...state,
        sortedBooks: sortArray(state.books, payload),
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        bookSearch: searchArray(state.books, payload), 
      };
    case ADD_TO_READING_LIST: {
      if (!payload) return state; 
      const { title, author, readingLevel, coverPhotoURL } = payload;
      const existingItem = state.readingList.find(item => item.title === title);
      if (existingItem) {
        return state;
      }
      const newItem: Book = { title, author, readingLevel, coverPhotoURL };
      return { ...state, readingList: [...state.readingList, newItem] };
    }
    case REMOVE_FROM_READING_LIST: {
      if (!payload) return state; 
      const { title } = payload;
      const updatedReadingList = state.readingList.filter(item => item.title !== title);
      if (updatedReadingList.length === state.readingList.length) {
        return state;
      } else {
        return { ...state, readingList: updatedReadingList };
      }
    }
    case SIDEBAR_OPEN: {
      return { ...state, isSidebarOpen: true }
    }
    case SIDEBAR_CLOSE: {
      return { ...state, isSidebarOpen: false }
    }
    default:
      return state;
  }
};

export default bookReducer;
