import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FilmData from './FilmData';


export default function MainCourse() {

    const [show, setShow] = useState(false);

    const showinfo = () => {

        setShow(current => !current);


    }
    let params = useParams()

    let a = FilmData.find(film => film.id == params.filmID)

    const mystyle = {
        width: `${a.percent}` + '%',

    };
 
    return (



        <body className="main-course-body">







            <h2 className="p-course" >{a.title}




            </h2>
            <div className="hover-parent">

                <div className="parent-image-course">
             

                    <img src={a.imge} className="image-course" style={{ width: '80%', height: '300px' }} />
               

                </div>
            </div>

            <li className="h-course">
                <p className="h-course-info">
                    جهت دریافت اطلاعات بیشتر در مورد این دوره لطفا بر روی دکمه زیر کلیک نمایید
                </p>


                <button onClick={showinfo} className="info-button" >

                    اطلاعات بیشتر


                </button>

           
                {a.price}



                {a.desc}

            </li>
        </body>


    )
}
