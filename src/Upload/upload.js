import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import ghazleh from './nasim1 (2).mp4';
import Slider from "./Slider";

import { useState } from "react";

import { styled } from '@mui/material/styles';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,

} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Accordian.css';


import { useNavigate, } from 'react-router-dom';
import Footer from './Footer';

import Ticket from './components/Ticket/Ticket';
import Navside from './Navside';



import AOS from 'aos';
import 'aos/dist/aos.css';




const Accordion = styled((props: AccordionProps) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackIosNewIcon sx={{ fontSize: '2rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: 'red',

    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),

}));
function Main() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isServer = typeof window === 'undefined'


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }


      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);


    }
  }, [lastScrollY]);













  let navigate = useNavigate()
  const [expanded, setExpanded] = React.useState('false');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [mutedVideo, setMutedVideo] = useState(true);
  const [autoplayVideo, setAutoplayVideo] = useState(true);

  const scrollToTop = () => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });



  };
  const [newclasone, setNewclassone,] = useState(false);
  const [newclassthree, setNewclassthree,] = useState(false);
  const [newclasstow, setNewclasstow,] = useState(true);
  const [newclassfour, setNewclassfour] = useState(false);
  const [newstate, setNewstate,] = useState(2);

  const changeclassone = () => {



    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassone(!newclasone)


    setNewstate(0)


  }

  const changeclasstow = () => {

    setNewclassone(false)


    setNewclassthree(false)
    setNewclassfour(false)
    setNewclasstow(!newclasstow)


    setNewstate(2)
  }
  const changeclassthree = () => {

    setNewclassone(false)

    setNewclasstow(false)
    setNewclassfour(false)
    setNewclassthree(!newclassthree)
    setNewstate(1)
  }
  const changeclassfour = () => {

    setNewclassone(false)
    setNewclasstow(false)

    setNewclassthree(false)
    setNewclassfour(!newclassfour)
    setNewstate(3)


  }


  const [file, setFile] = useState();
  function hadleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  


  let a = {
    products: [
      {
        star: 4,
        title: "استاد منیژه خردمند ",

        price: "Manijeh Kheradmand", img: 'Newfolder/13.png',
        benefits: 'مدرس دوره های مکالمه ',

      },

      {
        title: "استاد  بابک نوین بخش ",


        price: "Babak Bakhshshi", img: 'Newfolder/12.png',
        benefits: 'مدرس دوره Tofel ',
      },


      {

        title: "استاد نیوشا اسکندریان ",
        price: "Niosha Eskandari", img: 'Newfolder/11.png',
        benefits: 'مدرس دوره TTC ',
      },

      {

        title: "استاد علی خانی", price: "ddd",
        benefits: 'مدرس دوره Ilets ',

        price: "Ali Khanian",
     img: 'Newfolder/11.png',
      },




    ],
    coursesprice: [700, 550, 650, 900, 750, 850],
  }


  return (<>

    <div className='body-header'>

      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      </link>




      <body class="mybody">



      <input type="file" onChange={hadleChange} />
            <img src={file} />



   








































      </body >


      
    </div >


  </>


  );
}

export default Main;
