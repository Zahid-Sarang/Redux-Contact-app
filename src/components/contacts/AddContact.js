import React,{ useState } from 'react'

const AddContact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        console.log(name,phone,email);
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
