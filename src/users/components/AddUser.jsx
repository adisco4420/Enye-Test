import React from 'react';

import { Form, Icon, Input, Button, DatePicker } from 'antd';
import { useUser } from '../UserListHooks';

const NormalLoginForm = (props) => {
  const { getFieldDecorator, validateFields, resetFields } = props.form;
  const { addUser } = useUser();
  return (<Form 
    onSubmit={e => {
      e.preventDefault();
      validateFields((err, values) => {
        if(!err) {
          addUser({...values, birthday: new Date(values.birthday._d).toDateString()});
          resetFields();
          props.onCancel();
        }
      })
     
  }}
  className="login-form">
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
</Form>)
}
 



// class NormalLoginForm extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     const { addTodo } = useTodo();
//     addTodo('james')
//     this.props.form.validateFields((err, values) => {
//       console.log(values);
//       if (!err) {
//         this.props.onAddUser({...values, birthday: new Date(values.birthday._d).toDateString()})
//         this.resetForm();
//       }
//     });
//   };
//   resetForm = () => {
//     this.props.form.resetFields();
//   }
// //   15836736633571435806
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item >
//           {getFieldDecorator('firstName', {
//             rules: [{ required: true, message: 'Please input your firstname!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="First Name"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item >
//           {getFieldDecorator('lastName', {
//             rules: [{ required: true, message: 'Please input your lastname!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Last Name"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item >
//           {getFieldDecorator('birthday', {
//             rules: [{ required: true, message: 'Please input your birthday!' }],
//           })(
//             <DatePicker placeholder="Birthday" style={{width: '100%'}} showTime format="YYYY-MM-DD" />,
//           )}
//         </Form.Item>
//         <Form.Item >
//           {getFieldDecorator('age', {
//             rules: [{ required: true, message: 'Please input your age!' }],
//           })(
//             <Input 
//                 prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="number"
//               placeholder="Age"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item >
//           {getFieldDecorator('hobby', {
//             rules: [{ required: true, message: 'Please input your hobby!' }],
//           })(
//             <Input 
//                 prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Hobby"
//             />,
//           )}
//         </Form.Item>

//         <Button type="primary" htmlType="submit" className="login-form-button">
//             Add
//           </Button>
//       </Form>
//     );
//   }
// }

const AddUser =  Form.create()(NormalLoginForm);

export default AddUser;