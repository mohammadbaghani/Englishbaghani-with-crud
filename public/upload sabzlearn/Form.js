import React, { useState, useEffect } from "react";
import "./Form.css";
import Button from 'react-bootstrap/Button';
import swal from "sweetalert";
import Users from "../Users/Users";


export default function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])





    const [courseStatus, setCourseStatus] = useState("start");
    const [courseCover, setCourseCover] = useState({});






    const registerHandler = event => {


   event.preventDefault()


        let formData = new FormData()
      
       
   
   

        formData.append('status', courseStatus)
        formData.append('cover', courseCover)
    
    fetch('https://refined-engine-408709-default-rtdb.firebaseio.com/users.json', {
          method: 'POST',
            body: formData
        }).then(res => {
          console.log(res);
      
        })




 }









    return (
        <div className="havi"  >

  

            <div className="form-container">
                <form className="register-form" autoComplete="on" onSubmit={registerHandler}>



                <label class="input-title">عکس دوره</label>


                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    setCourseCover(event.target.files[0]);
                  }}
                />


            
    <Button variant="outline-primary" className="form-enter" type="submit" onClick={() => swal({
                        title: "حساب  کاربری شما ساخته شد",
                        icon: "success",
                        buttons: "باشه !",
                    })}>      ثبت نام</Button>
                </form>
            </div>
            <Users />


        </div >


    )
}