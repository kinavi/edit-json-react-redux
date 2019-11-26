import React from 'react';
import { connect } from 'react-redux'

const HeadTable = ({Titles}) =>
    <div className='head-table'>
    {Titles.map(value=>
            <div className='key'>{value}</div>
        )}
    </div>
    
const mapStateToProps = state =>
({
    Titles: [...state.mask]
})   

export default connect(
    mapStateToProps
)(HeadTable)