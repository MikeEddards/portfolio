import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import addchild from '../image/addChild.png'
import charts from '../image/charts.png'
import dashboard from '../image/dashboard.png'
import dataadder from '../image/dataAdder.png'
import heightchart from '../image/heightChart.png'
import login from '../image/login.png'

 class Projects extends Component {
        state = {
            class: 'none',
            pic: [login,addchild,charts,dashboard,dataadder,heightchart],
            count: 0,
            currentPic: login
        }
componentDidMount(){
    this.transitionStyle()
    this.picTimer()
}
    transitionStyle = () =>{
        let time = setTimeout(() => {
            this.setState({
                class: 'projects'
            })
        },500)
    }
    picTimer = () => {
        let time = setInterval(() => {
            let currentCount = this.state.count
            let newCount = this.state.count
            if(currentCount === 5){
                this.setState({
                    count: 0
                })
            }else{
                newCount++
                this.setState({
                    count: newCount
                })
            }
            this.picChanger()
        }, 3000)
    }
    picChanger = () => {
        this.setState({
            currentPic: this.state.pic[this.state.count]
        })
    }

    render() {

        const code = '<Coder>'
        const path = this.props.history.location.pathname
 
        return (
           
            <div className={this.state.class}>
                <h1>Projects</h1>
            <div className='box'>
                <h1 className='projectName'>Watch My Growth</h1>
                <img src={this.state.currentPic} />
                <p>- Full-stack web application that can chart out your child's growth from birth to 20 years old, giving the user the ability to compare their children against the CDC charts.</p>
                <p>Visit the live site at <a href='http://www.watchmygrowth.com' target="_blank">www.watchmygrowth.com</a></p>
            </div>
            <div className='box2'>
 
            </div>
        </div>
            
         
        )
    }
}
export default withRouter(Projects)