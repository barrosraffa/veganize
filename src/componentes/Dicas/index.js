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
                <section className="background_color">
                <div>
                    <div class="dicas">
                        <h2 className="title_box">Dicas</h2>
                        <p>Documentarios sobre o tema</p>
                    </div>
                        <div class="documentary imagem">
                            <a href="https://www.youtube.com/watch?v=O9fbkoX_Rc0" onclick="evento()"><img src={food} id="imagem"/></a>
                            <a href="https://www.youtube.com/watch?v=O9fbkoX_Rc0" onclick="evento()"><img src={cowspircy}id="imagem"/></a>
                            <a href="https://www.youtube.com/watch?v=O9fbkoX_Rc0" onclick="evento()"><img src={okja}id="imagem"/></a>
                            <a href="https://www.youtube.com/watch?v=O9fbkoX_Rc0" onclick="evento()"><img src={health}id="imagem"/></a>
                    </div>
                </div>
            </section>
            </ScrollableAnchor>
            
        )
    }
}

export default Dicas