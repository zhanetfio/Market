import React from 'react';
import { Route, Routes} from "react-router-dom";
import {Cart} from "../Cart/Cart";
import {Products} from "../Products/Products";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'*'} element={<Products/>}/>
                <Route path={'/cart'} element={<Cart/>} />
                {/*<Route path={'/errorPage'} element={<ErrorPage/>}/>
                <Route path={'*'} element={<Navigate to={'/errorPage'}/>}/>*/}
            </Routes>
        </div>
    );
};

