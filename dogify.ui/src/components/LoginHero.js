import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import { signInUser } from '../helpers/auth';

function LoginHero() {
  return (
<div className='container login-background'>
  <Card className='login-card'>
    <CardBody className='login-card-body'>
      <CardTitle tag="h1" className='title'>
        Dogify
      </CardTitle>
      <Button className='w-25' onClick={signInUser}>
        Login
      </Button>
    </CardBody>
  </Card>
</div>
  );
}

export default LoginHero;
