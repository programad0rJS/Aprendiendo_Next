import Router from "next/router";
import { Fragment } from "react";

const Users = (props) => {

  const Nombre = 'Josue Alexander ';

  console.log('Soy Josue');

  return (
    <Fragment>
      <ul className="list-group">
        {props.users.map((user) => (
          <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={user.id} onClick={() => Router.push(`/users/[id]`, `/users/${user.id}`)}>
            <div>
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>



          <h1> {Nombre}</h1>

    </Fragment>
  );
};

export default Users;