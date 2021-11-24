import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store';
import shortid from "shortid"
import {useNavigate } from "react-router-dom"
const AddContact = () => {
    let navigate =useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_contact));
        navigate("/");
    };
    return (
        <div className="card border-0 shadow">
        <div className="card-header">Add a Contact</div>
        <div className="card-body">
            <form onSubmit={(e) => createContact(e)}>
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
                <button type="submit" className="btn btn-success">Success</button>
            </form>
         

        </div>
           
        </div>
    )
}

export default AddContact
