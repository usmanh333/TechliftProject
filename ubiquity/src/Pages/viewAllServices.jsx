import React, { useEffect , useState} from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const ViewAllServices = () => {
  const [showInput,setShowInput] = useState([])
  const userClick = async()=>{
    const result = await fetch('http://localhost:4000/cardsdata'); // getting data from database
    const user = await result.json();
      setShowInput(user);
      // navigate('/servicesAll/')
    }
  // Delete Funtion
  const deletePost = async(id)=>{
    console.log(id)
    let removeRes = await fetch('http://localhost:4000/cardsdata/'+ id, {
      method: 'delete' // Always define method 
    })
    removeRes = await removeRes.json()
    if(removeRes){
      userClick()
    }
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
            <li>{moment(val.date).format("MMMM Do YYYY, h:mm:ss a")}</li>
            <li>{val.checkbox}</li>
            <li>{val.selectCategory}</li>
            <li>
              <img
                src={`http://localhost:4000/cardsdata/uploads/${val.image}`}
              />
            </li>
            <button
              class="btn btn-danger m-2"
              onClick={() => {deletePost(val._id)}}>
              {/* here the ID will match with the BE ID */}
              Remove
            </button>
            <button className="btn btn-danger">
              <Link to={`/updateService/${val._id}`}>Update</Link>
            </button>
            <button className="btn btn-danger">
              <Link to={`/serviceDetails/${val._id}`}>ClickME</Link>
            </button>
            <br />
          </div>
        );

          
      })}</h1>
    </div>
  );
};

export default ViewAllServices;