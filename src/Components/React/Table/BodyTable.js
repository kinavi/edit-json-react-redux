import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'

const BodyTable = ({Items})=>
    <div className='body-table'>
        {Items.map(item=>
            <div className='item'>
                <Item key={item.id} cells={item.cells}/>
            </div>
            )}

    </div>


const mapStateToProps = state =>
({
    Items: [...state.items]
})   

export default connect(
    mapStateToProps
)(BodyTable)

//export default BodyTable