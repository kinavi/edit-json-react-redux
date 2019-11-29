import React from 'react'
import HeadTable from './HeadTable'
import BodyTable from './BodyTable'

const Table = () =>
        <div>
            <div>Users:</div>
            <table border="1">
                <thead>
                    <tr>
                        <HeadTable />
                    </tr>
                </thead> 
                <tbody>
                    <BodyTable />
                </tbody>
            </table>
        </div>

export default Table  