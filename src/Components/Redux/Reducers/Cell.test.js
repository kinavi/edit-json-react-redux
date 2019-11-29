import {Cell} from './Cell'
import { addCell } from '../Actions/Cell/addCell'
import {editCell} from '../Actions/Cell/editCell'
import {switchEditeMode} from '../Actions/Cell/switchEditeMode'

describe("Cell Reducer", () => {

    it('ADD_CELL success',()=>{
        const state = {}
        const action = addCell( 5, '150','id',false)
        const result = Cell(state, action)
        expect(result)
            .toEqual({
                value:'150',
                key:'id',
                isEdit:false
            })
    })

    it('EDIT_CELL isKey',()=>{
        const state = {
            value:'150',
            key:'id',
            isEdit:false
        }
        const action = editCell( 5, 'id', '44', false)
        const result = Cell(state, action)
        expect(result)
            .toEqual({
                value:'44',
                key:'id',
                isEdit:false
            })

    })

    it('EDIT_CELL missKey',()=>{
        const state = {
            value:'150',
            key:'id',
            isEdit:false
        }
        const action = editCell( 5, 'noKey', '44', false)
        const result = Cell(state, action)
        expect(result)
            .toEqual({
                value:'150',
                key:'id',
                isEdit:false
            })
    })

    it('SWITCH_CELL_EDIT isKey',()=>{
        const state = {
            value:'150',
            key:'id',
            isEdit:false
        }
        const action = switchEditeMode( 5, 'id', true)
        const result = Cell(state, action)
        expect(result)
            .toEqual({
                value:'150',
                key:'id',
                isEdit:true
            })

    })
    
    it('SWITCH_CELL_EDIT missKey',()=>{
        const state = {
            value:'150',
            key:'id',
            isEdit:false
        }
        const action = switchEditeMode( 5, 'noKey', true)
        const result = Cell(state, action)
        expect(result)
            .toEqual({
                value:'150',
                key:'id',
                isEdit:false
            })

    })
})