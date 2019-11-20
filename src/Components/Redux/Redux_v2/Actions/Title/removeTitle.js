import {TitleTypeActions} from '../../TypeActions'

export const removeTitle=(value)=>({
    Type:TitleTypeActions.REMOVE_TITLE,
    value:value
})