import React, { useState } from "react";
import { connect } from "react-redux";

const ContacInfo = ({ contactInfo, form,ChangeInfo }) => {

  const submitValues = (event) =>{
    let newInfo ={
        id: contactInfo.id,
        name: document.getElementById('inputName').value,
        age: document.getElementById('inputAge').value,
        mail: document.getElementById('inputMail').value,
    }
    ChangeInfo(newInfo)
  }

  if (form) {
    return (
      <div className="container">
        <div className="jumbotron">
          <form >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                defaultValue={contactInfo.name}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputAge"
                defaultValue={contactInfo.age}
                placeholder="Age"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputMail"
                placeholder="Mail"
                defaultValue={contactInfo.mail}
              />
            </div>
            <button type="button" onClick={submitValues} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  contactInfo: state.contactInfo,
  form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
    ChangeInfo(info){
        dispatch({
            type: "CHANGE_INFO",
             info
          })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ContacInfo);
