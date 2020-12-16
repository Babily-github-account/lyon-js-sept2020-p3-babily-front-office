import Link from 'next/link';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { FaTwitterSquare } from 'react-icons/fa';
import { RiLinkedinBoxLine } from 'react-icons/ri';


export default function Footer() {

  const containerFooter ={
    display:'flex',
    alignItems:"flex-end",

    
    backgroundImage:`url(/images/FooterWaves.svg)`,
    backgroundSize:"100%",
    backgroundRepeat:'no-repeat',
    
    height:'400px',
    width:"100%",
    color:'white',
    fontFamily:"'Montserrat Alternates', sans-serif",
  }

  const containerReseaux ={
    paddingLeft:'40px',
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    paddingBottom:'20px',
    
  }
  const titleFooter ={
    fontSize:'24px',
    margin:'0',
  }

  const followFooter ={
    fontSize:"10px",
  }

  

  
  return (
    <div style={containerFooter}>
      <div style={containerReseaux}>
        <h5 style={titleFooter}>Babily.fr</h5>
        <p style={followFooter}>Suivez-nous !</p>
        <div>
          <RiFacebookBoxLine />
          <FaTwitterSquare />
          <RiLinkedinBoxLine />
        </div>
        <div>
          {/* <Link to='/decouvrir'>
            <a>Découvrir</a>
          </Link>
          <Link to='/votrespace'>
            <a>Votre espace</a>
          </Link>
          <Link to="/temoignages">
            <a>Témoignages</a>
          </Link>
          <Link to="/contact">
            <a>Contact </a>
          </Link>
          <Link to ="/confidentialites">
            <a>Confidentialités</a>
          </Link>
          <Link to='/mentions'>
            <a>Mentions</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
