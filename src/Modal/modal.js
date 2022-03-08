import React from "react";
import "./modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <button
          className="btn btn-primary mb-2"
          onClick={() => this.setState({ isOpen: true })}
        >
          Open Modal
        </button>
        {this.state.isOpen && (
          <div className="modal_">
            <div className="modal_body">
              <h1>Modal title</h1>
              <p style={{ color: "red" }}>I am awesome modal!</p>
              <button
                className="btn btn-primary"
                onClick={() => this.setState({ isOpen: false })}
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
