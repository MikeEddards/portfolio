import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class About extends Component {
        state = {
            class: 'none',
            pClass: 'pNone' 
        }
componentDidMount(){
    this.transitionStyle()
}
    transitionStyle = () =>{
        const time = setTimeout(() => {
            this.setState({
                class: 'about'
            })
        },300)
        setTimeout(()=> {
            this.setState({
                pClass: 'p'
            })
        },1000)
    }

    render() {
        const code = '<Coder>'
        const path = this.props.history.location.pathname
 
        return (
           
            <div className={this.state.class}>
                <h1>About Me</h1>
            <div className='box'>
              <p className={this.state.pClass}>Former truck driver and manager of a retail store. I have found great joy in web development. I am passionate about learning new skills and applying my current skill set to solve today's problems. I love to build either with code or with my hands making something from nothing is very rewarding.</p>
            
            </div>
        </div>
            
         
        )
    }
}
export default withRouter(About)