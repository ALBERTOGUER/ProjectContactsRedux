import {
    createStore
} from 'redux'

import contacts from './components/contact-list/contacts'

const initialState = {
    contacts: [{
        id: 1,
        name: "Alberto",
        age: 26,
        mail: "alberto.perez.1509@outlook.com"
    }],
    form: false,
    contactInfo: ""
}

const reducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case "NEW_NAME":
            return {
                ...state,
                contacts: [...state.contacts,action.newContact]
            }
        case "SHOW_INFO":
            return{
                ...state,
                contactInfo: action.contact,
                form: !state.form
            }
        case "CHANGE_INFO":
            return{
                ...state,
                form: !state.form,
                contacts: state.contacts.map(contact => contact.id === action.info.id?action.info:contact)
            }
            
            
          
        default: return state           
                       
    }
    
}

export default createStore(reducer)