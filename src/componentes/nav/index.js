import React, { Component } from "react";

import './nav.scss'

class Nav extends Component {
    render(){
        return(
            <nav class="nav_bar">
                <a href="#">Home</a>
                <a href="#substituicoes">Substituições</a>
                <a href="#receitas">Receitas</a>
                <a href="#dicas">Dicas</a>
            </nav>
        )
    }  
}
export default Nav


