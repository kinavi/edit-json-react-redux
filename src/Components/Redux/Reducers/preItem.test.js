import { preItem } from './preItem'
import { addData } from '../Actions/PreLoader/addData'

describe("preItem Reducer", () => {

    it('ADD_DATA isId',()=>{
        const state = {}
        const action = addData(5, {name:'Vova', age:27})
        const result = preItem(state,action)
        expect(result)
            .toEqual({
                id:5,
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
            })
    })
    


})