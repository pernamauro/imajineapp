import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';
import FormCreateFood from '../components/FormCreateFood';

function CreateFood() {
    const location = useLocation();

    return (
        <Layout url={location.pathname}>
            <FormCreateFood />
        </Layout>
    );
}

export default CreateFood;
