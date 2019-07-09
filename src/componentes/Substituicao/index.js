import React, { Component } from "react";
import './substituicao.scss';
import ovo from '../../assets/ovo.jpg'
import leite from '../../assets/leite.jpg'

class Substituicao extends Component {
    constructor(props) {
        super(props);
        this.state = { substitutosOvoVisivel: false, substitutosLeiteVisivel: false };
    }

    mostraListaOvos = () => {
        this.setState(state => ({
            substitutosOvoVisivel: !state.substitutosOvoVisivel
        }));
        // O substituto de leite esta invisivel quando mostra o de ovos.
        this.setState(() => ({
            substitutosLeiteVisivel: false
        }))
    }

    mostraListaLeite = () => {
        this.setState(state => ({
            substitutosLeiteVisivel: !state.substitutosLeiteVisivel
        }));
        // Quando abrir um fecha outro
        this.setState(() => ({
            substitutosOvoVisivel: false
        })) 
    }

    render(){
        return(
            <section className="container substitutos">
                <h1 className="box">Substituições</h1>
                <div className="thumbnail-wrapper">
                    <button onClick={this.mostraListaOvos}>+</button>
                    <img src={ovo} alt="foto de um ovo quebrado"/>
                </div>

                <div className="thumbnail-wrapper">
                    <button onClick={this.mostraListaLeite}>+</button>
                    <img src={leite} alt="foto de alguem colocando leite em um copo"/>
                </div>
                {/* Substituto Ovo */}
                <div>
                    <ul className={"substitutos_leite_ovo " + (this.state.substitutosOvoVisivel ? 'visivel' : 'escondido')}>
                        <li>Linhaça</li>
                        <li>Agar-agar</li>
                        <li>Chia</li>
                        <li>Polvilho</li>
                    </ul>
                </div>

                {/* Substituto leite */}
                <div>
                    <ul className={"substitutos_leite_ovo " + (this.state.substitutosLeiteVisivel ? 'visivel' : 'escondido')}>
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

export default Substituicao
