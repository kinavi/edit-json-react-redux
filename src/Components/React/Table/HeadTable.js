import React from 'react';
import { connect } from 'react-redux'

const HeadTable = ({Titles}) =>{
    return(
        Titles.map((value,i)=>
            <th key={i} className='key'>{value}</th>
        )
    )
}

const mapStateToProps = state =>
({
    Titles: state.titles
})   

export default connect(
    mapStateToProps,
    null
)(HeadTable)