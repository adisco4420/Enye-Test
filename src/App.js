import React, { Component} from 'react';
import './App.css';
import ListUsers from './users/components/ListUsers';

import { Layout, Menu, Button, Icon, Modal } from 'antd';
import AddUser from './users/components/AddUser';



const { Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }
  state = { 
    visible: false
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

  handleCancel = () => {
    this.setState({visible: false});
    this.child.current.resetFields()
  };
  handleClose = () => {
    this.setState({visible: false});
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
        <ListUsers/>
      </div>
    </Content>
    <Modal
          title="Add User"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddUser 
          ref={this.child} 
          onCancel={this.handleClose} />
        </Modal>
    <Footer style={{ textAlign: 'center' }}>Enye {new Date().getFullYear()} Created by Alabi Sodiq</Footer>
  </Layout>
  );
  }
}
 
export default App;

