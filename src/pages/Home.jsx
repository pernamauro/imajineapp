import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Table from '../components/Table';
import axios from 'axios';

function Home() {

    const location = useLocation();
    //useState => [users, setUsers]
    const [users, setUsers] = useState(null)

    async function fetchData() {
        const res = await axios.get('http://localhost:8080/api/users')
        const {users} = res.data.data
        setUsers(users);
    }

    // useEfect => if users==null => axios get users then setusers(list)
    useEffect(() => {
        if(!users) {
            setTimeout(() => {
                fetchData();
            }, 1000)
        }
        // console.log(users);
    }, [users])

    //if !users => loading
    if(!users) return <Loading/>



    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center'
                style={{
                    width: '100%',
                    height: '80vh',
                }}
            >
                {
                    users ? <Table users={users}/> : null
                }
            </div>
        </Layout>
    );
}

export default Home;
