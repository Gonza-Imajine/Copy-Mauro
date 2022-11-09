import FormRegister from '../components/FormRegister';
import Layout from '../components/Layout';
import FormikRegister from '../components/FormikRegister';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { flow } from '../redux/actions';
import Loading from '../components/Loading';

function Register() {
    //Consume states con useSelector
    const { isAuthenticated, profile, token, loading } = useSelector(({ auth }) => auth);
    //Trigger Actions
    const dispatch = useDispatch();

    /* 
    return (
        <Layout>
            <FormikRegister></FormikRegister>
        </Layout>
    ); */
    console.log(isAuthenticated);
    const handleExec = () => {
        dispatch(flow());
    };
    if (loading) {
        return (
            <div>
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div>
            <Button onClick={handleExec}>{isAuthenticated ? 'Login' : 'Logout'}</Button>
        </div>
    );
}

export default Register;
