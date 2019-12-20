import React from 'react'
import { Cabecalho } from '../../Componentes/cabecalho'
import ContatoForm from './form';
import { connect } from 'react-redux'


class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={`Quer entrar em contato conosco - ${this.props.nome}`}/>
                <ContatoForm/>
            </div>
        )
    }
}

const mapStoreToProps = store => ({
    nome : store.contato.nome
})//criamos uma função que dado uma store rece um jason que é transformado em uma props

const Conectado = connect(mapStoreToProps, null)(ContatoIndex)
export {Conectado as ContatoIndex}