import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Table from '../components/Table';
import axios from 'axios';

function Home() {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const { email } = useParams();

    async function fetchData() {
        const token = localStorage.getItem('jwt');
        const res = await axios.get(`http://localhost:8080/api/auth/me`, {
            headers: {
                jwt: token,
            },
        });

        console.log(res.data.data.user);

        const { user } = res.data.data;
        setUser(user);
    }

    useEffect(() => {
        if (!user) {
            setTimeout(() => {
                fetchData();
            }, 1000);
        }
    }, [user]);

    if (!user) return <Loading />;

    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center'
                style={{
                    width: '100%',
                    height: '80vh',
                }}
            >
                {user ? (
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p>
                            {user.name}&nbsp;{user.lastname}
                        </p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ) : null}
            </div>
        </Layout>
    );
}

export default Home;
