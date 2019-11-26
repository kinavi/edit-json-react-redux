import {TitleTypeActions} from '../../TypeActions'

export const editTitle=(index,value)=>({
    Type:TitleTypeActions.REMOVE_TITLE,
    index,
    value
})