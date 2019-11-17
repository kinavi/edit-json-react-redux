import React from 'react'
import User from '../User'
import './style.css'
import AddCard from '../AddUser'
import RemoveUser from '../../Redux/Actions/RemoveUser'
import switchEditMode from '../../Redux/Actions/SwitchEditMode'
import clearUsers from '../../Redux/Actions/ClearUsers'

const UsersList = ({store})=>{
    //const { value, isEdit } = store.getState().Users
    const {Users} = store.getState()
    //console.dir(Users);
    //const sortedColors = [...colors].sort(sortFunction(sort))
    const onClearUsers= ()=>{
        store.dispatch(
            clearUsers()
        )
    }
    //{console.log(Users[0].isEdit)}
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



                        // onSave = {(value)=>
                        //     store.dispatch(

                        //     )
                        // }
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
//id, name, email, config_bool, timer_integer, flags, dateactivate, dateupdate    id={user.id} name={user.name} email={user.email} {user.} 

// const CardList = ({ fuAddCard=f=>f ,list, onRemove=f=>f, isHide, Save=f=>f })=>
//     <div hidden={isHide}>
//         <div>Users:</div>
//         <div className='list-cards'>
//             <div>
            
//                 {list.map(card=>
                    
//                     <Card key={card.id} {...card} 
//                         onRemove={()=>onRemove(card.id)} 
//                         onSave={Save}
//                     />
//                     )
//                 }
//             </div>
//             <AddCard onAddCard={()=>fuAddCard()}/> 
//         </div>
        
//     </div>

export default UsersList  