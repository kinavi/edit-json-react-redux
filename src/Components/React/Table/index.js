import React from 'react'
import './style.css'
//import { connect } from 'react-redux'
import HeadTable from './HeadTable'
import BodyTable from './BodyTable'

const Table =()=>
        <div>
            <div>Users:</div>
            <div className='table'>
                <HeadTable />
                <BodyTable />
            </div>
        </div>

export default Table  