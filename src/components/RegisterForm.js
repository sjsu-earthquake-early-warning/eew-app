import React from 'react';

const RegisterForm = props => {
  const { email, password } = props.credentials;
  const { setEmail } = props.handlers;

  return (
    <div>
      <p>{email}</p>
      <p>{password}</p>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.email)}
      />
    </div>
  );
};

RegisterForm.defaultProps = {
  handlers: {
    setEmail: () => {}
  },
  email: '',
  password: ''
};

export default RegisterForm;
