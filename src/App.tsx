import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>...
            <NavLink to={'/login'}>login</NavLink>...
            <NavLink to={'/profile'}>profile</NavLink>...
            <NavLink to={'/profile/settings'}>settings</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>MAIN</div>}/>
                <Route path={'/login/*'} element={<div>LOGIN</div>}/>
                <Route path={'/profile/*'} element={<div>PROFILE</div>}/>
                {/*<Route path={'/profile/settings'} element={<div>SETTINGS</div>}/>*/}
            </Routes>

            {/*<NavLink to={'/'}>main</NavLink>...*/}
            {/*<NavLink to={'/login'}>login</NavLink>...*/}
            {/*<NavLink to={'/profile'}>profile</NavLink>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={<div>PROFILE</div>}/>*/}
            {/*</Routes>*/}

        </div>
    );
}

export default App;
