import { addCell } from './addCell'
import { createStore} from 'redux'
import { app } from '../../Reducers/app'

describe("addCell", () => {
    let store;

    let initialState = {
        items:[
            {
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
                ],
                id:5
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
                id:1
            }
        ],
        titles:[
            'email', 'id','time','name'
        ]
    }

    beforeAll(() => {
        store = createStore(
            app,
            initialState
        )
        store.dispatch(addCell(5,'test', 'top',true))
    })

    it("Увеличился размер cells - 4",()=>
        expect(store.getState().items[0].cells.length).toBe(4))

    it("Присвоение нового значения - test",()=>
        expect(store.getState().items[0].cells).toEqual(
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
                    value:'test',
                    key:'top',
                    isEdit:true,
                }
            ]
        ))
    
})