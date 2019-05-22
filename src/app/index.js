import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Aplicacao from './components/aplicacao'
import store from './store'
class App extends Component{
    render(){
        return(
        <Provider store={store}>
        <div className="App">
            <Aplicacao/>
        </div>
        </Provider>    
        );
    }
}

export default App;
