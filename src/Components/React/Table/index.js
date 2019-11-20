import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import HeadTable from './HeadTable'
import BodyTable from './BodyTable'

const Table = ()=>
        <div>
            <div>Users:</div>
            <div className='table'>
                <HeadTable />
                <BodyTable />
            </div>
        </div>

// const mapStateToProps = state =>
// ({
//     Titles: [...state.Titles],
//     Items:[...state.Items]
// })

// const mapDispatchToProps = dispatch =>
// ({
//     // onRemove(id) {
//     //     dispatch(RemoveUser(id))
//     // },
//     // onClear(){
//     //     dispatch(ClearUsers())
//     // },
//     // onEdit(id){
//     //     dispatch(switchEditMode(true,id))
//     // },
//     // onCancel(id){
//     //     dispatch(switchEditMode(false,id))
//     // },
//     // onSave(id, name, email, config, timer, flags, dateactivate){
//     //     dispatch(
//     //         editUser(
//     //             id,
//     //             name,
//     //             email,
//     //             config,
//     //             timer,
//     //             flags,
//     //             dateactivate,
//     //             new Date().toLocaleString()
//     //         )
//     //     )
//     // }
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Table)

export default Table  