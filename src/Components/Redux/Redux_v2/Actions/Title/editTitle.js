import {TitleTypeActions} from '../../TypeActions_v2'

export const editTitle=(index,value)=>({
    Type:TitleTypeActions.REMOVE_TITLE,
    index,
    value
})