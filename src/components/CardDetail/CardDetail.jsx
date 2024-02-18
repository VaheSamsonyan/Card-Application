import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CardDetails.css";

export default function CardDetail({users, updateuser, deleteuser}) {
    let {id} = useParams();
    let user = users.find((item) => item.id == id);

    let [username,setUsername] = useState(user ? user.name : "");
    let [email,setEmail] = useState(user ? user.email  : "");
    let [phone,setPhone] = useState(user ? user.phone: "");
    let [address,setAddress] = useState(user? user.address: "");

    let navigate = useNavigate();

    return (
        <div>
            <Header title={"User"}/>
            <div className="card-box">
                <h1>{user
                        ? user.name
                        : ""}</h1>
                <form onSubmit={(event) => event.preventDefault()}>

                    <input
                        type="text"
                        name="name"
                        value={username}
                        maxLength={20}
                        onChange={(e) => setUsername(e.target.value)}/>

                    <input
                        type="email"
                        name="email"
                        value={email}
                        maxLength={25}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        maxLength={20}
                        onChange={(e) => setPhone(e.target.value)}/>

                    <input
                        type="text"
                        name="address"
                        value={address.street}
                        maxLength={25}
                        onChange={(e) => setAddress({
                        ...address,
                        street: e.target.value
                    })}/>

                    <button
                        type="submit"
                        className="submit-button"
                        id="delete-id"
                        onClick={() => {
                        deleteuser({id: user.id, name: username, email: email});
                        navigate("/");
                    }}>
                        Delete
                    </button>
                    <button
                        type="submit"
                        className="submit-button"
                        onClick={() => {
                        updateuser({id: user.id, name: username, email: email, phone: phone, address: address});
                        navigate("/");
                    }}>
                        Save
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}
