import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const getUserDetail = async () => {
    try {
      const res = await Axios.get(`http://localhost:4000/cardsdata/${id}`);
      setCard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
      <p>{card.price}</p>
      <p>{card.number}</p>
      <p>{card.selectCategory}</p>
    </div>
  );
};

export default ServicesDetails;
