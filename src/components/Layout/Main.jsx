import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='grid grid-cols-2 gap-96 mx-8 mt-8'>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div>
                <h1>hemonto</h1>
            </div>


        </div>
    );
};

export default Main;