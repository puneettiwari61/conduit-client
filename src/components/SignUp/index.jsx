import React from 'react';
import Button from "@material-ui/core/Button"

export default function SignUp() {
  return (
    <>
    <div className="container">
      <h3 className="log">SignUp</h3>
    <form action="">
    <div className="form">
    <input className="input" type="text" placeholder="username" />
      <input className="input" type="email" placeholder="email" />
      <input className="input" type="password" placeholder="password" />
      <Button color="primary" size="large" type="submit" variant="contained"> Submit </Button>
      </div>
    </form>
    </div>
    </>
  );
}
