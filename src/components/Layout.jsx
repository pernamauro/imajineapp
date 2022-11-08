/* import { useState } from 'react';*/
import { Stack } from 'react-bootstrap';
import Background from '../assets/background.png';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Layout({ children, url }) {
    const navigate = useNavigate();

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundSize: '80% 100vh',
            }}
            className='d-flex align-items-center justify-content-center bg-image'
        >
            <Stack
                style={{
                    width: '100%',
                    height: '100px',
                }}
                className='justify-content-center ms-5 mt-5'
            >
                <div
                    style={{
                        width: '100%',
                        height: '150px',
                    }}
                >
                    <div
                        className='d-flex justify-content-between'
                        style={{
                            width: '90%',
                        }}
                    >
                        <Link to='/home'>
                            <img
                                src={`${Logo}`}
                                alt='logo'
                                style={{
                                    width: '230px',
                                }}
                            />
                        </Link>
                        {url ? (
                            <div
                                className='d-flex flex-row justify-content-between align-items-center'
                                style={{ width: '25%' }}
                            >
                                <Link to='/my-profile'>My profile</Link>
                                <button
                                    type='button'
                                    className='btn btn-light bg-light.bg-gradient shadow bg-body rounded rounded-pill'
                                    style={{ width: '170px', height: '54px' }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.removeItem('jwt');
                                        navigate('/login');
                                    }}
                                >
                                    Log out
                                </button>
                            </div>
                        ) : null}
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        {children}
                    </div>
                </div>
            </Stack>
        </div>
    );
}

export default Layout;
