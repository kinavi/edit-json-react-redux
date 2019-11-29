import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'
import { removeItem } from '../../Redux_v3/Actions/Items/removeItem'
import { updateTitles } from '../../Redux_v3/Actions/Titles/updateTitles'
import { updateLastId } from '../../Redux_v3/Actions/LastId/updateLastId'

const BodyTable = ({Items,onRemoveItem})=>
    <div className='body-table'>
        {Items.map((item,i)=>
            <div key={i} className='item'>
                <Item cells={item.cells} id={item.id}/>
            <button onClick={()=>onRemoveItem(item.id)}>{item.id}</button>
            </div>
            )}
        {/* <button>Add</button> */}
    </div>


const mapStateToProps = state =>
({
    Items: state.items
})   

const mapDispatchToProps = dispatch =>({
    onRemoveItem(id){
        dispatch(removeItem(id))
        dispatch(updateTitles())
        dispatch(updateLastId())
    }
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyTable)

//export default BodyTable 