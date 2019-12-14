import React from 'react'
import { Cabecalho } from '../../Componentes/cabecalho'

export class ContatoIndex extends React.Component {
    render() {
        return(
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="Fale conosco" />
            </div>
        )
    }
}