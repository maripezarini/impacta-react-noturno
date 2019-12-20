import React, { Component } from 'react'
import { CursoForm } from './form'
import { CursoList } from './list'
import axios from 'axios'

const URL = 'http://localhost:3500/api/cursos'

export class CursoCadastro extends Component {

    initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }

    state = { ...this.initialState, cursos: [] }

    constructor(props) {
        super(props);
        this.listar();
    }

    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }


    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}
                        
                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}
                        
                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        
                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}
                        
                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)} />
                </div>
                <div className="col-md-6">
                    <CursoList cursos={this.state.cursos} />
                </div>
            </div>
        )
    }

    codigoChange(e) {
        this.setState({ codigo: e.target.value })
    }

    descricaoChange(e) {
        this.setState({ descricao: e.target.value })
    }

    cargaHorariaChange(e) {
        this.setState({ cargaHoraria: e.target.value })
    }

    precoChange(e) {
        this.setState({ preco: e.target.value })
    }

    categoriaChange(e) {
        this.setState({ categoria: e.target.value })
    }

    adicionar(){
          
    }
}

