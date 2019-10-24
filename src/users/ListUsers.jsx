import React, { Component } from 'react';
import { Table } from 'antd';
const columns = [
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
    state = {  }
    render() { 
        const data = this.props.users
        return ( <div style={{overflowX: 'auto'}}>
        <Table  columns={columns} dataSource={data} /> 
        </div>);
    }
}
 
export default ListUsers;



