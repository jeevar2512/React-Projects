import { useState } from "react"
import './index.css'

function Practise() {
  const [user, setUser]=useState({name:"jeeva", age:22, gender:"Male" ,isMarried:true,country:"India"});
  function changeHandler(e){
    const name = e.target.name;
    const value = e.target.type === "checked"? e.target.checked :e.target.value;
    setUser({...user, [name]: value});
  }
  
  return (
   
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{user.age}</td>
          </tr>
           <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <th>Marital Status</th>
            <td>{user.isMarried ? "Married" :"Not Married"}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{user.country}</td>
          </tr>
        </tbody>
      </table>
      <form >
        <input type="text" placeholder="Full name" name ="name" value={user.name} onChange={changeHandler}/>
        
        <input type="text"  placeholder="Age" name ="age" value={user.age} onChange={changeHandler}/>
        <div className="gender">
          <label htmlFor="male">
            <input type="radio" name ="gender" id="male" checked ={user.gender=="Male" } value= "Male" onChange={changeHandler}/>
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" name ="gender" id="female" checked ={user.gender =="Female" } value="Female" onChange={changeHandler}/>
            Female
            
          </label>
        </div>
        <label htmlFor="isMarried">
          <input type="checkbox" id="isMarried" name ="isMarried" checked ={user.isMarried} onChange={changeHandler}/>
          Is Married
        </label>
        <div>
          <label htmlFor="country">
            Select Country: 
            <select name="country" id="country" value={user.country} onChange={changeHandler}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            
          </label>
        </div>
        
      </form>

    </>
  )
}

export default Practise
