import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getAllUser') // Mettez votre URL ici
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email} {/* Assurez-vous d'adapter cela aux champs de votre modèle */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;


/*import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            redirect: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/user/id')
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((UserName, index) => {
                            return (
                                <tr key={index}>
                                    <td>{UserName}</td>
                                    <td><Button>Supprimer</Button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default User;
*/