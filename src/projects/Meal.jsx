import { useEffect, useState } from 'react';
import '../style/meal.css'
import axios from 'axios';
function Meal() {
  const [items, setItems] = useState([]);
  useEffect(() =>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res =>{
      setltems(res.data.meal)
    }).catch((err)=>{
      console.log(error);
    })
  })
  return (
    <section className=''></section>
  )
}

export default Meal;