import styled from 'styled-components'
import logo from '/logo.svg'
// import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { openSidebar } from '../../redux/actions';
// import { links } from '../utils/constants'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import BookIcon from '@mui/icons-material/Book';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;


  return <NavContainer>
    <div className='nav-center'>
      <div className='nav-header'>
        <Link to='/'>
          <img src={logo} alt='comfy sloth' />
        </Link>
        <button type='button' className='nav-toggle' onClick={() => dispatch(openSidebar())}>
          <MenuIcon />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/' className={pathname === '/' ? "active" : "" } style={{display: "flex",alignItems: 'center', justifyContent: "center"}}><BookIcon/> Library</Link>
        </li>
        <li>
          <Link to='/reading-list' className={pathname === '/reading-list' ? "active" : "" } style={{display: "flex",alignItems: 'center', justifyContent: "center"}}><BookmarkAddIcon/>Reading List</Link>
        </li>
        
      </ul>
    </div>
  </NavContainer>
}

const NavContainer = styled.nav`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid #c9c9c9; 
  

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 75px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #f76434;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 1.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
      .active{
        border-bottom: 2px solid var(--clr-primary-7);
        color: var(--clr-primary-7);
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
