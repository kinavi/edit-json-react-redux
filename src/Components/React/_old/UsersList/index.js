// import React from 'react'
// import User from '../User'
// import './style.css'
// import RemoveUser from '../../../Redux/Actions/RemoveUser'
// import ClearUsers from '../../../Redux/Actions/ClearUsers'
// import { connect } from 'react-redux'
// import editUser from '../../../Redux/Actions/EditUser'
// import switchEditMode from '../../../Redux/Actions/SwitchEditMode'
// import HeadTable from '../../Table/HeadTable'
// import BodyTable from './BodyTable'

// const UsersList = (props, { store })=>{

//     // const {Users} = store.getState()

//     // const onClearUsers= ()=>{
//     //     store.dispatch(
//     //         ClearUsers()
//     //     )
//     // }
//     const {Users, onClear, onRemove, onEdit, onCancel,onSave, Titles, Items}=props
//     //const titles = Object.keys(Users[0])
//     return (
//         <div>
//             <div>Users:</div>
//             <div className='table'>
//                 <HeadTable Titles={Titles} />
//                 <BodyTable Items={Items}/>
//             </div>
//             {/* <div hidden={!Users.length}>
//                 <button className='btn' onClick={onClear}>Clear</button>
//             </div> */}
//         </div>
//     ) 
// }

// // {/* <div> titles={Object.keys(Users[0])} Users={Users}
// //                     <div>id</div>
// //                     <div>name</div>
// //                     <div>mail</div>
// //                     <div>config</div>
// //                     <div>time</div>
// //                 </div> */}
// //                 {/* {(!Users.length)?'':
// //                     <headTable {...Object.keys(Users[0])}></headTable>
// //                 }
// //                 {(!Users.length)?
// //                     <p>Нет данных</p>:
// //                         Users.map(user=>
// //                             <User key={user.id}  
// //                                 {...user} 
// //                                 isEdit={user.isEdit}
// //                                 onRemove={()=>onRemove(user.id)} 
// //                                 onEdit={()=>onEdit(user.id)}
// //                                 onCancel={()=>onCancel(user.id)}
// //                                 onSave={onSave}
// //                             />
// //                         )
                    


                    
// //                 } */}



// const mapStateToProps = state =>
// ({
//     Titles: [...state.Titles],
//     Items:[...state.Items]
// })

// const mapDispatchToProps = dispatch =>
// ({
//     onRemove(id) {
//         dispatch(RemoveUser(id))
//     },
//     onClear(){
//         dispatch(ClearUsers())
//     },
//     onEdit(id){
//         dispatch(switchEditMode(true,id))
//     },
//     onCancel(id){
//         dispatch(switchEditMode(false,id))
//     },
//     onSave(id, name, email, config, timer, flags, dateactivate){
//         dispatch(
//             editUser(
//                 id,
//                 name,
//                 email,
//                 config,
//                 timer,
//                 flags,
//                 dateactivate,
//                 new Date().toLocaleString()
//             )
//         )
//     }
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(UsersList)

// //export default UsersList  