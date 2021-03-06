import React from 'react'
import {Routes,Route} from 'react-router-dom';

// layout import
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHOC({component: Component,path,...rest}) {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    path={path}
                    element={
                        <HomeLayout>
                            <Component/>
                        </HomeLayout>
                    }
                />
            </Routes>
        </>
    )
}

export default HomeLayoutHOC;
