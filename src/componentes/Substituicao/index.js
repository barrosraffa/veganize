import React, { Component } from "react";
import './substituicao.scss';
import ovo from '../../assets/ovo.jpg'
import leite from '../../assets/leite.jpg'

class Substituicao extends Component {
    render(){
        return(
            <section class="substitutos">
                <h1 class="box">Substituições</h1>
                <img src={ovo} alt="foto de um ovo quebrado"/>
                <img src={leite} alt="foto de alguem colocando leite em um copo"/>
            </section>
        )
    }
}

export default Substituicao
