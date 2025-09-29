import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            {/*logo*/}
            <div className='logo'>
                <Link to = '/'>
                    <span className='logo-1'>R</span>
                    <span className='logo-2'>S</span>
                    <span className='logo-3'>R</span>
                </Link>
            </div>

            {/*Busca*/}
            <div className='search-bar'>
                <input type='text' placeholder='Buscar "Apartamento"'/>
                <div className='location'>
                    <button className='search-btn'>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}