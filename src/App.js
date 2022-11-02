/* import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; */
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register';
import Loading from './components/Loading';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/recover_password' element={<RecoverPassword />} />
                <Route path='/reset_password' element={<ResetPassword />} />
                <Route path='/loading' element={<Loading />} />
            </Routes>
        </>
    );
}

export default App;
