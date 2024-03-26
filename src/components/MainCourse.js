import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursesData from '../CoursesData/CoursesData';
import './Maincourse.css';
import { PiBookOpenTextLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect } from 'react'; import { CgDanger } from "react-icons/cg";
export default function MainCourse() {


    useEffect(() => {
        AOS.init();
    }, [])

    const [show, setShow] = useState(true);

    const showinfo = () => {

        setShow(current => !current);


    }
    let params = useParams()

    let mainCouseData = CoursesData.find(course => course.id == params.courseID)


    const mystyle = {
        width: `${mainCouseData.percent}` + '%',

    };

    return (



        <body className="main-course-body">




            <h2 className="p-course range" >


                میزان سختی

                <p className='percent-number'>
                    %{mainCouseData.percent}
                </p>


            </h2>

            <div class="progress">
                <div class="progress-bar " role="progressbar"

                    style={mystyle}




                    aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">{mainCouseData.percent}%</div>
            </div>


            <h2 className="p-coursee" data-aos="fade-left" >


                {mainCouseData.title}

            </h2>




            <h2 className="p-course" >



                <div className={show ? 'showlup ' : 'hidden'} style={{ width: '80%', height: '300px' }} >

                    <div className='teacher-panel'>
                        <div className='teacher'>
                            استاد دوره
                            <br>
                            </br><p className='teacher-name'>
                                {mainCouseData.teacher}
                            </p>


                        </div>


                        <div className='teacher course-book'>

                            <img src={mainCouseData.img} className="image-teacher course-img" />


                            کتاب
                            <br>
                            </br>
                            <p className='book-name'>
                                {mainCouseData.book}
                            </p>

                        </div>

                    </div>



                    <div className='parentallitems'>
                        <p className="more-info">
                            اطلاعات دوره
                        </p><CgDanger className="danger-icon" />

                        <h className="hover-left-child-price left-one" >




                            قیمت<h className="hover-left-child-price-adad top-p">
                                {mainCouseData.price}   تومان
                            </h>
                            <        PiBookOpenTextLight className="book-one the-price" />
                        </h>


                        <h className="hover-left-child-online left-one">






                            رده سنی                        <h className="hover-left-child-price-adad online age-book">
                                {mainCouseData.age}
                            </h>

                            <IoIosMan className="book-one " />
                        </h>


                        <h className="hover-left-child-time">


                            مدت دوره
                            <h className="hover-left-child-price-adad time-book">
                                {mainCouseData.sath}
                            </h>      <FaRegClock className="book-one watch" />
                        </h>

                        <h className="hover-left-child-sath">


                            تدریس انلاین
                            <h className="hover-left-child-price-adad sath-book">
                                {mainCouseData.online}

                            </h>
                            <HiOutlineStatusOnline className="book-one " />
                        </h>
                    </div>





                </div>




                <div className={show ? 'showlup' : 'hidden'} style={{ width: '80%', height: '300px' }} >







                </div>




            </h2>





            <img src={mainCouseData.image} className="image-teacher" />



            <li className="h-course">



                <p className='course-description'>

                    توضیحات دوره
                </p>



                <br>
                </br>


                {mainCouseData.description}






            </li>





        </body>


    )
}
