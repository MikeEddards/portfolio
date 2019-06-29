import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import github from '../image/github.png'
import linkedin from '../image/linkedin.png'

 class Contact extends Component {
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
                class: 'contact'
            })
        },300)
        setTimeout(()=> {
            this.setState({
                pClass: 'p'
            })
        },1000)
    }

    render() {

        const path = this.props.history.location.pathname
 
        return (
           
            <div className={this.state.class}>
                <h1>Contact</h1>
            <div className='box'>
             <a href="https://www.linkedin.com/in/mike-eddards/" target='_blank'>
                 <img src={linkedin} />
             <h3>Check out my LinkedIn</h3></a>   
            
            <a href="https://github.com/MikeEddards" target='_blank'><img src={github} className='github' />
            <h3>Check out my GitHub</h3></a>
       
            
            </div>
        </div>
            
         
        )
    }
}
export default withRouter(Contact)