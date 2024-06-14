import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BookState } from "../redux/reducers/reducer.ts";
import { Book } from "../services/types";
import SearchCard from './Layout/SearchCard'
import Selector from '../components/Selector';

interface Props {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setQuery: (query: string) => void;
  query: string
}

interface Prop {
  results: Book[]
}

const SearchResultsList = ({ results }: Prop) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div key={id}
        className="search-result"
        // onClick={(e) => alert(`You selected ${result}!`)}
      >
      <SearchCard book={result} title={result.title} key={id} author={result.author} readingLevel={result.readingLevel} photoURL={result.coverPhotoURL}/>
      
    </div>;
      })}
    </div>
  );
};

const SearchInput = ({ handleSearch, query }: Props) => {
  // const ref = useRef("");
  const bookSearch = useSelector((state: { books: BookState }) => state.books.bookSearch);
  
  console.log(bookSearch);

  return (
    <>
    <form onSubmit={(event) => {
      event.preventDefault();
      // handleSearch(query);
    }}>
      <div className="input-wrapper">
      <FaSearch id="search-icon" />
        {/* <div children={<BsSearch />} /> */}
        <input value={query} type="text"  placeholder="Search books..." onChange={handleSearch}/>
      {bookSearch && bookSearch.length > 0 && <SearchResultsList results={bookSearch} />}
      </div>
      <Selector/>
    </form>
    
    </>
  );
};

export default SearchInput;
