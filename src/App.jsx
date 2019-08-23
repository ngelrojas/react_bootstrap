import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../themes/theme.scss'
import NavMenu from '../components/navmenu/nav.jsx'
import Home from '../components/home/home.jsx'


export const App = () => (
    <div className="container-main">
        <Router>
            <header>
                <NavMenu />
            </header>
            
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>

            <footer>footer</footer>
        </Router> 
    </div>

)
