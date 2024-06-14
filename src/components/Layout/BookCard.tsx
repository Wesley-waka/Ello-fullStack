import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box, Grid } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Book } from '../../services/types.ts';
import { addToReadingList, removeFromReadingList } from '../../redux/actions/index.ts';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BookState } from '../../redux/reducers/reducer.ts';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface Props{
  title: string;
  author: string;
  readingLevel: string;
  photoURL: string;
  book: Book
}

export default function BookCard({title,author,readingLevel,photoURL,book}: Props) {
  const dispatch = useDispatch();
  const readingList = useSelector((state: { books: BookState}) => state.books.readingList);

const colorPicker = (level: string): string[] => {
  switch (level) {
    case 'A':
      return ['#5ACCCC', '#d1f5f5'];
    case 'B':
      return ['#ffffff', '#335c6e'];
    case 'C':
        return ['#fabd33', '#faebc8'];
    case 'D':
        return ['white','#66e9e9'];
    case 'E':
        return ['#f76434', '#f1b6a2'];
    case 'F':
      return ['white', '#faad00'];
    case 'G':
      return ['white', '#52b397'];
    case 'H':
        return ['#ffb193', '#ffe6dc'];
    case 'I':
      return ['#4aa088', '#a5ffe5'];
    case 'J':
      return ['white', '#f76434'];
    default:
      return ['black', 'green'];
  }
};

function getColorClasses(colors: string[]): { textColor: string; backgroundColor: string } {
  const [textColor, backgroundColor] = colors;
  return { textColor, backgroundColor };
}

const colors = colorPicker(readingLevel); 

const { textColor, backgroundColor } = getColorClasses(colors);



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
    <Grid item xs={12} sm={6} md={4} lg={3} >
    <Card sx={{ width: 320 }}>
      
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={`/${photoURL}`}
          loading="lazy"
          alt=""
        />
      </AspectRatio>

      <CardContent orientation="horizontal">
        <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">By {author}</Typography>
        </div>
        <Box sx={{ display: "flex", flexDirection: 'column',ml: 'auto', alignSelf: 'center', fontWeight: 600 }}>
          <Typography level="title-lg">Level:</Typography>
          <div className="reading-level" style={{color: `${textColor}`,backgroundColor: `${backgroundColor}`}}>{readingLevel}</div>
        </Box>
        
      </CardContent>

      <div>
      <Button
      variant="outlined"
      size="md"
      color="primary"
      onClick={() => handleToggleReadingList(book)}
      sx={{
        width: '100%',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: 'space-between',

      }}
    >
        {isInReadingList(book) ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
        <div>{isInReadingList(book)? 'Remove Book' : 'Add Book'}</div>
    </Button>
      
      </div>


    </Card>
    </Grid>
  );
}
