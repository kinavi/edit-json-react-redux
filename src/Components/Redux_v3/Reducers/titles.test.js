import { titles } from './titles'
//import { updateTitles } from '../Actions/Titles/updateTitles'

function updateTitles(currentTitle, items){
    let titles = [...currentTitle]
    items.map(item=>
        item.cells.map(cell=>{
            if(!titles.includes(cell.key))
                titles.push(cell.key) 
            })
    )
    return titles
}

describe("mask Reducer", () => {

    it('function updateTitles()',()=>{
        const state = ['id1', 'id']
        const action = 
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
            ]
        const result = updateTitles(state, action)
        expect(result)
            .toEqual(['id1', 'id', 'name','email', 'top', 'tip', 'tuk'])
    })

})

