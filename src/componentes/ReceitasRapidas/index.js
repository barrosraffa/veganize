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
            <section className="container receitas_rapidas">
                <h2 className="box" >Receitas rápidas</h2>

                <div className="doces_salgadas">
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
                <div className="background_receitas">
                    <div className="lista_receitas">
                        <ul className={"receitas_rapidas " + (this.state.receitasDoces ? 'visivel' : 'escondido')}>
                            <li>Linhaça</li>
                            <li>Agar-agar</li>
                            <li>Chia</li>
                            <li>Polvilho</li>
                        </ul>
                    </div>
                </div>

                {/* Receitas salgadas */}
                <div className="background_receitas">
                    <div className="lista_receitas">
                        <ul className={"receitas_rapidas " + (this.state.receitasSalgadas ? 'visivel' : 'escondido')}>
                            <li>CACHORRO</li>
                            <li>GATO</li>
                            <li>PORCO</li>
                            <li>VACA</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default ReceitasRapidas
