import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BookState } from '../redux/reducers/reducer.ts';
import { Book } from '../services/types.ts';
import Layout from '../components/Layout/Layout';
import Teamcard from '../components/Layout/BookCard.tsx'; 
import { Grid, Pagination } from '@mui/material';
import Empty from '/empty.svg';

const ReadingList = () => {
  const [page, setPage] = useState(1);
  const books = useSelector((state: { books: BookState }) => state.books.readingList);
  const itemsPerPage = 25;
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const displayedBooks = books.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Layout>
      {books.length === 0 ? (
        <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between",alignItems: "center"}}>
          <img style={{marginTop: "3rem"}} src={Empty} alt='comfy sloth' />
          <h4 style={{marginTop: "3rem",color: "black"}}>No Books Assigned</h4>
        </div>
      ) : (
        <>
          <Grid container spacing={2} sx={{ padding: 3 }}>
            {displayedBooks.map((book: Book, index: number) => (
              <Teamcard
                book={book}
                title={book.title}
                key={index}
                author={book.author}
                readingLevel={book.readingLevel}
                photoURL={book.coverPhotoURL}
              />
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(books.length / itemsPerPage)}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            color="primary"
            style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
          />
        </>
      )}
    </Layout>
  );
};

export default ReadingList;
