import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../themes/theme.scss'
import NavMenu from '../components/navmenu/nav.jsx'
import Home from '../components/home/home.jsx'
import ListCategories from '../components/tutorials/list_categories.jsx'
import Blog from '../components/blog/blog.jsx'
import Contacts from '../components/contacts/contacts.jsx'
import AboutMe from '../components/about/about_me.jsx'
import NotFound from '../components/notfound/notfound.jsx'
import Footer from '../components/footer/footer.jsx'


export const App = () => (
    <div className="container-main">
        <Router>
            <header>
                <NavMenu />
            </header>
            
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/categories/:cat" component={ListCategories}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/contacts" component={Contacts}></Route>
                <Route path="/about-me" component={AboutMe}></Route>
                <Route component={NotFound}></Route>

            </Switch>

            <Footer />

        </Router> 
    </div>

)
