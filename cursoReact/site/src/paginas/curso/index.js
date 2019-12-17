import React from 'react'
import { Cabecalho } from '../../Componentes/cabecalho'
import { CursoCadastro } from './cadastro';

export class CursoIndex extends React.Component {
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Veja nossos cursos" />
                <CursoCadastro />
            </div>
        )
    }
}
