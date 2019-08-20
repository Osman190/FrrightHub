import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { WarpSort } from './styledComponents/Elements'



interface TableProps {
 shipments: Object
 handleSortId: Function
}


const Table: React.FC<any> = (props: TableProps) => {
return(
  <>     
  <table>
    <thead>
      <tr>
        <th>
          Id 
          <WarpSort onClick={(e) => props.handleSortId()}>
            <FontAwesomeIcon icon={faSort}  />
            </WarpSort> 
           
        </th>
      <th>Mode</th>
        <th>
          Name
          <WarpSort onClick={(e) => props.handleSortId()}>
            <FontAwesomeIcon icon={faSort} />
          </WarpSort>
          
          </th>
      <th>Status</th>
      <th>Total</th>
      <th>Details</th>
      </tr>
    </thead>
    <tbody>
        {Object.values(props.shipments).map((shipment: any, i) => {
          return (
            <tr key={i}>
            <td>{shipment.id}</td>
            <td>{shipment.mode}</td>
            <td>{shipment.name}</td>
            <td>{shipment.status}</td>
            <td>{shipment.total}</td>
            <td>
              <NavLink exact={true} to={`/item/${shipment.id}`} >
                <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
              {" "}
              <FontAwesomeIcon icon={faInfoCircle} />
            </td>
        </tr>
          )
        
        })}
    </tbody>
  </table>
  </>
)

}

export default Table