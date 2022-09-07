import React from 'react'

const Table = ({tableHead,data}) => {
  return (
    <table className="table">
    <thead>
      <tr>
        {tableHead&&tableHead.map((item)=>{
            return <th scope="col" key={item.key}>{item.name}</th>
        })}
      </tr>
    </thead>
    <tbody>
        {data&&data.map((item,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    {tableHead&&tableHead.map((key,index)=>{
                       return key.keyName &&  <td key={index}>{item[key.keyName]}</td>
                    })}
                </tr>
            )
        })}
    </tbody>
  </table>
  )
}

export default Table