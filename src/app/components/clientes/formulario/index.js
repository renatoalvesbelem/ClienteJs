import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

const Input = (props) => (
    <div>
        {props.label && <label>{props.label}</label>}
        <input
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type || "text"} />
        {props.erro && <small>{props.erro}</small>}
    </div>
)
const DEFAULT_STATE = {
    form: {
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
    },
    erros: {},
    mostrarForm: false
}

class Formulario extends React.Component {
    state = DEFAULT_STATE

    componentWillUpdate(nextProps) {
        console.log(this.props.cliente, nextProps.cliente)
        if (!this.props.cliente && nextProps.cliente) {
            this.setState({
                form: nextProps.cliente,
                erro: {},
                mostrarForm: true
            })
        }
        if (this.props.cliente && !nextProps.cliente) {
            this.setState(DEFAULT_STATE)
        }
    }
    state = {
        form: {
            nome: "",
            email: "",
            telefone: "",
            cpf: ""
        },
        erros: {

        },
        mostrarForm: false
    }

    validar = () => {
        const { form } = this.state
        const erros = {};
        ["nome", "telefone", "cpf", "email"].forEach((item) => {
            if (!form[item]) {
                erros[item] = "Digite o " + item
            }
            this.setState({ erros });
            return Object.keys(erros).length === 0;
        });
    }
    onChange = (field, ev) => {
        const { form } = this.state
        form[field] = ev.target.value
        this.setState({ form }, () => {
            this.validar();
        })
    }
    mostrarForm = () => {
        this.setState({ mostrarForm: !this.state.mostrarForm })
    }

    handledSubmit = () => {
        console.log("submit")
        if (!!this.validar()) {
            return null
        }

        const { form } = this.state;
        const { cliente } = this.props;

        if (cliente) {
            this.props.updateCliente(cliente.id, form)
        }
        else {
            this.props.addCliente(form)
        }
        this.mostrarForm()
    }
    renderFormulario() {
        const { form, erros } = this.state
        return (
            <div className="formulario">
                <div>
                    <Input
                        value={form.nome}
                        onChange={(env) => this.onChange('nome', env)}
                        label="Nome" erro={erros.nome} />
                    <Input
                        value={form.telefone}
                        onChange={(env) => this.onChange('telefone', env)}
                        label="Telefone" erro={erros.telefone} />
                    <Input
                        value={form.cpf}
                        onChange={(env) => this.onChange('cpf', env)}
                        label="CPF" erro={erros.cpf} />
                    <Input
                        value={form.email}
                        onChange={(env) => this.onChange('email', env)}
                        label="Email"
                        type="email" erro={erros.email} />
                    <div>
                        <button onClick={this.handledSubmit}>
                            Salvar
                        </button>
                    </div>
                </div>

            </div>
        )
    }
    renderBotao() {
        return (
            <div>
                <button
                    onClick={this.mostrarForm}
                >Adicionar Cliente</button>
            </div>
        )
    }
    render() {
        return this.state.mostrarForm ? this.renderFormulario() : this.renderBotao()
    }
}

const mapStateToProps = state => ({
    cliente: state.clientes.cliente
})
export default connect(mapStateToProps, actions)(Formulario)