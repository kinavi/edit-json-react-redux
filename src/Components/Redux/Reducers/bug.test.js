import { app } from './app'
import { addItem } from '../Actions/Items/addItem'
import { updateTitles } from '../Actions/Titles/updateTitles'
import { addData } from '../Actions/PreLoader/addData'
import { updateLastId } from '../Actions/LastId/updateLastId'
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
})