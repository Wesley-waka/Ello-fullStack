import { useEffect, useState } from 'react'
import useData from "../hooks/useData";
import { useDispatch, useSelector } from 'react-redux';
import {  fetchBooksSuccess, searchBooks } from '../redux/actions';
import {BookState} from '../redux/reducers/reducer.ts';
import { Book } from '../services/types.ts';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput';
import Teamcard from '../components/Layout/Teamcard'; 
import { Box, Grid, Pagination, Skeleton } from '@mui/material';
import { booksQuery } from '../services/queries.ts';

const BookGrid = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useData(booksQuery);
  const books = useSelector((state: { books: BookState }) => state.books.sortedBooks);
  const itemsPerPage = 25;
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];




  const displayedBooks = books.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(searchBooks(event.target.value));
  };




  useEffect(() => {
    if (data && !isLoading && !error) {
      dispatch(fetchBooksSuccess(data));
    }
  }, [data, isLoading, error, dispatch]);
  


  if (error) return <div>{error}</div>;

  return (
    <Layout>
    


    <SearchInput setQuery={setQuery} query={query} handleSearch={handleSearch}/>
      
      {/* <DynamicGrid
        spacing={4}
        maxColumns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
        fullWidth
        // columnSpacing={{lg: 10}}
      >
      
      </DynamicGrid> */}

      <Grid container spacing={2} sx={{ padding: 3 }}>
        {isLoading && skeletons.map((skeleton) => (
            <Box sx={{ pt: 0.5,pl: 2 }} key={skeleton}>
            <Skeleton variant="rectangular" width={310} height={218} />
            <Skeleton width="30%"/>
            <Box sx={{display: "flex",justifyContent: "space-between"}}>
              <Skeleton width="30%" />
              <Skeleton width="25%" />
            </Box>
          </Box>
          ))
        }
        {displayedBooks.map((book: Book,index: number) => (
          <Teamcard book={book} title={book.title} key={index} author={book.author} readingLevel={book.readingLevel} photoURL={book.coverPhotoURL}/>
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
    </Layout>
  );
};

export default BookGrid;
