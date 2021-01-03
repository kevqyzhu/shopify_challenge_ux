import React, { useState } from 'react';
import { Alert, Fade} from "react-bootstrap";


const AlertBanner = (props) => {
    
    return(
        <>
      <Fade 
      in={props.nominations.length === 5 } 
      unmountOnExit={true} 
      timeout={300}	>
        <div>
        <Alert variant = 'success' >
               You have completed your nominations!</Alert>
        
        </div>
      </Fade>
    </>
    )

}

export default AlertBanner
