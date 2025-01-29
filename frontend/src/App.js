import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
       < Header/>
       <main className='py-3'>
        <Container>
           <Outlet />
        </Container>
       </main>
       <Footer/>
       <ToastContainer/>
    </>
  );
};

export default App