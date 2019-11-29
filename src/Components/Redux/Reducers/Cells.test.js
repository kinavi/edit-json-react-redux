import { Cells } from './Cells'
import { addCell } from '../Actions/Cell/addCell'
import { editCell } from '../Actions/Cell/editCell'
import { switchEditeMode } from '../Actions/Cell/switchEditeMode'
import { removeCell } from '../Actions/Cell/removeCell'

describe("Cells Reducer", () => {

    it('ADD_CELL success',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            }
        ]
        const action = addCell( 5, '11:00','time',false)
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    },
                    {
                        value:'11:00',
                        key:'time',
                        isEdit:false,
                    }
                ]
            )
    })

    it('EDIT_CELL isKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            }
        ]
        const action = editCell( 5, 'name','Peta', false)
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            )
    })

    it('EDIT_CELL missKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            }
        ]
        const action = editCell( 5, 'noKey','Peta', false)
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            )
    })

    it('SWITCH_CELL_EDIT isKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            }
        ]
        const action = switchEditeMode( 5, 'id', true)
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:true,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            )
    })

    it('SWITCH_CELL_EDIT missKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            }
        ]
        const action = switchEditeMode( 5, 'noKey', true)
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            )
    })

    it('REMOVE_CELL isKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            },
            {
                value:'11:00',
                key:'time',
                isEdit:false,
            }
        ]
        const action = removeCell( 5, 'time')
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            )
    })

    it('REMOVE_CELL missKey',()=>{
        const state = [
            {
                value:150,
                key:'id',
                isEdit:false,
            },
            {
                value:'Vova',
                key:'name',
                isEdit:false,
            },
            {
                value:'www@www.ww',
                key:'email',
                isEdit:false,
            },
            {
                value:'11:00',
                key:'time',
                isEdit:false,
            }
        ]
        const action = removeCell( 5, 'noKey')
        const result = Cells(state, action)
        expect(result)
            .toEqual(
                [
                    {
                        value:150,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Vova',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'www@www.ww',
                        key:'email',
                        isEdit:false,
                    },
                    {
                        value:'11:00',
                        key:'time',
                        isEdit:false,
                    }
                ]
            )
    })
})