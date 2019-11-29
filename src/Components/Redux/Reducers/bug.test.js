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
import { updateLastId } from '../Actions/LastId/updateLastId'
import stateData from '../../../Data/userApi.json'
import { createStore} from 'redux'
import { clearPreLoader } from '../Actions/PreLoader/clearPreLoader'


const startFullState = {
    items:[
        {
            cells:[
                {
                    value:140,
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
            ],
            id:1
        },
        {
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
            ],
            id:2
        }
    ],
    titles:[],
    preLoader:[],
    lastId:2,
    InputLog:""
}

const startNullState = {
    items:[],
    titles:[],
    preLoader:[],
    lastId:2,
    InputLog:""
}

let store;

 

describe("----", () => {

    const data = [{
        id: 100, 
        name: "Inna", 

    },
    {
        id: 101, 
        name: "Inna2", 
    }
    ]
    beforeAll(() => {
        store = createStore(
            app,
            startFullState
        )
        if(Array.isArray(data))
        {
            data.map((it, i, ar)=>store.dispatch(addData(+store.getState().lastId+1+i,it)))
        }   
        else
        {
            store.dispatch(addData(id,data))
        }
    })
    it("AddData",()=> expect(store.getState()).toEqual(
       {
           ...store.getState(),
           preLoader:[
                {
                    cells:[
                        {
                            value:100,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Inna',
                            key:'name',
                            isEdit:false,
                        }
                    ],
                    id:3
                },
                {
                    cells:[
                        {
                            value:101,
                            key:'id',
                            isEdit:false,
                        },
                        {
                            value:'Inna2',
                            key:'name',
                            isEdit:false,
                        }
                    ],
                    id:4
                }
            ]
       }
    ))

    it("AddData",()=>{
        store.dispatch(addItem())
        store.dispatch(clearPreLoader())
        store.dispatch(updateTitles())
        store.dispatch(updateLastId())
        expect(store.getState()).toEqual(
            {
                ...store.getState(),
                items:[
                    {
                        cells:[
                            {
                                value:140,
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
                        ],
                        id:1
                    },
                    {
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
                        ],
                        id:2
                    },
                    {
                        cells:[
                            {
                                value:100,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Inna',
                                key:'name',
                                isEdit:false,
                            }
                        ],
                        id:3
                    },
                    {
                        cells:[
                            {
                                value:101,
                                key:'id',
                                isEdit:false,
                            },
                            {
                                value:'Inna2',
                                key:'name',
                                isEdit:false,
                            }
                        ],
                        id:4
                    }
                ],
                preLoader:[],
                titles:['id', 'name','email'],
                lastId:4
            }
        )
    })
    



    // it("Увеличился размер cells - 4",()=>
    //     expect(store.getState().items[0].cells.length).toBe(4))

    // it("Присвоение нового значения - test",()=>
    //     expect(store.getState().items[0].cells).toEqual(
    //         [
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
    //                 value:'test',
    //                 key:'top',
    //                 isEdit:true,
    //             }
    //         ]
    //     ))
    
})