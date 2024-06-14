import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import ReadingList from './pages/ReadingList';
import './App.css';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/reading-list' element={<ReadingList />} />
      </Routes>
    </Router>
  );
}

export default App;
