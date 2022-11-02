import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

function Home({ props }) {
    //useState => [users, setUsers]

    // useEfect => if users==null => axios get users then setusers(list)

    //if !users => loading

    const location = useLocation();

    console.log(location);

    console.log(location.pathname);
    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center'
                style={{
                    width: '100%',
                    height: '80vh',
                }}
            >
                {/* users.map */}
            </div>
        </Layout>
    );
}

export default Home;
