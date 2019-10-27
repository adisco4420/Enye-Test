import React, {Component} from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button, DatePicker } from 'antd';

const addUserUrl = 'https://us-central1-oshop-591ef.cloudfunctions.net/Register'

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
       const data = {...values, birthday: new Date(values.birthday._d).toDateString()}
        this.handleAddUser(data)
        this.resetForm();
      }
    });
  };
  handleAddUser = async (user) => {
    try {
        await axios.post(addUserUrl, user)
        this.props.onCancel();
    } catch (error) {
      console.log(error);
    }
  } 
  resetForm = () => {
    this.props.form.resetFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your firstname!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your lastname!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: 'Please input your birthday!' }],
          })(
            <DatePicker placeholder="Birthday" style={{width: '100%'}} showTime format="YYYY-MM-DD" />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your age!' }],
          })(
            <Input 
                prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="number"
              placeholder="Age"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your hobby!' }],
          })(
            <Input 
                prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Hobby"
            />,
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
            Add
          </Button>
      </Form>
    );
  }
}


const AddUser =  Form.create()(NormalLoginForm);

export default AddUser;