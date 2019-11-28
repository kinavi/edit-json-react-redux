import React from 'react'
import Item from '../Table/Item'
import { connect } from 'react-redux'
import { addItem } from '../../Redux_v3/Actions/Items/addItem'
import { sortCellByMask } from '../../Redux_v3/Actions/Cell/sortCellByMask'
import { updateLastId } from '../../Redux_v3/Actions/LastId/updateLastId'
import { clearPreLoader } from '../../Redux_v3/Actions/PreLoader/clearPreLoader'

const preItem = (props)=>{
    const {Items} = props
    return (
        (!Items.length)?
        <div>Данных нет</div>
        :<div className='items'>
            {Items.map(item=>
            <div className='cells'>
                {item.cells.map(cell=>
                    <div className='cell'>
                        <div>{`key: ${cell.key}`}</div>
                        <div>{`value: ${cell.value}`}</div>
                    </div>
                )}
            </div>
            )}
            
        </div>
    )
}

const mapStateToProps = state =>
({
    Items: state.preLoader
}) 

export default connect(
    mapStateToProps,
    null
)(preItem)