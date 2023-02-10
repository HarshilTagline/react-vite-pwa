import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data));
        setUsers(res?.data || []);
      })
      .catch((err) => {
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        setUsers(tempUsers);
      });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.address?.street}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}