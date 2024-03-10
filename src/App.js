import React from 'react';
import HomeModal from './components/HomeModal';
import Card from './components/Card';

const App = () => {
    const handleSubmit = (book) => {
      // Lógica para manejar la sumisión del libro
      console.log("Libro enviado:", book);
    };
  
    return (
      <div>
        <HomeModal onSubmit={handleSubmit} />
   
      </div>
    );
  };
  
  export default App;
  