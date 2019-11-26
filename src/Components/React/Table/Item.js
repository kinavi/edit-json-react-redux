import React from 'react';

// const Item = ({item})=>
//     Object.keys(item).map(prop=>
//         <div className='elem'>
//             {item[prop]}
//         </div>
//     )

const Item = ({cells})=>
    cells.map(cell=>
        (cell.isEdit)?
        <div>
            <input type='input'/>
        </div>
        :
        <div key={cell.key} className='elem'>
            {cell.value}
        </div>
    )

export default Item