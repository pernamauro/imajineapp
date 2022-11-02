import Layout from './Layout';

function Loading() {
    return (
        <Layout>
            <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
                width: '100%',
                height: '80vh',
            }}
            >   
                <div class='spinner-border' 
                     role='status'
                     style={{
                        width: '50px',
                        height: '50px'
                     }}
                >
                    <span class='visually-hidden'>Loading...</span>
                </div>
            </div>
        </Layout>
    );
}

export default Loading;
