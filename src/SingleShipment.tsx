import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { url } from "./url";
import { ShipmentCard } from './styledComponents/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


interface Props {
 match: {
  params: {
    id: String
  }
 }
}


const SingleShipment: React.FC<any> = (props: Props) => {
  const [data, setData] = useState<any>({});
  console.log(props);
  console.log(data);
  
    useEffect(() => {
      (async () => {
        const res = await fetch(url, { method: "GET" });
        const data = await res.json();
         setData(data);
      })();
    }, []);
  

  const singleShipment: any = Object.values(data).filter(
    (shipment: any) => props.match.params.id === shipment.id
  )[0];

  console.log(singleShipment);
  return  (
    <ShipmentCard >
    {
      singleShipment ? ( 
        <>
          <div>id: {singleShipment.id}</div>
          <div>Name: {singleShipment.name}</div>
          <div>Destination: {singleShipment.destination}</div>
          <div>Coming-From: {singleShipment.origin}</div>
          <div>Mode: {singleShipment.mode}</div>
          <div>Status: {singleShipment.status}</div>
          <div>Shipment-Type: {singleShipment.type}</div>
          <div>Total: {singleShipment.total}</div>
          <div>Cargos: {singleShipment.cargo.map((cargo: any, i: any) => {
              return (
                <ul key={i}>
                  <li>Type: {cargo.type}</li>
                  <li>Detailing: {cargo.description}</li>
                  <li>Quantity: {cargo.volume}</li>
                </ul>
                );
              })}
          </div>
          <div>Extra-Services: {singleShipment.services.map((service: any, i: any) => {
              return (
                <ul key={i}>
                  <li>Type: {service.type}</li>
                  <li>Value: {service.value ? service.value :  `0`}</li>
                </ul>
                );
              })}
          </div>
          <NavLink
            exact={true}
            to="/"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
        </>
        ) 
        : null
      
    }
    </ShipmentCard>
    );
};
export default SingleShipment;