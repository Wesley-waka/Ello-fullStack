import logo from '/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { closeSidebar } from '../../redux/actions'
import { useSelector } from 'react-redux'
import { BookState } from '../../redux/reducers/reducer'
import { useDispatch } from 'react-redux'
import BookIcon from '@mui/icons-material/Book';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


const Sidebar = () => {
    const isSidebarOpen = useSelector((state: { books: BookState}) => state.books.isSidebarOpen);
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;

return <SidebarContainer>
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='comfy sloth' />
        <button className='close-btn' type='button' onClick={() => dispatch(closeSidebar())}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        <li>
            <Link to='/' className={pathname === '/' ? "active" : "" } onClick={() => dispatch(closeSidebar())} style={{display: "flex",alignItems: 'center', justifyContent: "space-around"}}>Library<BookIcon/></Link>
        </li>
        <li>
            <Link to='/reading-list' className={pathname === '/reading-list' ? "active" : "" } onClick={() => dispatch(closeSidebar())} style={{display: "flex",alignItems: 'center', justifyContent: "space-around"}}>Reading List<BookmarkAddIcon/></Link>
        </li>
      </ul>
    </aside>
  </SidebarContainer>
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #f76434;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .active{
    color: var(--clr-primary-7);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: 999;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
