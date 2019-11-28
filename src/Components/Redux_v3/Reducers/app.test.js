import { app } from './app'
import { addCell } from '../Actions/Cell/addCell'
import { editCell } from '../Actions/Cell/editCell'
import { switchEditeMode } from '../Actions/Cell/switchEditeMode'
import { removeCell } from '../Actions/Cell/removeCell'
import { sortCellByMask } from '../Actions/Cell/sortCellByMask'
import { removeItem } from '../Actions/Items/removeItem'
import { addItem } from '../Actions/Items/addItem'
import { items } from './Items'
import { updateTitles } from '../Actions/Titles/updateTitles'
import { addData } from '../Actions/PreLoader/addData'
import { inputLog } from '../Actions/PreLoader/inputLog'

const state = {
    items:[
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
    ],
    titles:[
        'email', 'id','time','name'
    ]
}
const action_ADD_ITEM = addItem(10, [{
        key:'tit',
        value:'What?',
        isEdit:false
    },
    {
        key:'tot',
        value:'Where?',
        isEdit:false
    }
])


describe("app Reducer", () => {

    it('ADD_ITEM', ()=>{
        const result = app(state, action_ADD_ITEM)
        expect(result)
            .toEqual(
                {
                    items:[
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
                                    key:'tit',
                                    value:'What?',
                                    isEdit:false
                                },
                                {
                                    key:'tot',
                                    value:'Where?',
                                    isEdit:false
                                }
                            ]
                        }
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('REMOVE_ITEM', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = removeItem(1)
        const result = app(state, action)
        expect(result)
            .toEqual(
                {
                    items:[
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
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('SWITCH_CELL_EDIT', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = switchEditeMode(1, 'name', true)
        const result = app(state, action)
        expect(result)
            .toEqual(
                {
                    items:[
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
                            id:1,
                            cells:[
                                {
                                    value:15,
                                    key:'id',
                                    isEdit:false,
                                },
                                {
                                    value:'Vasa',
                                    key:'name',
                                    isEdit:true,
                                },
                                {
                                    value:'w2ww@www.ww',
                                    key:'email',
                                    isEdit:false,
                                }
                            ]
                        }
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('REMOVE_CELL', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = removeCell(1, 'name')
        const result = app(state, action)
        expect(result)
            .toEqual(
                {
                    items:[
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
                            id:1,
                            cells:[
                                {
                                    value:15,
                                    key:'id',
                                    isEdit:false,
                                },
                                {
                                    value:'w2ww@www.ww',
                                    key:'email',
                                    isEdit:false,
                                }
                            ]
                        }
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('EDIT_CELL', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = editCell(1, 'name', 'Tolia', false)
        const result = app(state, action)
        expect(result)
            .toEqual(
                {
                    items:[
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
                            id:1,
                            cells:[
                                {
                                    value:15,
                                    key:'id',
                                    isEdit:false,
                                },
                                {
                                    value:'Tolia',
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
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('ADD_CELL', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = addCell(1, 'man', 'type', false)
        const result = app(state, action)
        expect(result)
            .toEqual(
                {
                    items:[
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
                            id:1,
                            cells:[
                                {
                                    value:15,
                                    key:'id',
                                    isEdit:false,
                                },
                                {
                                    value:'Vasa',
                                    key:'name',
                                    isEdit:false,
                                },
                                {
                                    value:'w2ww@www.ww',
                                    key:'email',
                                    isEdit:false,
                                },
                                {
                                    value:'man',
                                    key:'type',
                                    isEdit:false,
                                }
                            ]
                        }
                    ],
                    titles:[
                        'email', 'id','time','name'
                    ]
                }
            )
    })

    it('SORT_BY_MASK', ()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
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
            ],
            titles:[
                'email', 'id','time','name'
            ]
        }
        const action = sortCellByMask()
        const result = app(state, action)
        expect(result)
            .toEqual({
                items:[
                    {
                        id:5,
                        cells:[
                            {
                                value:'www@www.ww',
                                key:'email',
                                isEdit:false,
                            },
                            {
                                value:150,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'',
                                key:'time',
                                isEdit:false
                            },
                            {
                                value:'Vova',
                                key:'name',
                                isEdit:false,
                            }
                            
                        ]
                    },
                    {
                        id:1,
                        cells:[
                            {
                                value:'w2ww@www.ww',
                                key:'email',
                                isEdit:false,
                            },
                            {
                                value:15,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'',
                                key:'time',
                                isEdit:false
                            },
                            {
                                value:'Vasa',
                                key:'name',
                                isEdit:false,
                            },
                            
                        ]
                    }
                ],
                titles:[
                    'email', 'id','time','name'
                ]
            }  
        )
    })

    it('UPDATE_TITLES',()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
                            key:'name',
                            isEdit:false,
                        },
                        {
                            value:'w2ww@www.ww',
                            key:'email',
                            isEdit:false,
                        }
                    ]
                },
                {
                    id:55,
                    cells:[
                        {
                            value:150,
                            key:'top',
                            isEdit:false,
                        },
                        {
                            value:'Vova',
                            key:'tip',
                            isEdit:false,
                        },
                        {
                            value:'www@www.ww',
                            key:'tuk',
                            isEdit:false,
                        }
                    ]
                }
            ],
            titles:[
                'id1', 'id'
            ]
        }
        const action = updateTitles()
            
                // [
                //     {
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
                //             }
                //         ]
                //     },
                //     {
                //         id:55,
                //         cells:[
                //             {
                //                 value:150,
                //                 key:'top',
                //                 isEdit:false,
                //             },
                //             {
                //                 value:'Vova',
                //                 key:'tip',
                //                 isEdit:false,
                //             },
                //             {
                //                 value:'www@www.ww',
                //                 key:'tuk',
                //                 isEdit:false,
                //             }
                //         ]
                //     }
                // ]
            
        
        const result = app(state, action)
        expect(result.titles)
            .toEqual(['id1', 'id', 'name','email', 'top', 'tip', 'tuk'])
    })


    it('ADD_DATA',()=>{
        const state = {
            items:[
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
                    id:1,
                    cells:[
                        {
                            value:15,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Vasa',
                            key:'name',
                            isEdit:false,
                        },
                        {
                            value:'w2ww@www.ww',
                            key:'email',
                            isEdit:false,
                        }
                    ]
                },
                {
                    id:55,
                    cells:[
                        {
                            value:150,
                            key:'top',
                            isEdit:false,
                        },
                        {
                            value:'Vova',
                            key:'tip',
                            isEdit:false,
                        },
                        {
                            value:'www@www.ww',
                            key:'tuk',
                            isEdit:false,
                        }
                    ]
                }
            ],
            titles:[
                'id1', 'id'
            ],
            preLoader:[],
            lastId:2,
            InputLog:undefined
        }
        const action = addData(2,{name:"Vova", age:27})
        const result = app(state, action)
        expect(result)
            .toEqual({
                ...state,
                preLoader:[{
                    id:2,
                        cells:[
                            {
                                value:'Vova',
                                key:'name',
                                isEdit:false,
                            },
                            {
                                value:27,
                                key:'age',
                                isEdit:false,
                            }
                        ]
                }
            ]
            })
    })
})