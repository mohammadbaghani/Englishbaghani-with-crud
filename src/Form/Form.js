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

    const registerHandler = event => {
        event.preventDefault()

        let userInfo = {
            firstName,
            lastName,
            email
        }

        fetch('https://refined-engine-408709-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))

    }

    return (
        <div className="havi"  >

            <li className='moshakhasat'>
                زبان آموزان گرامی با تکمیل فرم زیر در سایت ثبت نام کرده و از مزایای آن بهره مند گردید



            </li>


            <div className="form-container">
                <form className="register-form" autoComplete="on" onSubmit={registerHandler}>
                    <input
                        id="first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-field"
                        type="password"
                        placeholder="نام"
                        name="firstName"
                    />
                    <input
                        id="last-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="form-field"
                        type="password"
                        placeholder="نام خانوادگی"


                    />

                    <input
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-field"
                        type="email"
                        placeholder="ایمیل"

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