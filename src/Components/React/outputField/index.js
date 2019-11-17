import React from 'react'

const outputField = ({ store })=>
    <div className='output-block' >
        <div>Json: </div>
        <div>
            {getJsonResponse(store.getState().Users)}
        </div>
        
    </div>


function getJsonResponse(value) {
    return JSON.stringify(value)
}

export default outputField