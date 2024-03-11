import React, { useState } from 'react';
import Modal from 'react-modal';
import './HomeModal.css';
import Card from './Card'; // Importa el componente Card

const HomeModal = ({ onSubmit }) => {
    const [book, setBook] = useState('');
    const [booksList, setBooksList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const handleInputChange = (event) => {
        setBook(event.target.value);
    };

    const handleModalSubmit = async (event) => {
        event.preventDefault();
        if (book.trim() !== '') {
            try {
                const apiKey = process.env.REACT_APP_KEY;
                //console.log(apiKey);
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`);
                const data = await response.json();
                setBooksList(data.items );
                setModalIsOpen(true);       //mantengo siempre abierto el modal
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        } else {
            console.error("Se requiere nombre del libro");
        }
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                className="form-modal"
                overlayClassName="overlay" 
            >
                <form onSubmit={handleModalSubmit}>
                    <label className='label-book'>
                        Find your Book
                    </label>
                    <input
                        className='input-form'
                        type="text"
                        placeholder='Ingrese el nombre del libro'
                        value={book}
                        onChange={handleInputChange}
                    />
                    <button className='boton' type="submit" disabled={!modalIsOpen}>Buscar</button>
                </form>
            </Modal>
            <Card book={booksList} />
        </div>
    );
};

export default HomeModal;
