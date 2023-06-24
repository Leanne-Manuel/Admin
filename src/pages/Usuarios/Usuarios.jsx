import React from "react";
import "./Usuarios.css";
import "../../components/MRHome";
import { MdEdit, MdDelete } from "react-icons/md";

class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          canal: "@john",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          canal: "@jane",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john.doe@example.com",
          canal: "@john",
        },
        {
          id: 4,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          canal: "@jane",
        },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Canal</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.canal}</td>
                <td className="actions-cell">
                  <button className="edit-button">
                    <MdEdit />
                  </button>
                  <button className="delete-button">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Usuarios;
