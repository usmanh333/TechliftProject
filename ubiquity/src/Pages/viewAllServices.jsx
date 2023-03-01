import React, { useEffect , useState} from "react";
import moment from 'moment';

const ViewAllServices = () => {
  const [showInput,setShowInput] = useState([])
  const userClick = async()=>{
    const result = await fetch('http://localhost:4000/cardsdata'); // getting data from database
    const user = await result.json();
      setShowInput(user);
      // navigate('/servicesAll/')
    }
  useEffect(()=>{
    userClick();
  },[])
  return (
    <div> 
       <h1>{showInput.map((val,ind)=>{
        return (
          <div key={ind}>
        <li>{val.name}</li>
        <li>{val.desc}</li>
        <li>{val.price}</li>
        <li>{val.number}</li>
        <li>{val.selectDistrict}</li>
        <li>{val.selectArea}</li>
        <li>{moment(val.date).format('MMMM Do YYYY, h:mm:ss a')}</li>
        <li>{val.checkbox}</li>
        <li><img src={`http://localhost:4000/cardsdata/uploads/${val.image}`} /></li>
        <br />
        
      </div>
          )

          
      })}</h1>
    </div>
  );
};

export default ViewAllServices;
