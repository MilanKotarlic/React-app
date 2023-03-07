import React, { useEffect } from "react";
import { fetchUsers } from '../../store/actions';
import { connect } from 'react-redux';

const HomePage = ({users, fetchUsers}) => {
	useEffect(() => {
    fetchUsers();
  }, []);

	console.log(users)

  return (
    <div className="padding-main">
      <h1 className="title">welcome</h1>
			<div>
      {users ? users.map((user) => (
        <div key={user.id}>{user.name}</div>
      )) : (<div>No users</div>)}
    </div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(HomePage);
