import React,{ useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContact,updateContact } from '../../action/ContactAction'
import { useNavigate } from 'react-router';

import { useParams } from 'react-router-dom';
const EditContact = () => {
    let { id } = useParams();
    let navigate =useNavigate()
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    useEffect(() => {
      if (contact != null) {
        setName(contact.name);
        setPhone(contact.phone);
        setEmail(contact.email);
      }
      dispatch(getContact(id));
    }, [contact]);
  
    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact =Object.assign(contact,{
            name:name,
            phone:phone,
            email:email}
            )
       dispatch(updateContact(update_contact))
       navigate("/");
       
    };


    return (
        <div className="card border-0 shadow">
        <div className="card-header">Add a Contact</div>
        <div className="card-body">
            <form onSubmit={e => onUpdateContact(e)}>
                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder="Enter your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-warning">Update Contact</button>
            </form>
         

        </div>
           
        </div>
    )
}

export default EditContact
