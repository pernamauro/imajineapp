import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormRegister from '../components/FormRegister';
import Layout from '../components/Layout';
import { flow } from '../redux/actions/auth';
import Loading from '../components/Loading';

function Register() {
    const { isAuthenticated, loading } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();

    const handleExec = () => {
        // dispatch(flow());
    };

    if (loading) return <Loading />;

    return (
        // <Layout>
        //     <div
        //         className='d-flex align-items-center justify-content-center'
        //         style={{ width: '100%', height: '80vh' }}
        //     >
        //         <Button onClick={handleExec}>{!isAuthenticated ? 'Logout' : 'Login'}</Button>
        //     </div>
        // </Layout>
        <Layout>
            <FormRegister></FormRegister>
        </Layout>
    );
}

export default Register;
