import React, { Component } from "react";
import './receitas_rapidas.scss';
import salgadas from '../../assets/salgadas.jpg';
import doces from '../../assets/doces.jpg';

class ReceitasRapidas extends Component {
    constructor(props) {
        super(props);
        this.state = { receitasDoces: false };
    }

    mostraReceitasDoces = () => {
        this.setState(state => ({
            receitasDoces: !state.receitasDoces
        }));
        // O substituto de leite esta invisivel quando mostra o de ovos.
        this.setState(() => ({
            receitasSalgadas: false
        }))
    }

    mostraReceitasSalgadas = () => {
        this.setState(state => ({
            receitasSalgadas: !state.receitasSalgadas
        }));
        // Quando abrir um fecha outro
        this.setState(() => ({
            receitasDoces: false
        })) 
    }

    render(){
        return(
            <section class=" container receitas_rapidas">
                <h2>Receitas rápidas</h2>

                <div class="doces_salgadas">
                    <img src={doces} alt=""/>
                    <div>
                        <p onClick={this.mostraReceitasDoces}>Doces</p>
                    </div>

                    <img src={salgadas} alt=""/>
                    <div>
                        <p onClick={this.mostraReceitasSalgadas}>Salgadas</p>
                    </div>
                </div>

                {/* Receitas doces */}
                <div className="lista_receitas">
                    <ul className={"receitas_doces " + (this.state.receitasDoces ? 'visivel' : 'escondido')}>
                        <li>Linhaça</li>
                        <li>Agar-agar</li>
                        <li>Chia</li>
                        <li>Polvilho</li>
                    </ul>
                </div>

                {/* Receitas salgadas */}
                <div className="lista_receitas">
                    <ul className={"receitas_salgadas " + (this.state.receitasSalgadas ? 'visivel' : 'escondido')}>
                        <li>CACHORRO</li>
                        <li>GATO</li>
                        <li>PORCO</li>
                        <li>VACA</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ReceitasRapidas
