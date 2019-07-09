import React, { Component } from "react";
import './receitas_rapidas.scss';
import salgadas from '../../assets/salgadas.jpg';
import doces from '../../assets/doces.jpg';

class ReceitasRapidas extends Component {
    render(){
        return(
            <section class="receitas_rapidas">
                <h2>Receitas rápidas</h2>
                <div class="doces_salgadas">
                    <img src={doces} alt=""/>
                    <p>Doces</p>
                </div>

                <div class="doces_salgadas">
                    <p>Salgadas</p>
                    <img src={salgadas} alt=""/>
                </div>
            </section>
        )
    }
}

export default ReceitasRapidas
