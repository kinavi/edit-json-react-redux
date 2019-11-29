import {TypeActions} from '../TypeActions'
//import {ItemsTypeActions} from '../ItemTypeActions'
//import {Cell} from './Cell'
import {Cells} from './Cells'

export const Item = (state = {}, action)=>{
    switch(action.type)
    {
        case TypeActions.ADD_ITEM:
            return {
                id:action.id,
                cells:action.cells
            }


        case TypeActions.ADD_CELL:
            return (state.id!==action.id)?
            state:
            {
                id:state.id,
                cells:Cells(state.cells,action)
            }
        case TypeActions.EDIT_CELL:
            return (state.id!==action.id)?
                state:{
                    id:action.id,
                    cells:Cells(state.cells, action)
                 }
        case TypeActions.REMOVE_CELL:
            return (state.id!==action.id)?
                state:
                {
                    id:action.id,
                    cells:Cells(state.cells, action)
                }
        case TypeActions.SWITCH_CELL_EDIT:
            return (state.id!==action.id)?
                state:
                {
                    id:action.id,
                    cells:Cells(state.cells, action)
                }
        // case TypeActions.SORT_BY_MASK:
        //         return {
        //             ...state,
        //             cells:sortCellsByMask(state.cells, action.mask)
        //         }  
        default:
            return state
    }
}

// function sortCellsByMask(cells,mask){
//     let _Object = []
//     for(let key in mask)
//     {
//         _Object.push(getCell(mask[key],cells))
//     }
//     return _Object
// }

// function getCell(key,cells){
//     for(let cell in cells)
//     {
//         if(cells[cell].key==key)
//             return cells[cell]
//     }
//     return {
//         value:'',
//         key:key,
//         isEdit:false
//     }
// }

// function sortTitlesByMask(objs,mask){
//     let _Object = []
//     for(let key in mask)
//     {
//         _Object.push(getObj(mask[key],objs))
//     }
//     return _Object
// }

// function getObj(key,objs){
//     for(let ob in objs)
//     {
//         if(objs[ob].key==key)
//             return objs[ob]
//     }
//     return {
//         value:'',
//         key:key
//     }
// }
// [
//     {
//         value:12314,
//         key:'id',
//         puse:'tutu'
//     },
//     {
//         value:"vasa",
//         key:'name'
//     },
//     {
//         value:"www@www.ww",
//         key:'email'
//     }
// ]

