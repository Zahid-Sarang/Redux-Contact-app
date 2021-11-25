import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearALLContact, deleteAllContact, deleteContact, SelectAllContact } from '../../action/ContactAction';
import Contact from './Contact';

const Contacts = () => {
    const [selectAll,setSelectAll] = useState(false);
    const dispatch=useDispatch();
    const contacts = useSelector(state => state.contact.contacts)
    const selctedContcats = useSelector(state => state.contact.selectedContacts)
    useEffect(() => {
        if(selectAll) {
            dispatch(SelectAllContact(contacts.map(contact => contact.id)))
        }else{
            dispatch(clearALLContact())
        }
    },[selectAll]);
    
    return (
       <div>
       {selctedContcats.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
        onClick={() => dispatch(deleteAllContact())}
        >
          delete all
        </button>
      ) : null}
     
           <table className="table shadow ">
  <thead>
    <tr>
        <th scope="col">
            <div className="custom-control custom-checkbox">
                <input id="selectAll"  type="checkbox" className="custom-control-input"
                value ={selectAll}
                    onClick={() => setSelectAll(!selectAll)}
                />
                <label htmlFor="selectAll" className="custom-control-label"></label>
            </div>
        </th>
        <th >Name</th>
        <th >Phone</th>
        <th >Email</th>
        <th >Action</th>
    </tr>
  </thead>
  <tbody>
  {
      contacts.map(contact =><Contact contact={contact} key={contact.id} selectAll={selectAll}/>  )
  }
    
  </tbody>
</table>
       </div>
    )
}

export default Contacts
