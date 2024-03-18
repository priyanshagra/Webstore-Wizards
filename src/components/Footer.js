
import { Link } from 'react-router-dom'

const Footer = () => {
  
    const linkStyle = {
        color: 'white', // Initial color
        textDecoration: 'none' // Remove underline
      };
    
      const handleMouseOver = (event) => {
        event.target.style.color = 'blue'; // Change color to blue on hover
      };
    
      const handleMouseOut = (event) => {
        event.target.style.color = 'white'; // Change color back to black when mouse leaves
      };

  return (
    <div style={{marginBottom:0, backgroundColor:"black",color:"white"}}>
       <br></br>
       <br></br>
    <div style={{textAlign:"center", backgroundColor:"black"}}>
      <strong>For Further Queries Please Click on the Link Below </strong> 
      
    </div>
    <br></br>
    <div  style={{textAlign:"center" , backgroundColor:"black"}}>
    <a
      href="/contactus"
      style={linkStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      role="button"
    >
      Contact us
    </a>


    </div>
    <div style={{textAlign:"center",marginTop:10,marginBottom:0 , backgroundColor:"black"}}>
    
      <h4 style={{marginBottom:10}}> &copy; Copyright2023 By TrendyTone.com</h4>   
    </div>
    <br></br>
       <br></br>
    </div>
  )
}

export default Footer
