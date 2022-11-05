import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Contact } from './components/Contact';

export const Router = () => {
  return (

    <Routes>
        <Route path='/' element={<App />} />
         <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
