import React from 'react';
import CardList from './React/UsersList'
import InputField from './React/InputField'
import OutputField from './React/outputField'

const App = ({ store }) =>
    <div className="app">
        <InputField store={store}/>
        <CardList store={store}/>
        <OutputField store={store}/>
    </div>
    
export default App
