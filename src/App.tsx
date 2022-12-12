import React from 'react';
import {NavLink, Outlet, Route, Routes, useParams} from 'react-router-dom'; // можно облегч. Link, но не работает c callback в стилях
import './App.css';

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>...
            <NavLink to={'/login'}>login</NavLink>...
            <NavLink to={'/profile'}
                     // style={{color:'lime'}}
                     style={(params)=>{
                        return {color: params.isActive ?'lime' :'black'}
                     }}
            >
                profile
            </NavLink>...

            <NavLink to={'/profile/setting'}
                     // className={'def'}
                     className={({isActive})=> isActive ?'act' :'def'}
            >
                setting</NavLink>...

            <a href="https://github.com/IgnatZakalinsky/simple-react-homeworks"
               target={'_blank'}
               rel={'noreferrer nofollow noopener'}
            >
                xxx
            </a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>MAIN</div>}/>
                <Route path={'/login'} element={<div>LOGIN</div>}/>
                <Route path={'/profile'} element={<div>PROFILE</div>}/>
                <Route path={'/profile/setting'} element={<div>SETTING</div>}/>
            </Routes>

 {/*const Profile = ()=>{*/}
 {/*    const params = useParams<'*'>() //<'x'|'y'>достаем параметры(объект с id:); <> для подсказки params.id*/}
 {/*    const  some = params["*"]*/}
 {/*    console.log(some)  //1*/}
 {/*    return <div>PROFILE</div>*/}
 {/*}*/}
 {/*function App() {*/}
 {/*    return (*/}
 {/*        <div className="App">*/}
 {/*            <NavLink to={'/'}>main</NavLink>...*/}
 {/*            <NavLink to={'/login'}>login</NavLink>...*/}
 {/*            <NavLink to={'/profile'}>profile</NavLink>...*/}
 {/*            <NavLink to={'/profile/1'}>profile/1</NavLink>*/}

 {/*            <Routes>*/}
 {/*                <Route path={'/*'} element={<div>404</div>}/>*/}
 {/*                <Route path={'/'} element={<div>MAIN</div>}/>*/}
 {/*                <Route path={'/login'} element={<div>LOGIN</div>}/>*/}
 {/*                <Route path={'/profile/*'} element={<Profile/>}/>*/}
 {/*            </Routes>*/}

        {/*<div className="App">*/}
        {/*    <NavLink to={'/'}>main</NavLink>...*/}
        {/*    <NavLink to={'/login'}>login</NavLink>...*/}
        {/*    <NavLink to={'/profile'}>profile</NavLink>...*/}
        {/*    <NavLink to={'/profile/1'}>profile/1</NavLink>*/}

        {/*    <Routes>*/}
        {/*        <Route path={'/*'} element={<div>404</div>}/>*/}
        {/*        <Route path={'/'} element={<div>MAIN</div>}/>*/}
        {/*        <Route path={'/login'} element={<div>LOGIN</div>}/>*/}
        {/*        <Route path={'/profile/:x/:y'} element={<Profile/>}/>*/}
        {/*    </Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile/*'} element={(      // /**/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        /!*<Route path={'*'} element={<div>profile page not found</div>}/>*!/  //*/}
            {/*        <Route index element={<div>CHECK ID</div>}/> // если нет параметров*/}
            {/*        <Route path={':id'} element={<div>-ID-</div>}/>*/}
            {/*        <Route path={'settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={(*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        <Route path={'*'} element={<div>profile page not found</div>}/>*/}
            {/*        <Route index element={<div>CHECK ID</div>}/> // если нет параметров*/}
            {/*        <Route path={':id'} element={<div>-ID-</div>}/>*/}
            {/*        <Route path={'settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={(*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        <Route path={'*'} element={<div>profile page not found</div>}/> //надо 2 параметра после profile*/}
            {/*        <Route path={':id'} element={<div>-ID-</div>}/> // на 1 п. после p.; ':id/:x' на 2п.*/}
            {/*        <Route path={'settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={(*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        <Route path={'*'} element={<div>profile page not found</div>}/>*/}
            {/*        <Route path={'settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={(*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        <Route path={'settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile'} element={(*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Outlet/>*/}
            {/*        </div>*/}
            {/*    )}>*/}
            {/*        <Route path={'/profile/settings'} element={<div>SETTINGS</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>MAIN</div>}/>*/}
            {/*    <Route path={'/login/*'} element={<div>LOGIN</div>}/>*/}
            {/*    <Route path={'/profile/*'} element={*/}
            {/*        <div>*/}
            {/*            PROFILE*/}
            {/*            <Routes>*/}
            {/*                <Route path={'/settings'} element={<div>SETTINGS</div>}/>*/}
            {/*            </Routes>*/}
            {/*        </div>}/>*/}
            {/*</Routes>*/}

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
