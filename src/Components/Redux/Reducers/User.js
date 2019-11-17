import TA from '../TypeActions'

const User = (state = {}, action)=>{
    switch(action.type)
    {
        case TA.ADD_USER:
            return {
                id:action.id+1,
                name:action.name,
                email:action.email,
                config_bool:action.config,
                timer_integer:action.timer,
                flags:action.flags,
                dateactivate:action.dateactivate,
                dateupdate:action.dateupdate
            }
        case TA.EDIT_USER:
            console.log(`EDIT_USER - action: ${action.name}`)
            console.log(`state id: ${state.id}, action id: ${action.id}`)
            console.log(action.dateupdate)
            return (state.id!==action.id)?
                state:
                {
                    ...state,
                    name:action.name,
                    email:action.email,
                    config_bool:action.config,
                    timer_integer:action.timer,
                    flags:action.flags,
                    dateactivate:action.dateactivate,
                    dateupdate:action.dateupdate
                }
        case TA.SWITCH_EDIT_MODE:
                console.log(`SWITCH_EDIT_MODE - action.isEdit: ${action.isEdit}`)
                return(state.id!==action.id)?
                {
                    ...state
                    //isEdit:!action.isEdit
                }://state.isEdit=action.isEdit
                {
                    ...state,
                    isEdit:action.isEdit
                }
        default: 
            return state 
    }
}

export default User
//name, email, config, timer, flags, dateactivate
//id name email config_bool timer_integer flags dateactivate dateupdate