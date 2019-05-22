import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

class Pesquisa extends React.Component {
    render() {
        const { pesquisa: valor, setPesquisa: onChange } = this.props
        return (
            <div className="pesquisa">
                <input
                    value={valor || ""}
                    onChange={onChange}
                    placeholder={"Pesquisa aqui ..."} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    pesquisa: state.clientes.pesquisa
})

export default connect(mapStateToProps, actions)(Pesquisa)