import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'

const BodyTable = ({Items})=>
    <div className='body-table'>
        {Items.map(item=>
            <div className='item'>
                <Item cells={item.cells} id={item.id}/>
            </div>
            )}
        <button>Add</button>
    </div>


const mapStateToProps = state =>
({
    Items: state.items
})   

export default connect(
    mapStateToProps
)(BodyTable)

//export default BodyTable 