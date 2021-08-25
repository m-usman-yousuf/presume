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
                color: 'blue',
                textAlign: 'initial',
                fontSize: '25px',
                marginTop: '100px',


            }}
        >
            <div className="home" id="home">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h1 className="headings">Find the Perfect Employee</h1>
                        <ul className="desc" style={{ fontSize: '20px', paddingRight: '100px', marginLeft: '100px' }}>
                            <li className="point">
                                Presume is a resume and application
                                scanning tool. A system that can accurately
                                scan all candidates and their applications.
                            </li>
                            <li className="point">Other application Scanning tools
                                always seem to let qualified applicants slip
                                through the cracks because biased opinions
                                alwas cloud the judgement of the system</li>
                            <li className="point">
                                With Presume, we eliminate all biased assessments,
                                so then you can find the best employee for your business.

                            </li>
                            <li className="point">
                                We can help you find the best match for the position
                                by providing you extensive scan reports, so then you can find the employee of your
                                dreams.
                            </li>

                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <h1 className="headings">Find the Perfect Employee</h1>
                        <ul style={{ fontSize: '20px', paddingRight: '100px', marginLeft: '100px' }}>
                            <li className="point">
                                Prsume has been built to help you get noticed
                                in this competitive job market.
                            </li>
                            <li className="point">
                                Do not let Artificial Intelligence affect your job search, as studies proved that
                                computers make unfair biased judgements,during the recruitment process.
                            </li>
                            <li className="point"> Trust the algorithms Presume has tested, so then you have a fair chance of landng the jobs
                                of your dreams</li>
                            <li className="point">
                                Looking for a way to improve your application?Presume
                                can help, by letting you know the status of your application,
                                and provide you strategies to make your application stand out.

                            </li>
                        </ul>




                    </Grid>
                </Grid>

            </div>


            <div className="footer" id="about">
                <Grid container spacing={3}>
                    <Grid item xs={4}><h2 id="sub">Contact us</h2>
                    <Grid container>
                    <Grid item xs={6}> <input className="form"  type="email" name="email" placeholder="Name" ></input></Grid>
                    <Grid item xs={6}> <input className="form"  type="email" name="email" placeholder="Email" ></input></Grid>
                    </Grid>
                    <input className="form" id="Subject" type="email" name="email" placeholder="Subject" ></input><br/>
                    <input className="form" id="msg" type="email" name="email" placeholder="Message" ></input>
                    <button className="submit" type="submit">Submit</button>
                    </Grid>
                    <Grid item xs={4}><h2 id="sub">Our Address</h2>
                    <p style={{marginLeft:'80px',marginRight:'70px'}} >500 terry Francois St
                        San francisco, CA 94158<br/> info@mysite.com</p></Grid>
                    <Grid item xs={4}><h2 id="sub">Call us</h2>
                    <p style={{marginLeft:'80px',marginRight:'70px'}}>
                        Free Call: 1-800-000-000<br></br>
                        Tel:123-456-7890
                        Fax:123-456-7890

                    </p>
                    </Grid>
                </Grid>
                

            </div>








        </div>
    )
}

export default Description
