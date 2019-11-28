import TA from '../TypeActions'

const editUser=(id, name, email, config, timer, flags, dateactivate, dateupdate)=>({
    type:TA.EDIT_USER,
    id,
    name,
    email,
    config,
    timer,
    flags,
    dateactivate,
    dateupdate
})

export default editUser