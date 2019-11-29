import React from 'react';
import { connect } from 'react-redux'

const HeadTable = ({Titles}) =>
    <div className='head-table'>
    {Titles.map((value,i)=>
            <div key={i} className='key'>{value}</div>
        )}
    </div>
    
const mapStateToProps = state =>
({
    Titles: state.titles
})   

export default connect(
    mapStateToProps,
    null
)(HeadTable)