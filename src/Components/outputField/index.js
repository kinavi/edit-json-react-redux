import React from 'react'

const outputField = ({value, isHide})=>
    <div className='output-block' hidden={isHide}>
        <div>Json: </div>
        <div>
            {getJsonResponse(value)}
        </div>
        
    </div>


function getJsonResponse(value) {
    return JSON.stringify(value)
}

export default outputField