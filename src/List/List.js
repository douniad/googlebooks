import React from 'react';
import './List.css'
import Book from '../Book/Book';

export default function List( props ) {
    
    const { bookResults } = props;
    const listOfBooks = bookResults.items
                        .map(( book, index ) => <Book 
                                                    book={ book } 
                                                    key={ index } />);           
    return (
        <>
        <section className="list_container">
            <ul>
                { listOfBooks }
            </ul>
        </section>    
        </>
    );
}