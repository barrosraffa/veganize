import React, { Component } from "react";
import './dicas.scss'
import food from '../../assets/food.png';
import cowspircy from '../../assets/cowspircy.png';
import okja from '../../assets/OKJA.jpg';
import health from '../../assets/health.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'



class Dicas extends Component {
    render(){
        return(
            <ScrollableAnchor id={'dicas'}>
                <section>
                <div class=" container dicas">
                    <h2>Dicas</h2>
                    <p>Documentarios sobre o tema</p>
                </div>
        
                <div class="documentary zoom">
                    <img src={food} alt=""/>
                    <img src={cowspircy} alt=""/>
                    <img src={okja} alt=""/>
                    <img src={health} alt=""/>
                </div>
            </section>
            </ScrollableAnchor>
            
        )
    }
}

export default Dicas