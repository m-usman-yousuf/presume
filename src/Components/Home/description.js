import { colors, Icon } from '@material-ui/core'
import { NoEncryption } from '@material-ui/icons'
import React from 'react'
import './description.css'
import Grid from '@material-ui/core/Grid'
import AllInboxTwoToneIcon from '@material-ui/icons/AllInboxTwoTone';
import { icons } from 'react-icons/lib'
const Description = () => {
    return (
        
        <div
        style={{
            color:'blue',
            textAlign:'initial',
            fontSize:'25px',    
            marginTop:'100px'        

        }}
        >
           <div className="home" id="home">
            <Grid container spacing={2}>
                <Grid item xs={7}>
            <h1 className="headings">Find the Perfect Employee</h1>
            <ul style={{fontSize:'20px',paddingRight:'100px',marginLeft:'100px'}}>
                <li className="desc">
                Presume is a Job Description creation tool, which can simply help you, as a recruiter, reduce Demographic BIAS when you draft out a Job Description.
                </li>
                <li className="desc">Research has proved that qualified applicants slip through the cracks because biased opinions filter out the applicant that may be perfect for your company.</li>
                <li className="desc">With Presume, we make sure you eliminate all biased assessments when you draft out your job description, so then you can find the best employee for your business.</li>
                <li className="desc">We can help you create the best job description by using our writing creative tool that supports clean, bias-free writing while offering suggestions that can help you make your job description stand out.</li>
            </ul>
                 </Grid>
                 <Grid item xs={5}>
                        <div
                        style={
                            {
                                backgroundColor:'black',
                                height: '100vh',
                                marginTop:'0px'
                            }
                        }
                        >
                            
                            
                            
                        
                        </div>
                 </Grid>
            </Grid>
            
            </div>


            <div className="home" id="about">
                <p id="sub">PRESUME</p>
                <h1 className="headings">About Presume</h1>
                <p style={{fontSize:'20px',paddingRight:'800px',marginLeft:'100px'}} >Presume is able to scan your job description, based on the keywords you published. We detect any words of bias and notify you, so then you are able to fairly find the best applicant. Presume has been trained to overlook irrelevant information of biases.</p>


            </div>
         
            
            
    
        
            
            
        
        </div>
    )
}

export default Description
