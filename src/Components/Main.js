import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Main extends Component {
        state = {
            class: 'none' 
        }
componentDidMount(){
    this.transitionStyle()
}
    transitionStyle = () =>{
        const time = setTimeout(() => {
            this.setState({
                class: 'welcomewrapper'
            })
        },500)
    }

    render() {
        const code = '<Coder>'
        const path = this.props.history.location.pathname
 
        return (
           
            <div className={this.state.class}>
                
            <div className='box'>
                <h1>Michael Eddards</h1>
           
           
                <h1>{code}</h1>
          
           
                <h1>Lets build together</h1>
            
            </div>
        </div>
            
         
        )
    }
}
export default withRouter(Main)