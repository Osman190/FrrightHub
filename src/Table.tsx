import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { WarpSort } from './styledComponents/Elements'


interface TableProps {
 shipments: Object
 handleSort: Function
}


const Table: React.FC<any> = (props: TableProps) => {
console.log(props);
return(
  <>
  <table>
    <thead>
      <tr>
        <th>
          Id 
          <WarpSort onClick={(e) => props.handleSort()}>
            <FontAwesomeIcon icon={faSortUp}  />
            </WarpSort> 
          <WarpSort onClick={(e) => props.handleSort()}>
            <FontAwesomeIcon icon={faSortDown} />
            </WarpSort> 
        </th>
      <th>Mode</th>
        <th>
          Name
          <WarpSort>
            <FontAwesomeIcon icon={faSortUp} />
          </WarpSort>
          <WarpSort>
            <FontAwesomeIcon icon={faSortDown} />
          </WarpSort>
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