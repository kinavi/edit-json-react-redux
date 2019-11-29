import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'
import { removeItem } from '../../Redux/Actions/Items/removeItem'
import { updateTitles } from '../../Redux/Actions/Titles/updateTitles'
import { updateLastId } from '../../Redux/Actions/LastId/updateLastId'

const BodyTable = ({Items,onRemoveItem})=>{
    return(
        Items.map((item,i)=>
            <tr key={i} className='item'>
                <Item {...item}/>
                <th>
                    <button onClick={()=>onRemoveItem(item.id)}>Remove</button>
                </th>
            </tr>
            )
    )
}

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