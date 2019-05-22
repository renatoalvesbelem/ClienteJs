import React from 'react'
import Ordenacao from './ordenacao'
import Pesquisa from './pesquisa'
import Formulario from '../formulario'
import ListaClientes from './lista'
const Opcoes = () => (
    <div className="opcoes">
        <div>
            <Ordenacao />
        </div>
        <div>
            <Pesquisa />
        </div>
    </div>
)

export default class Listagem extends React.Component {
    render() {
        return (
            <div className="listagem">
                <div className="header">
                    <h2>Lista de clientes</h2>
                </div>
                <hr />
                <Formulario />
                <br />
                <Opcoes />
                <br />
                <ListaClientes />
            </div>
        )
    }
}