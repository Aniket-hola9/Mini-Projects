import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h3></h3>
      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading ? <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
  <div className="loader"></div>
</div>
 : (
       <ul className="user-list">
  {filteredUsers.map(user => (
    <li key={user.id} onClick={() => setSelectedUser(user)}>
      <div className="avatar">
        {user.name.charAt(0)}
      </div>
      <div className="info">
        <strong>{user.name}</strong>
        <small>{user.email}</small>
        <small>{user.phone}</small>
      </div>
    </li>
  ))}
</ul>

      )}

      {selectedUser && (
        <div className="modal" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
