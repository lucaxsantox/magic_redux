import { combineReducers } from 'redux'

import cartas from './reducerCarShop'
import frases from './reducerFrases'

export default combineReducers({
    //  Nosso reducer é colocado dentro de um objeto
    cartas,frases
})