import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/card/Card';
import Add from './components/Add/add';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardDetail from './components/CardDetail/CardDetail';
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);

  function AddNewUser(name, email, phone, address) {
    let newuser = {
      id: Math.floor(100000 + Math.random() * 900000),
      name: name,
      email: email,
      phone: phone,
      address: address
    };
    setUsers([...users, newuser])
  }

  function updateuser(updatedUser) {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  }

  function deleteuser(deletableuser) {
    let newusers = users.filter((item) => item.id !== deletableuser.id)
    setUsers(newusers);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={
        
          <div>
             <Header title={"Users"}/>
            <div className="app">
              {users.length > 0 ? (
                users.map((user) => <Card key={user.id} user={user} />)
              ) : (
                <p>No users available</p>
              )}
            </div>
            <Add AddNewUser={AddNewUser} className="add" />
        <Footer />
          </div>
          
        } />
        <Route path="/carddetail/:id" element={<CardDetail users={users} updateuser={updateuser} deleteuser={deleteuser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

