import React from 'react';

const Item = ({item})=>
    Object.keys(item).map(prop=>
        <div className='elem'>
            {item[prop]}
        </div>
    )
    
export default Item