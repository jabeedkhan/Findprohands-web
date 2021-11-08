import React from "react";
import RingLoader from "react-spinners/RingLoader";

const style = {
    marginLeft: '50%'
    
};

class Loader extends React.Component {   
    render() {
      return (
          <div className="modal-dialog-centered" style={style} >
          <RingLoader
            size={80}
            color={"#0DCFF6 "}
            loading={this.props.loading}
          />
          </div>
      );
    }
  }

export default Loader;