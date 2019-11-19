import TA from '../TypeActions'

 const addUser = (id, name, email, config, timer, flags, dateactivate)=>
    ({
        type:TA.ADD_USER,
        id,
        name,
        email,
        config,
        timer,
        flags,
        dateactivate,
        dateupdate:new Date().toString()
    })
export default addUser
