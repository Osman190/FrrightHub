import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'


interface TableProps {
 shipments: Object
}

const Table: React.FC<any> = (props: TableProps) => {
console.log(props)
return(
  <>
  <table>
    <thead>
      <tr>
        <th>
          Id  
          <FontAwesomeIcon icon={faSortUp} />
          <FontAwesomeIcon icon={faSortDown} />
        </th>
      <th>Mode</th>
        <th>
          Name
          <FontAwesomeIcon icon={faSortUp} />
          <FontAwesomeIcon icon={faSortDown} />
          </th>
      <th>Status</th>
      <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(props.shipments).map((shipment: any, i) => {
        if(i < 20)
        return(
          <tr key={i}>
          <td>{shipment.id}</td>
          <td>{shipment.mode}</td>
          <td>{shipment.name}</td>
          <td>{shipment.status}</td>
          <td>{shipment.total}</td>
        </tr>
          )
        })}
    </tbody>
  </table>
  </>
)

}

export default Table