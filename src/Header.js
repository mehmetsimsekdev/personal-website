import './header.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';


function Header() {

    return (
        <div className='header'>
        <Menu/>
      </div>
    );
}

function Menu() {
    const menuItem = ['About', 'Articles', 'Projects', 'Contact'];

    return(
        <ul className='menu-container'>
            {
               menuItem.map((menu, index) => (
                <a href='/todo' className='menu-items' key={index}>{menu}</a>
               ))

            }
            <MenuIcons/>
        </ul>
    );
}

function MenuIcons() {
    return(
        <div className='menu-social-media-icons'>
            <a className='menu-social-media-icon' href='/todo'><AiFillGithub size={'2rem'}/></a>
            <a className='menu-social-media-icon' href='/todo'><AiFillLinkedin size={'2rem'}/></a>
            <a className='menu-social-media-icon' href='/todo'><AiFillTwitterCircle size={'2rem'}/></a>
        </div>
    );
}

export default Header;