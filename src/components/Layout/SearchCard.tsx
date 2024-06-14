import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { addToReadingList, removeFromReadingList } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { BookState } from '../../redux/reducers/reducer.ts';
import { useSelector } from 'react-redux';
import { Book } from '../../services/types';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface Props{
  title: string;
  author: string;
  readingLevel: string;
  photoURL: string;
  book: Book
}


export default function MediaControlCard({title, photoURL,book}: Props) {
  const dispatch = useDispatch();
  const readingList = useSelector((state: { books: BookState}) => state.books.readingList);


  const isInReadingList = (book: Book) => {
    return readingList.some(item => item.title === book.title);
  };




  const handleToggleReadingList = (book: Book) => {
    if (isInReadingList(book)) {
      dispatch(removeFromReadingList(book));
    } else {
      dispatch(addToReadingList(book));
    }
  };

  return (
    <Card onClick={() => handleToggleReadingList(book)} sx={{ display: 'flex', width: { xs: '100%', sm: '90%', md: '95%' }, }}>
        <CardMedia
        component="img"
        sx={{ width: {xs:'10%',sm:'30%',md: 151},display: {xs:'none',sm:'block'} }}
        image={`/${photoURL}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: {xs:'row',sm:'column'} }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1">
          {title}
          </Typography>
        </CardContent>
        {isInReadingList(book) ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
      </Box>
      
    </Card>
  );
}
