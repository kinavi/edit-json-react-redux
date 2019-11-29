import { preLoader } from './preLoader'
import { addData } from '../Actions/PreLoader/addData'

describe("PreLoader Reducer", () => {

    it('ADD_DATA',()=>{
        const state = []
        const action = addData(5, {name:'Vova', age:27})
        const result = preLoader(state,action)
        expect(result)
            .toEqual([
                {
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
                }
            ])
    })
})