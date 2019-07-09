import React, { Component } from "react";
import './nav.scss'

class Nav extends Component {
    render(){
        return(
            <nav class="nav_bar">
                <a href="#">Home</a>
                <a href="#">Saber mais</a>
                <a href="#">Receitas</a>
                <a href="#">Livros</a>
            </nav>
        )
    }  
}
export default Nav


