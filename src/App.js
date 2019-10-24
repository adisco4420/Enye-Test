import React, { Component} from 'react';
import './App.css';
import ListUsers from './users/ListUsers';


import { Layout, Menu, Button, Icon, Modal } from 'antd';
import AddUser from './users/AddUser';

const { Header, Content, Footer } = Layout;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Ken',
    birthday: new Date(1978, 12, 2).toDateString(),
    age: 32,
    hobby: 'Singing',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    birthday: new Date(1967, 4, 5).toDateString(),
    age: 27,
    hobby: 'Dancing',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    birthday: new Date(1990, 21, 12).toDateString(),
    age: 43,
    hobby: 'Coding',
  },
];
class App extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }
  state = { 
    visible: false,
    users: [...data]
   };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    this.setState({visible: false});
    this.child.current.resetFields()
  };

  handleCancel = e => {
    this.setState({visible: false});
    console.log(this.child.current);
    console.log(this.form);
    
    this.child.current.resetFields()
    
  };
  handelAddUser = (user) => {
    this.handleCancel();
    const { users } = this.state
    const key = (users.length + 1).toString();
    let newUser = [...users];
    newUser = newUser.concat({key, ...user});
    this.setState({users: newUser})    
  } 
  render() { 
    return (  
    <Layout className="layout">
    <Header className="content-layout">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Enye Test</Menu.Item>
        <React.Fragment>
        <Button onClick={this.showModal} style={{float: 'right', marginTop: '10px'}} type="primary">
        <Icon type="user-add" /> Add User</Button>
        </React.Fragment>
         </Menu>
        
     
    </Header>
    <Content className="content-layout">
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <ListUsers  users={this.state.users}/>
      </div>
    </Content>
    <Modal
          title="Add User"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddUser 
          wrappedComponentRef={(form) => this.form = form} 
          ref={this.child} 
          onAddUser={this.handelAddUser} />
        </Modal>
    <Footer style={{ textAlign: 'center' }}>Enye {new Date().getFullYear()} Created by Alabi Sodiq</Footer>
  </Layout>
  );
  }
}
 
export default App;

