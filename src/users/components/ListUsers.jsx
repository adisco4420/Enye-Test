import React from 'react';
import { Table } from 'antd';
import { useUsers } from '../UserListHooks'
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
  
const ListUsers = () => {
  const { users } = useUsers();
  return ( 
    <div style={{overflowX: 'auto'}}>
    <Table rowKey="id"  columns={columns} dataSource={users} /> 
    </div>
   );
}
 
export default ListUsers;

 



