import React from 'react';
import Cell from './Cell'

const Item = ({id, cells})=>{
    return(
        cells.map((cell,i)=>
            <Cell key={i} keyObj={cell.key} {...cell} id={id}/>
        )
    )
}

export default Item