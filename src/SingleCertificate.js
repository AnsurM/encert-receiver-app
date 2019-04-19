import React, { Component } from 'react';
import { connect } from 'react-redux';
import reducers from './redux/reducers';

class SingleCertificate extends Component {

    state = {  };

    render() { 
        console.log(this.props.certificateData,"state");
        return (
            <div>
                <h1>Certificate here</h1>
            </div>
        );
    }

}
function mapStateToProp(state) {
    console.log(state)
    return ({
        certificateData: state.signIn_reducer.certificate_data,
    })
}

export default connect(mapStateToProp,null)(SingleCertificate);
// export default SingleCertificate;