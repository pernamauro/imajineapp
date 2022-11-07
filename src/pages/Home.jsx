import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Table from '../components/Table';
import axios from 'axios';

function Home() {

    const location = useLocation();
    //useState => [user, setUser]
    const [user, setUser] = useState(null)
    const {email} = useParams();

    async function fetchData() {
        const res = await axios.get(`http://localhost:8080/api/auth/me?email=${email}`)
        const {user} = res.data.data
        setUser(user)
        /* const {users} = res.data.data
        setUsers(users); */
    }

    // useEfect => if users==null => axios get users then setusers(list)
    useEffect(() => {
        if(!user) {
            setTimeout(() => {
                fetchData();
            }, 1000)
        }
        // console.log(users);
    }, [user])

    //if !users => loading
    if(!user) return <Loading/>



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
                    user ?
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p>{user.name}&nbsp;{user.lastname}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div> 
                    : null
                }
                {/* {
                    users ? <Table users={users}/> : null
                } */}
            </div>
        </Layout>
    );
}

export default Home;
