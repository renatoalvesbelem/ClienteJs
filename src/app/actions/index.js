import {
    ADD_CLIENT,
    GET_CLIENT,
    REMOVE_CLIENT,
    UPDATE_CLIENT,
    SET_ORDENACAO,
    SET_PESQUISA,
    SET_CLIENTE
} from './types';
import { ENODEV } from 'constants';

const generateId = () => Math.floor(Math.random() * 100000 + 100000)
const prepararCliente = (cliente) => {
    const id = generateId();
    const atualizadoEm = () => new Date().getTime()
    const getDate = () => new Date().getTime()
    const criadoEm = getDate()
    return { ...cliente, id, criadoEm, atualizadoEm }
}
const data = [
    {
        id: 1,
        nome: "João",
        telefone: "96454",
        email: 'joao@gmail.com',
        cpf: "93698771268",
        criadoEm: new Date().getTime(),
        atualizadoEm: new Date().getTime()
    }
];

export const getClientes = () => (
    { type: GET_CLIENT, data }
)
export const addCliente = (cliente) => (
    { type: ADD_CLIENT, cliente: prepararCliente(cliente) }
)

export const updateCliente = (id, cliente) => (
    { type: UPDATE_CLIENT, cliente: { id, ...cliente } }
)

export const removeCliente = (id) => (
    { type: REMOVE_CLIENT, id }
)


//Actions de apoio

export const setOperacao = (ev) => ({ type: SET_ORDENACAO, ordenacao: ev.target.value })
export const setPesquisa = (ev) => ({ type: SET_PESQUISA, pesquisa: ev.target.value })
export const setClienteParaAlterar = (cliente) => ({ type: SET_CLIENTE, cliente})