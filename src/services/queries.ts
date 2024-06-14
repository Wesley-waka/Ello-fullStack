
interface BooksQuery {
    query: string;
}

export const booksQuery: BooksQuery = {
query: "query Books { books { author coverPhotoURL readingLevel title } }"
};
  