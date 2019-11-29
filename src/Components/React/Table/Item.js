import React from 'react';
import { connect } from 'react-redux'
import { switchEditeMode } from '../../Redux_v3/Actions/Cell/switchEditeMode'

const Item = ({id, cells, key, switchEditeMode})=>{
    //console.log(cells)
    return(
        cells.map((cell,i)=>
            (cell.isEdit)?
            <div key={i} onDo={()=>switchEditeMode(key, cell.key, false)}>
                <input type='input'/>
            </div>
            :
            <div key={i} className='elem' onDoubleClick={()=>switchEditeMode(id, cell.key, true)}>
                {cell.value}
            </div>
        )
    )
}
    

const mapStateToProps = state =>
({
    //cells: state.items.cells
})   

const mapDispatchToProps = dispatch =>
({
    switchEditeMode(id, key, isEdit){
        dispatch(switchEditeMode(id, key, isEdit))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)