import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import './Users.css'

export default function Users() {

    const [users, setUsers] = useState([])
    const [userID, setUserID] = useState("")
    const [getData, setGetData] = useState(false)
 

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(async () => {
        await fetch('https://refined-engine-408709-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {

                setUsers(Object.entries(data));
            }).catch(data => {
                ;
                setUsers(Object.entries(''));
            })

        setGetData(prev => !prev)
    }, [getData])

    useEffect(() => {

        let mainUserInfo = users.find(user => user[0] == userID)

        if (mainUserInfo) {
            setFirstName(mainUserInfo[1].firstName)
            setLastName(mainUserInfo[1].lastName)
            setEmail(mainUserInfo[1].email)
        }

        console.log(mainUserInfo)
    }, [userID])





    return (
        <>


            <Table striped bordered hover>


                <thead className='thead'>
                    <tr>
                        <th>شماره</th>
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>ایمیل</th>
                        <th className='hazf'>حذف / ویرایش</th>
                    </tr>
                </thead>


                <tbody className='tbody'>
                    {users.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                     
                            <td>{user[1].lastName}</td>
                            <td>{user[1].email}</td>
                            <td>{user[1].email}</td>
                            <td style={{ display: 'flex', justifyContent: 'right' }}>
                            
                         
                            </td>
                        </tr>
                    ))}

                </tbody>


            </Table>


      
        </>
    );
}
