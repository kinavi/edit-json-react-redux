// import React, {Component} from 'react';
// import AddUser from '../../Redux/Actions/AddUser'

// function IsJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

// const InputField = ()=>{
//     let tafield
//     //const {store} = 
//     const onAddUser=()=>{

//         if(IsJsonString(tafield.value))
//         {
//             const reasul = JSON.parse(tafield.value)
//             console.log(reasul)
//             if(Array.isArray(reasul))
//                 reasul.map(u=>
//                     store.dispatch(
//                         AddUser(
//                             u.id,
//                             u.name,
//                             u.email,
//                             u.config_bool,
//                             u.timer_integer,
//                             u.flags,
//                             u.dateactivate
//                         )
//                     )
//                 )

//             else
//                 store.dispatch(
//                     AddUser(
//                         reasul.id,
//                         reasul.name,
//                         reasul.email,
//                         reasul.config_bool,
//                         reasul.timer_integer,
//                         reasul.flags,
//                         reasul.dateactivate
//                     )
//                 )         
//         }
//     }

//     return(
//         <div>
//             <div>Ведите данные JSON (массив/объект): </div>
//             <textarea ref={ta=>tafield=ta} name="comment" cols="40" rows="3" placeholder='{
//                 "id": 100, 
//                 "name": "Inna", 
//                 "email": "inna@example.org", 
//                 "config_bool": 0, 
//                 "timer_integer": 176, 
//                 "flags": [1,0,1], 
//                 "dateactivate": "2019-10-10T11:12:32.1276Z", 
//                 "dateupdate": "2019-10-09 19:43:38"
//                 }'/>
//             <div>
//                 <button onClick={onAddUser}>Add</button>
//             </div>
//         </div>
//     )
// }

// export default InputField