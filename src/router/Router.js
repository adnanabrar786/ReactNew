import React, { } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import G from '../component/G';


const Router = () => {
    return (
        <>

            <BrowserRouter>
                <AppRoutes>
                    <Route path="/g" element={<G />} />
                </AppRoutes>
            </BrowserRouter>

        </>
    );
};

export default Router;