import React, { Component } from "react";
import './receitas_rapidas.scss';
import salgadas from '../../assets/menores/salgada-menor.jpg'
import doces from '../../assets/doces.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import listaReceitasDoces from "../../listaReceitasApi/listaReceitasDoces";
import listaReceitasSalgadas from "../../listaReceitasApi/listaReceitasSalgadas";

class ReceitasRapidas extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            receitasDoces: false, 
            receitasSalgadas: false,
            receitaVisivel: false,
            dadosReceita: {Ingredientes:[]},
        };
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

    fecharReceita = () => {
        this.setState(state => ({
            receitaVisivel: false,
        }))
    }

        // Essa função mostra a receita clicada, tornando falso em verdadeiro
    mostraReceitaCompleta = (receita) => {
        console.log(receita)
        this.setState(state => ({
            receitaVisivel: true,
            dadosReceita: receita,
        }));
    }

    render(){
        return(
            <ScrollableAnchor id={'receitas'}>
              <section className="container receitas_rapidas">
                
                <h2 className="box" >Receitas rápidas</h2>
            
                <div className="doces_salgadas">
                    <div className="background_receitas">
                        <div className="p_receitas">
                            <p onClick={this.mostraReceitasDoces}>Doces</p>
                        </div>
                        <img src={doces} alt=""/>
                        
                        
                    
                        <div>
                            <p onClick={this.mostraReceitasSalgadas}>Salgadas</p>
                        </div>
                        <img src={salgadas} alt=""/>
                    </div>
                
                </div>
                
                {/* Receitas doces */}
                <div className="lista_receitas">
                    <ul className={"receitas_rapidas " + (this.state.receitasDoces ? 'visivel' : 'escondido')}>        
                    {
                        listaReceitasDoces.map((receita) => {
                            return( 
                            <li onClick={() => this.mostraReceitaCompleta(receita)}>
                            {receita.nome}
                            </li>
                            )
                        })
                    }
                    </ul>
                </div>

                <div className={(this.state.receitaVisivel ? 'visivel' : 'escondido')}>        
                    <h3>{this.state.dadosReceita.nome}</h3>
                    <div className="embed-container"> 
                    <iframe id="ytplayer" type="text/html"
                    src={"https://www.youtube.com/embed/" + this.state.dadosReceita.url} frameborder="0"/>
                    </div>
                    <p>{this.state.dadosReceita.detalhes}</p>
        
                  <ul>       
                        {
                             this.state.dadosReceita.Ingredientes.map((ingrediente) => {
                                 return( 
                                 <li>
                                    {ingrediente}
                                 </li>
                                 )
                             })
                         }
                     </ul>
                     <button onClick={this.fecharReceita}>fechar</button>
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
