/* import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; */
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import CreateFood from './pages/CreateFood';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/recover_password' element={<RecoverPassword />} />
                <Route path='/reset_password' element={<ResetPassword />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/my-profile' element={<MyProfile />} />
                <Route exact path='/create-food' element={<CreateFood />} />
            </Routes>
        </>
    );
}

export default App;
