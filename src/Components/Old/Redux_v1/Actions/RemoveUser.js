import TA from '../TypeActions'

const removeUser = (id)=>({
    type:TA.REMOVE_USER,
    id
})

export default removeUser