import React, {useState} from 'react';
import './modal.css'; 

export default function Add({AddNewUser}) {
    const [isOpen,setIsOpen] = useState(false);
    const [username,setUsername] = useState("");
    const [useremail,setUseremail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState({street: ""});

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (username.trim() !== "" && useremail.trim() !== "") {
            AddNewUser(username, useremail, phone, address);
            toggleModal();
        } else {
            alert("Please fill  the fields (Name and Email).");
        }
    };

    return (
        <div>
            <button onClick={toggleModal} className="btn-modal">
                Add User
            </button>
            {isOpen && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">
                        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                            <h1>Add user</h1>
                            <button className="close-button" onClick={toggleModal}>
                                x
                            </button>
                            <form onSubmit={handleSubmit}>

                                <div className='input-block'>

                                    <label className="label-class" htmlFor="name">Name:</label>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        name="name"
                                        value={username}
                                        maxLength={20}/>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        onChange={(e) => setUseremail(e.target.value)}
                                        type="email"
                                        name="email"
                                        value={useremail}
                                        maxLength={25}/>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="tel"
                                        name="phone"
                                        value={phone}
                                        maxLength={20}/>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        onChange={(e) => setAddress({
                                        ...address,
                                        street: e.target.value
                                    })}
                                        type="text"
                                        name="address"
                                        value={address.street}
                                        maxLength={25}/>
                                </div>
                                <button type="submit" className="submit-button">
                                    Save
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
