import {
    ADD_CLIENT,
    GET_CLIENT,
    REMOVE_CLIENT,
    UPDATE_CLIENT,
    SET_ORDENACAO,
    SET_PESQUISA,
    SET_CLIENTE
} from '../actions/types';

export default (state = { ordenacao: "a-z" }, action) => {
    switch (action.type) {
        case GET_CLIENT:
            return {
                ...state,
                clientes: action.data
            };
        case ADD_CLIENT:
            console.log('passou aqui')
            return {
                ...state,
                clientes: state.clientes.concat([action.cliente])
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                cliente: null,
                clientes: state.clientes.map(
                    (_cliente) => (_cliente.id === action.cliente.id
                        ? action.cliente
                        : _cliente))
            };
        case REMOVE_CLIENT:
            return {
                ...state,
                clientes: state.clientes.filter(
                    (_cliente) => _cliente.id !== action.id
                )
            }
        case SET_ORDENACAO:
            return {
                ...state,
                ordenacao: action.ordenacao
            }

        case SET_PESQUISA:
            return {
                ...state,
                pesquisa: action.pesquisa
            }
        case SET_CLIENTE:
            return {
                ...state,
                cliente: action.cliente
            }
        default:
            return state;
    }
}