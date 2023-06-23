import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaFileInvoice
  
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import {GrCertificate} from "react-icons/gr";

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.png';
import cert1 from './assets/cert1.png';
import cert2 from './assets/cert2.png';
import cert3 from './assets/cert3.png';
import cert4 from './assets/cert4.png';
import cert5 from './assets/cert6.png';
import cert6 from './assets/cert7.png';
import cert7 from './assets/cert8.png.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },
  {
    id: 4,
    name: 'Certifications',
    icon: <FaFileInvoice className='nav__icon' />,
    path: '/cert',
  },

  {
    id: 5,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 6,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Akash Reddy',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Akepati',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  

  {
    id: 5,
    title: 'Address : ',
    description: '4/219-L-1, Rajampet, AP',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+919398000816',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'akashreddyakepati@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Telugu, Hindi, English',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022(May-June)',
    title: 'Full Stack Devoloper <span> Remote </span>',
    desc: 'Solar Secure Solutions',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'Bachelor Degree <span> Vellore Institute of Technology </span>',
    desc: 'Electronics and Communication Engineering',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: '12th <span> Narayana Junior College </span>',
    desc: 'MPC(Maths, Physics, Chemistry) TSBIE',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: '10th <span> Sri Chaitanya School </span>',
    desc: 'AP SSC',
  },
];

export const skills = [
  {
    id: 5,
    title: 'C++',
    percentage: '90',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '80',
  },
  {
    id: 5,
    title: 'DBMS(MySql)',
    percentage: '70',
  },

  {
    id: 6,
    title: 'DSA',
    percentage: '80',
  },
  {
    id: 8,
    title: 'ReactJS',
    percentage: '80',
  },
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },
  

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'MongodB',
    percentage: '80',
  },

  {
    id: 7,
    title: 'ReactNative',
    percentage: '50',
  },

  
  {
    id: 9,
    title: 'NodeJs,ExpressJs',
    percentage: '70',
  },
  {
    id: 10,
    title: 'Machine Learning',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work8,
    title: 'Ecommerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ecommerce-dusky-xi.vercel.app/',
      },
    ],
  },

  {
    id: 1,
    img: Work1,
    title: 'IMDB_CLONE',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://imdb-clone-three-gamma.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Expense Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN Stack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://expense-tracker-frontend-mu.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Business Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://akashreddy2003.github.io/srisaiagencies/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://wfe-rho.vercel.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: '3D Models',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        title: 'Language : ',
        desc: 'ThreeJs',
      },
      {
        title: 'Preview : ',
        desc: 'https://3-d-geometry.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Car Price Prediction',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Machine Learning Model',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python(Linear Regression)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/AkashReddy2003/CAR-PRICE-PREDICTION',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Quick Chat',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Android App',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Native',
      },
      
    ],
  },
];
export const Certifications = [
  {
    id: 1,
    img: cert7,
    title: 'Web Devolopment Bootcamp',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'Udemy',
      },
      
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'HTML, Css, Js, Jquery, Mongodb, Sql, Reactjs ..etc',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://storied-gecko-004200.netlify.app/',
      },
    ],
  },
  {
    id: 1,
    img: cert6,
    title: 'Python for Data Science and Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'Udemy',
      },
      
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'ML, Pandas, Numpy, Seaborn, Matplotlib',
      },
      
    ],
  },
  {
    id: 1,
    img: cert1,
    title: 'Programming Fundamentals',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'Duke University(Coursera)',
      },
      
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'C++',
      },
     
    ],
  },

  {
    id: 2,
    img: cert2,
    title: 'Python',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'University of Michigan(Coursera) ',
      },
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'Python',
      },
      
    ],
  },

  {
    id: 3,
    img: cert3,
    title: 'Python',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'HackkerRank',
      },
     
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'Python',
      },
    ],
  },

  {
    id: 4,
    img: cert4,
    title: 'Javascript',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'HackkerRank',
      },
     
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'JavaScript',
      },
     
    ],
  },

  {
    id: 5,
    img: cert5,
    title: 'Full Stack Devoloper Internship',
    details: [
      {
        title: 'Authorized By : ',
        desc: 'Solar Secure Solutions',
      },
     
      {
        title: 'Skills : ',
        desc: 'HTML,CSS,JS,AJAX,BOOTSTRAPetc',
      },
      
    ],
  },

  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
