import {TypeActions} from '../TypeActions'

export const titles = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.UPDATE_TITLES:
            return updateTitles(state.titles, state.items)
        default:
            return state
    }
}

function updateTitles(currentTitles, items){
    let titles = []
    items.map(item=>
        item.cells.map(cell=>{
            if(!titles.includes(cell.key))
                titles.push(cell.key) 
            })
    )
    return titles
}