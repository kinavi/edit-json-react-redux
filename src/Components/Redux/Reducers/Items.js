import {TypeActions} from '../TypeActions'
import {Item} from './Item'

export const items = (state = [], action)=>{
    switch(action.type){
        case TypeActions.ADD_ITEM:
            return [...state, Item({},action)]


        case TypeActions.REMOVE_ITEM:
                return state.filter(
                    item => (item.id!==action.id)?
                            true:
                            false
                    )

        case TypeActions.ADD_CELL:
            return state.map(
                item => Item(item, action))
        case TypeActions.EDIT_CELL: 
            return state.map(
                item => Item(item, action))
        case TypeActions.REMOVE_CELL:
            return state.map(
                item => Item(item, action))
        case TypeActions.SWITCH_CELL_EDIT:
            return state.map(
                item => Item(item, action))

        case TypeActions.SORT_BY_MASK:
            return state.items.map(item =>({
                ...item,
                cells:sortCellsByMask(item.cells, state.titles)
            }))

        default:
            return state
    }
}

function sortCellsByMask(cells,mask){
    let _Object = []
    for(let key in mask)
    {
        _Object.push(getCell(mask[key],cells))
    }
    return _Object
}

function getCell(key,cells){
    for(let cell in cells)
    {
        if(cells[cell].key===key)
            return cells[cell]
    }
    return {
        value:'',
        key:key,
        isEdit:false
    }
}
