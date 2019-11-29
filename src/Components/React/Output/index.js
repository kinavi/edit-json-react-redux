import React from 'react'
import { connect } from 'react-redux'
import { outputData } from '../../Redux/Actions/Output/outputData'


const Output = ({Output,onRefresh})=>{
    return(
        <div>
            <button onClick={()=>onRefresh()} >Refresh</button>
            <div>
                {Output}
            </div>
            

        </div>
    )
}

const mapStateToProps = state =>
({
    Output:state.Output
})
const mapDispatchToProps = dispatch =>({
    onRefresh(){
        dispatch(outputData())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Output)
