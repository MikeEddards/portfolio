import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact}/>
    </Switch>
)