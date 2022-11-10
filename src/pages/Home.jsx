import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoods } from '../redux/actions/food';

function Home() {
    const location = useLocation();
    const dispatch = useDispatch();

    const { token } = useSelector(({ auth }) => auth);
    const { allUserFoods } = useSelector(({ food }) => food);

    useEffect(() => {
        dispatch(getAllFoods(token));
    }, []);

    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center'
                style={{
                    width: '100%',
                    height: '80vh',
                }}
            >
                {allUserFoods.length
                    ? allUserFoods.map((item) => {
                          return (
                              <div>
                                  <p>{item.name}</p>
                                  <p>{item.price}</p>
                              </div>
                          );
                      })
                    : null}
            </div>
        </Layout>
    );
}

export default Home;
