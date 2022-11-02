import { useLocation} from 'react-router-dom';
import Layout from '../components/Layout';

function Home({props}) {


    const location = useLocation();

    console.log(location)

    console.log(location.pathname)
    return (
        <Layout url={location.pathname}>
            <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
                width: '100%',
                height: '80vh',
            }}
            >   
                <p className="text-center">You logged in successfully!!</p>
            </div>
        </Layout>
    );
}

export default Home;