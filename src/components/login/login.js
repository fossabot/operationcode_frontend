import React, { Component } from 'react';
import Modal from '../modal/modal';
import Form from '../form/form';
import DataFormItem from '../dataFormItem/dataFormItem';

class Login extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Form>
            <DataFormItem displayName="Username" />
            <DataFormItem displayName="Password" type="password" />
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
