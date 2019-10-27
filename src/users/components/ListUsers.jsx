import React, {Component} from 'react';
import { Table } from 'antd';
import { connect } from "react-redux";

const columns = [
  {
    title: 'UserId',
    dataIndex: 'userId',
    key: 'userId',
  },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    }, 
    {
      title: 'BirthDay',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
      },

  ];

class ListUsers extends Component {
  state = { 
    users: []
   }
  componentDidMount() {    
    // const newUsers = [];
    // const allUsers = this.props.users;
    // Object.keys(allUsers).map(field => {
    //   newUsers.push(allUsers[field])
    // })
    // this.setState({users: newUsers || []})
  }

  render() { 
    const newUsers = [];
    const allUsers = this.props.users;
    Object.keys(allUsers).map(field => {
      newUsers.push(allUsers[field])
    })

    return ( 
      <div style={{overflowX: 'auto'}}>
      <Table rowKey="userId"  columns={columns} dataSource={newUsers} /> 
      </div>
     );
  }
}

 



const mapStateToProps  = state => {
  return {
    users: state.users.items
  };
};

export default connect(mapStateToProps)(ListUsers);
