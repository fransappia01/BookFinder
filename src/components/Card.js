import React, { useState } from 'react';
import './Card.css'

const Card = ({ book }) => {

    const dummyImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png';

    return (
        <div className="cards-container">
            {book.map((book, id) => (
                <div key={id} className="book">
                    <div className="book__title">
                        <h2>
                            <a href={book.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank">{book.volumeInfo.title}</a>
                        </h2>
                    </div>
                    <div className="book__img-block">
                        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail || dummyImg} alt={book.link} className="book__img"/>
                    </div>
                    <div className="book__desc">
                        <div className="book__field" title="author">
                            <strong>Author:</strong> {book.volumeInfo.authors || 'No especificado'}
                        </div>
                        <div className="book__field">
                            <strong>Publisher:</strong> {book.volumeInfo.publisher|| 'No especificado'}
                        </div>
                        <div className="book__field">
                            <strong>Published:</strong> {book.volumeInfo.publishedDate || 'n/a'}
                        </div>
                        <div className="book__field">
                            {book.desc} 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
