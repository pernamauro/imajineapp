import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import axios from 'axios';

function Home() {

    const location = useLocation();
    //useState => [users, setUsers]
    const [users, setUsers] = useState(null)

    async function fetchData() {
        const res = await axios.get('http://localhost:8080/api/users')
        setUsers(res.data.data.users);
    }

    // useEfect => if users==null => axios get users then setusers(list)
    useEffect(() => {
        if(!users) {
            setTimeout(() => {
                fetchData();
            }, 2000)
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
                    users ?
                    <table className="table table-hover" style={{ width: '60%'}}>
                        <thead>
                        <tr className="table-active">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Age</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index}</th>
                                            <td>{user.name}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.age}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    : null
                }
            </div>
        </Layout>
    );
}

export default Home;
