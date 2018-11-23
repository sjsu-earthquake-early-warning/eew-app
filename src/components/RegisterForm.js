import React from 'react';

const registerForm = (props) => {
	const { email, password } = props.credentials;
	const { setEmail } = props.handlers;
	
	return (
	  <div>
	    <p>{email}</p>
		<p>{passsword}</p>
		<input
		  type="text"
		  value={email}
		  onChange={e => setEmail(e.target.email)}
		/>
	  </div>
	)
};

export registerForm;