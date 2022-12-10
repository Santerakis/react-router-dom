import React from 'react';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavLink to={''}>main</NavLink>...
            <NavLink to={'/login'}>login</NavLink>...
            <NavLink to={'/profile'}>profile</NavLink>...
            <NavLink to={'/profile/settings'}>settings</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>MAIN</div>}/>
                <Route path={'/login/*'} element={<div>LOGIN</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        PROFILE
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'*'} element={<div>profile page not found</div>}/>
                    <Route index element={<div>CHECK ID</div>}/> // если нет параметров
                    <Route path={':id'} element={<div>-ID-</div>}/>
                    <Route path={'settings'} element={<div>SETTINGS</div>}/>
                </Route>
            </Routes>

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
