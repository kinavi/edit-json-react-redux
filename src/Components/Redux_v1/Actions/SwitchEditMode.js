import TA from '../TypeActions'

const switchEditMode = (isEdit, id)=>({
    type:TA.SWITCH_EDIT_MODE,
    isEdit,
    id
})

export default switchEditMode