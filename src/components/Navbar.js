import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div>
            <div className="navbar">
                <h1>Skillmaster Reading List</h1>
                <p>Currently you have { books.length } books to get through...</p>
            </div>
        </div>
    )
}

export default Navbar;