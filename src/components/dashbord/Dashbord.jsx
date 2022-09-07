import React, { useContext } from 'react'
import AuthContext from '../../srore/auth-context';
import Table from '../utils/Table'

const Dashbord = () => {
  const tableHead = [
    {
      key:1,
      name:'No',
    },
    {
      key:2,
      name:'Name',
      keyName:'name'
    },
    {
      key:3,
      name:'Username',
      keyName:'userName'
    },
    {
      key:4,
      name:'Password',
      keyName:'password'
    },
  ];

  const {dataBase} = useContext(AuthContext);
  console.log(dataBase)
  return (
    <div className='container'>
      <Table tableHead={tableHead} data={dataBase}/>
    </div>
  )
}

export default Dashbord