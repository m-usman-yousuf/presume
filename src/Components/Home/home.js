import React from 'react'
import Description from './description'

const Content = () => {
    return (
        <div>
            <div style={
            {
            borderStyle:'solid',
            borderWidth:'medium',
            borderColor:'green',
            marginTop:'100px',
            marginLeft: '100px',
            marginRight: '100px'
            
            }

            }>
                
                <h1 style={{color:'white',marginTop:'40px',fontSize:'100px'}}>PRESUME
                    
                    </h1>
                
                <div 
                style={
                {
                borderBottomStyle:'solid',
                borderBottomColor:'green',
                justifyContent:'center',
                alignItems:'center',
                display: 'flex',
                marginLeft:'100px',
                marginRight:'100px',
                marginTop:'50px',
                paddingTop:'10px'

                
               
    
                }
                }
                >
                </div>
                
                    <h2 style={{color:'blue',
                    backgroundColor:'white',
                    marginBottom:'50px',
                    marginTop:'50px',
                    marginLeft:'100px',
                    marginRight:'100px',
                    paddingRight:'20px',
                    paddingLeft:'20px',
                    paddingTop:'10px',
                    paddingBottom:'10px',
                    display: 'inline-block',
                    fontWeight:'normal',
                    fontSize:'20px'
                    

                    }}>CREATE AN ACCOUNT WITH PRESUME</h2>
                
            </div>
            <Description/>
    </div>

       
    )
}

export default Content;
