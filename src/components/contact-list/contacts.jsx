import React, { useState } from "react";
import { connect } from "react-redux"

const ContactList = ({contacts,addContactName,displayInfo}) => {
  let [nameValue, setnameValue] = useState("");
  let [count, setCount] = useState(1);


  const handleChange = (event)=> {
    setnameValue(event.target.value)
  }

  const handleSubmit = ()=>{
    setCount(++count)
    let newContact = {
      id: count,
      name: nameValue,
      age: 0,
      mail: ""
    }
    addContactName(newContact)
  }

  const handleSubmitInfo = (contact) =>{
    displayInfo(contact)
  }


    return (
    <div className="container">
      <div className="jumbotron">
         <h1>Contact list</h1>
         <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" value={nameValue} onChange={handleChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => handleSubmit()}>Button</button>
            </div>
        </div>
        <ul className="list-group">
            {contacts.map(contact =>(<li className="list-group-item" onClick={() => handleSubmitInfo(contact)} key={contact.id}>{contact.name}</li>))
            
            }

        </ul>

      </div>
    </div>

  );
};

const mapStateToProps = state =>({
    contacts: state.contacts

})

const mapDispatchToProps = dispatch =>({
  
  addContactName(newContact){
    dispatch({
      type: "NEW_NAME",
      newContact
    })
  },

  displayInfo(contact){
    dispatch({
        type: "SHOW_INFO",
        contact 
      })
}
  

})
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
