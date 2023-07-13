import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToastContainer = () => {
    const showToastMessage = () => {
        toast.success('Success Notification!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showToastMessage1 = () => {
        toast.error('Error Notification!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showToastMessage2 = () => {
        toast.promise('Promise Notification!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };



    return (
        <>
            <div>
                <button onClick={showToastMessage}>Click Me</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastMessage1}>Click Me</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastMessage2}>Click Me</button>
                <ToastContainer />
            </div>

        </>

    );
};

export default MyToastContainer;
