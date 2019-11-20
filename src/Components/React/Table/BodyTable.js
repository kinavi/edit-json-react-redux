import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'

const BodyTable = ({Items})=>
    <div className='body-table'> 
        {Items.map(item=>
            <div className='item'>
                <Item item={item}/>
            </div>
            )}

    </div>


const mapStateToProps = state =>
({
    Items: [...state.Items]
})   

export default connect(
    mapStateToProps
)(BodyTable)

//export default BodyTable