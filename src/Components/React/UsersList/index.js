import React from 'react'
import User from '../User'
import './style.css'
import RemoveUser from '../../Redux/Actions/RemoveUser'
import clearUsers from '../../Redux/Actions/ClearUsers'

const UsersList = ({store})=>{

    const {Users} = store.getState()
    const onClearUsers= ()=>{
        store.dispatch(
            clearUsers()
        )
    }

    return (
        <div>
            <div>Users:</div>
            <div className='list-cards'>
                {(!Users.length)?
                    <p>Нет данных</p>:
                    Users.map(user=>
                        <User key={user.id}  {...user} store={store} isEdit={user.isEdit}

                        onRemove={() =>
                            store.dispatch(
                                    RemoveUser(user.id)
                                )
                            } 
                        />
                    )
                }
            </div>
            <div hidden={!Users.length}>
                <button className='btn' onClick={onClearUsers}>Clear</button>
            </div>
            
        </div>
    )
    
}

export default UsersList  