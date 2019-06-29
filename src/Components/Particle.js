import React from 'react';

import Particles from 'react-particles-js'


function Particle(){
    return (
        <div>
        <Particles
        canvasClassName="background"
        params={{
        particles: {
            number: {
            value: 100,
            density:{
                value_area: 2000
            }
            },
            color:{
            value: '#312450'
            },
            size:{
            value: 3
            },
            opacity:{
            value: 1
            },
            line_linked:{
            enable: true,
            distance: 250,
            color: '#312450',
            opacity: .8,
            width: 4
            }
        },
        interactivity:{
            events:{
            onhover:{
                enable: true,
                mode: 'repulse'
            }
            },
            modes:{
            repulse:{
                distance: 100,
                duration: 1
            }
            }
            
        }
        }}

        />


        </div>
    )
}
export default Particle