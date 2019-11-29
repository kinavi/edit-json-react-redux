import React from 'react'
import { connect } from 'react-redux'

const preItem = (props)=>{
    const {Items} = props
    return (
        (!Items.length)?
        <div>Данных нет</div>
        :<table className='items' border="1">
            <thead></thead>
            {Items.map((item,i)=>
            <tbody key={i}>
                <tr className='cells'>
                    {item.id}
                    {item.cells.map((cell, i)=>
                        <td key={i} className='cell'>
                            <div>
                                <div>{`key: ${cell.key}`}</div>
                                <div>{`value: ${cell.value}`}</div>
                            </div>
                        </td>
                    )}
                </tr>
            </tbody>
            )}
        </table>
    )
}

const mapStateToProps = state =>
({
    Items: state.preLoader
}) 

export default connect(
    mapStateToProps,
    null
)(preItem)