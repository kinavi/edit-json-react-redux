import { items } from './Items'
import { addCell } from '../Actions/Cell/addCell'
import { editCell } from '../Actions/Cell/editCell'
import { switchEditeMode } from '../Actions/Cell/switchEditeMode'
import { removeCell } from '../Actions/Cell/removeCell'
import { sortCellByMask } from '../Actions/Cell/sortCellByMask'
import { removeItem } from '../Actions/Items/removeItem'
import { addItem } from '../Actions/Items/addItem'

describe("Items Reducer", () => {

    it('ADD_CELL isId',()=>{
        const state = [
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
            },
            {
                id:10,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'w2ww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = addCell(5, '11:00','time', false)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                    },
                    {
                        id:10,
                        cells:[
                            {
                                value:200,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Peta',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:'w2ww@www.ww',
                                key:'email',
                                isEdit:false,
                            }
                        ]
                    }
                ]
            )
    })

    it('ADD_CELL missId',()=>{
        const state = [
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
            },
            {
                id:10,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'w2ww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = addCell(55, '11:00','time', false)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                    },
                    {
                        id:10,
                        cells:[
                            {
                                value:200,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Peta',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:'w2ww@www.ww',
                                key:'email',
                                isEdit:false,
                            }
                        ]
                    }
                ]
            )
    })

    it('EDIT_CELL isId',()=>{
        const state = [
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
            },
            {
                id:10,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'w2ww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = editCell(5, 'name','Peta', false)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                    },
                    {
                        id:10,
                        cells:[
                            {
                                value:200,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Peta',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:'w2ww@www.ww',
                                key:'email',
                                isEdit:false,
                            }
                        ]
                    }
                ]
            )
    })

    it('EDIT_CELL missId',()=>{
        const state = [
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
            },
            {
                id:10,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'Peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'w2ww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = editCell(55, 'name','Peta', false)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                    },
                    {
                        id:10,
                        cells:[
                            {
                                value:200,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Peta',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:'w2ww@www.ww',
                                key:'email',
                                isEdit:false,
                            }
                        ]
                    }
                ]
            )
    })

    it('REMOVE_CELL isId',()=>{
        const state = [
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
        ]
        const action = removeCell(5, 'email')
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                            }
                        ]
                    }
                ]
            )
    })

    it('REMOVE_CELL missId',()=>{
        const state = [
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
        ]
        const action = removeCell(55, 'email')
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                ]
            )
    })

    it('SWITCH_CELL_EDIT isId',()=>{
        const state = [
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
        ]
        const action = switchEditeMode( 5, 'name', true)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                            }
                        ]
                    }
                ]
            )
    })

    it('SWITCH_CELL_EDIT missId',()=>{
        const state = [
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
        ]
        const action = switchEditeMode( 55, 'name', true)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                ]
            )
    })

    // it('SORT_BY_MASK',()=>{
    //     const state = [
    //         {
    //             id:5,
    //             cells:[
    //                 {
    //                     value:150,
    //                     key:'id',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'Vova',
    //                     key:'name',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'www@www.ww',
    //                     key:'email',
    //                     isEdit:false,
    //                 }
    //             ]
    //         },
    //         {
    //             id:55,
    //             cells:[
    //                 {
    //                     value:200,
    //                     key:'id',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'peta',
    //                     key:'name',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'wwww@www.ww',
    //                     key:'email',
    //                     isEdit:false,
    //                 }
    //             ]
    //         }
    //     ]
    //     const action = sortCellByMask()
    //     const result = items(state, action)
    //     expect(result)
    //         .toEqual(
    //             [
    //                 {
    //                     id:5,
    //                     cells:[
    //                         {
    //                             value:'www@www.ww',
    //                             key:'email',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:150,
    //                             key:'id',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'',
    //                             key:'time',
    //                             isEdit:false
    //                         },
    //                         {
    //                             value:'Vova',
    //                             key:'name',
    //                             isEdit:false,
    //                         }
                            
    //                     ]
    //                 },
    //                 {
    //                     id:55,
    //                     cells:[
    //                         {
    //                             value:'wwww@www.ww',
    //                             key:'email',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:200,
    //                             key:'id',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'',
    //                             key:'time',
    //                             isEdit:false
    //                         },
    //                         {
    //                             value:'peta',
    //                             key:'name',
    //                             isEdit:false,
    //                         },
                            
    //                     ]
    //                 }
    //             ]
    //         )
    // })

    it('REMOVE_ITEM missId',()=>{
        const state = [
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
            },
            {
                id:55,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'wwww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = removeItem(555)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                    },
                    {
                        id:55,
                        cells:[
                            {
                                value:200,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'peta',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:'wwww@www.ww',
                                key:'email',
                                isEdit:false,
                            }
                        ]
                    }
                ]
            )
    })

    it('REMOVE_ITEM isId',()=>{
        const state = [
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
            },
            {
                id:55,
                cells:[
                    {
                        value:200,
                        key:'id',
                        isEdit:false,
                    },
                    {
                        value:'peta',
                        key:'name',
                        isEdit:false,
                    },
                    {
                        value:'wwww@www.ww',
                        key:'email',
                        isEdit:false,
                    }
                ]
            }
        ]
        const action = removeItem(55)
        const result = items(state, action)
        expect(result)
            .toEqual(
                [
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
                ]
            )
    })

    // it('ADD_ITEM',()=>{
    //     const state = [
    //         {
    //             id:5,
    //             cells:[
    //                 {
    //                     value:150,
    //                     key:'id',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'Vova',
    //                     key:'name',
    //                     isEdit:false,
    //                 },
    //                 {
    //                     value:'www@www.ww',
    //                     key:'email',
    //                     isEdit:false,
    //                 }
    //             ]
    //         }
            
    //     ]
    //     const action = addItem(5, )
    //     const result = items(state, action)
    //     expect(result)
    //         .toEqual(
    //             [
    //                 {
    //                     id:5,
    //                     cells:[
    //                         {
    //                             value:150,
    //                             key:'id',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'Vova',
    //                             key:'name',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'www@www.ww',
    //                             key:'email',
    //                             isEdit:false,
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id:55,
    //                     cells:[
    //                         {
    //                             value:200,
    //                             key:'id',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'peta',
    //                             key:'name',
    //                             isEdit:false,
    //                         },
    //                         {
    //                             value:'wwww@www.ww',
    //                             key:'email',
    //                             isEdit:false,
    //                         }
    //                     ]
    //                 }
    //             ]
    //         )
    // })
})