
import { Link } from 'react-router-dom'

const Footer = () => {
  
 

  return (
    <div style={{marginBottom:0}}>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    <div style={{textAlign:"center"}}>
      <strong>For Further Queries Please Click on the Link Below </strong> 
      
    </div>
    
    <div  style={{textAlign:"center"}}>
       <Link to="/contactus" role="button">Contact us</Link>
    </div>
    <div style={{textAlign:"center",marginTop:10,marginBottom:0}}>
    
      <h4 style={{marginBottom:0}}> &copy; Copyright2023 By TrendyTone.com</h4>   

    </div>
      
    </div>
  )
}

export default Footer
