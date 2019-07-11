import React, { Component } from "react";
import './receitas_rapidas.scss';
import salgadas from '../../assets/salgadas.jpg';
import doces from '../../assets/doces.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'
import listaReceitasDoces from "../../listaReceitasApi/listaReceitasDoces"
import listaReceitasSalgadas from "../../listaReceitasApi/listaReceitasSalgadas"

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
            <ScrollableAnchor id={'receitas'}>
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
                             {
                            listaReceitasDoces.map(function (receita) {
                                return( 
                                <li>
                                   {receita.nome}
                                </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>

                {/* Receitas salgadas */}
                <div className="background_receitas">
                    <div className="lista_receitas">
                        <ul className={"receitas_rapidas " + (this.state.receitasSalgadas ? 'visivel' : 'escondido')}>
                        {
                            listaReceitasSalgadas.map(function (receita) {
                                return( 
                                <li>
                                   {receita.nome}
                                </li>
                                )
                            })
                            }
                        
                        </ul>
                    </div>
                </div>
            </section>
          </ScrollableAnchor>
        
        )
    }
}

export default ReceitasRapidas
