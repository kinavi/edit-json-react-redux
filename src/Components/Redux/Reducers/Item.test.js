import { Item } from './Item'
import { addCell } from '../Actions/Cell/addCell'
import { editCell } from '../Actions/Cell/editCell'
import { switchEditeMode } from '../Actions/Cell/switchEditeMode'
import { removeCell } from '../Actions/Cell/removeCell'
import { sortCellByMask } from '../Actions/Cell/sortCellByMask'

describe("Item Reducer", () => {

    it('ADD_CELL isId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = addCell(5, '11:00','time', false)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('ADD_CELL missId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = addCell(7, '11:00','time', false)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('EDIT_CELL isId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = editCell(5, 'name','Peta', false)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('EDIT_CELL missId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = editCell(7, 'name','Peta', false)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('REMOVE_CELL isId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = removeCell(5, 'time')
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('REMOVE_CELL missId',()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = removeCell(7, 'time')
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    it('SWITCH_EDIT_MODE isId', ()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = switchEditeMode( 5, 'name', true)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
                        {
                            value:150,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vova',
                            key:'name',
                            isEdit:true,
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
                }
            )
    })

    it('SWITCH_EDIT_MODE missId', ()=>{
        const state = {
            id:5,
            cells:[
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
        }
        const action = switchEditeMode( 7, 'name', true)
        const result = Item(state, action)
        expect(result)
            .toEqual(
                {
                    id:5,
                    cells:[
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
                }
            )
    })

    // it('SORT_BY_MASK', ()=>{
    //     const state = {
    //         id:5,
    //         cells:[
    //             {
    //                 value:150,
    //                 key:'id',
    //                 isEdit:false,
    //             },
    //             {
    //                 value:'Vova',
    //                 key:'name',
    //                 isEdit:false,
    //             },
    //             {
    //                 value:'www@www.ww',
    //                 key:'email',
    //                 isEdit:false,
    //             },
    //             {
    //                 value:'11:00',
    //                 key:'time',
    //                 isEdit:false,
    //             }
    //         ]
    //     }
    //     const action = sortCellByMask(['email','id','time','name'])
    //     const result = Item(state, action)
    //     expect(result)
    //         .toEqual(
    //             {
    //                 id:5,
    //                 cells:[
    //                     {
    //                         value:'www@www.ww',
    //                         key:'email',
    //                         isEdit:false,
    //                     },
    //                     {
    //                         value:150,
    //                         key:'id',
    //                         isEdit:false,
    //                     },
    //                     {
    //                         value:'11:00',
    //                         key:'time',
    //                         isEdit:false,
    //                     },
    //                     {
    //                         value:'Vova',
    //                         key:'name',
    //                         isEdit:false,
    //                     }
    //                 ] 
    //             }
    //         )
    // })
})

