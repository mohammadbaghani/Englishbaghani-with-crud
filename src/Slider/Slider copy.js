
import './Slider.css'

import React, { useState } from 'react';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Carousel from 'react-elastic-carousel'

let coursesData = [
  {
    english: "از ویژگی های به خصوص اینجا متد های به روز آموزشی و پیگیری اساتید هست هر زبان آموزی رو راضی میکنه", price: "Speaking",
    farsi: 'پرنیا طاهریان',
    city: 'تهران',

    src: 'Newfolder/bg.jpg'
  },

  {
    english: "به نظرم پردیسان برای همیشه به نیکی در ذهنم خواهد ماند. من با پردیسان عاشق زبان شدم!",
    city: 'کرج',
    farsi: 'زهرا باقری',


    src: 'Newfolder/images.jpeg'
  },




  {

    english: 'آموزشگاه پردیسان بهترین مرکز زبان در شیراز است ! با پردیسان موفق شدم مدرک تافل خودم رو بگیرم',
    city: 'شیراز',
    farsi: 'سمانه پورخادم',
    src: 'Newfolder/18.jpg'


  },
  {

    english: "بعداز شرکت در دوره تربیت مدرس پردیسان تونستم مدرک ttc خودم رو بگیرم.واقعا درجه یک هستن", price: "Speaking",
    city: 'همدان',
    farsi: "صدف  شیرازیان",

    src: 'Newfolder/b3.jpg'
  },
  {

    english: 'آموزشگاه پردیسان بهترین مرکز زبان در شیراز است ! با پردیسان موفق شدم مدرک تافل خودم رو بگیرم',
    city: 'جزیره کیش',
    farsi: "منصوره  کیانی",

    src: 'Newfolder/20.jpg'


  },

]



function Slider() {

  const [show, setShow] = useState(0);

  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(0);
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }

  }

  function reduceState() {
    setShow(show - 1)

    if (
      show < 0
    ) {
      setShow(0)
    }
  }

  function addsecond() {
    setSecond(second + 1)
  }

  return (

    <body className='con'>


      <Carousel onPrevEnd={(currentItem, pageIndex) =>

        reduceState()

      }

        enableAutoPlay autoPlaySpeed={2500}

        onNextEnd={(currentItem, pageIndex) =>
          decresereState()
        }

        className='carusal' itemsToScroll={1} itemsToShow={3}   >

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[0].english}
            <h className='score' >
              {coursesData[0].farsi}
            </h>


            <h className='score city' >
              {coursesData[0].city}
            </h>
            <img className='image-slider' src={coursesData[0].src}

            >
            </img >

          </h1>




        </div>

        <div className='parent-image-slider' >



          <h1 className='hhh v'>
            {coursesData[4].english}
            <h className='score' >
              {coursesData[4].farsi}
            </h>


            <h className='score city' >
              {coursesData[4].city}
            </h>

            <img className='image-slider' src={coursesData[4].src}



            >
            </img >

          </h1>


        </div>



        <div className='parent-image-slider' >
          <h1 className='hhh v'>
            {coursesData[2].english}
            <h className='score ' >
              {coursesData[2].farsi}
            </h>


            <h className='score city' >
              {coursesData[2].city}
            </h>
            <img className='image-slider' src={coursesData[2].src}



            >
            </img >
          </h1>






        </div>

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[3].english}
            <h className='score' >
              {coursesData[3].farsi}
            </h>


            <h className='score city' >
              {coursesData[3].city}
            </h>

          </h1>


          <img className='image-slider' src={coursesData[3].src}

          >
          </img >
        </div>
        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[0].english}
            <h className='score' >
              {coursesData[0].farsi}
            </h>

            <h className='score city' >
              {coursesData[0].city}
            </h>



          </h1>



          <img className='image-slider' src={coursesData[0].src}

          >
          </img >
        </div>
        <div className='parent-image-slider' >



          <h1 className='hhh v'>
            {coursesData[1].english}
            <h className='score' >
              {coursesData[1].farsi}
            </h>


            <h className='score city' >
              {coursesData[1].city}
            </h>

            <img className='image-slider' src={coursesData[1].src}



            >
            </img >
          </h1>



        </div>


        <div className='parent-image-slider' >
          <h1 className='hhh v'>
            {coursesData[2].english}
            <h className='score' >
              {coursesData[2].farsi}
            </h>


            <h className='score city' >
              {coursesData[2].city}
            </h>
            <img className='image-slider' src={coursesData[2].src}



            >
            </img >
          </h1>






        </div>

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[3].english}
            <h className='score' >
              {coursesData[3].farsi}
            </h>


            <h className='score city' >
              {coursesData[3].city}
            </h>
            <img className='image-slider' src={coursesData[3].src}

            >
            </img >
          </h1>



        </div>









      </Carousel>

    </body>

  );
}


export default Slider;