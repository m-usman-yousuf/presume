import React from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    Bars,
    NavBtn,
    NavBtnLink,
    Logo
} from './Navbarelements';

const Navbar = () =>{
    return (
        <>
            <Nav>
                <Logo to="/index">   
                 <h1><span style={{letterSpacing:0.02}}>Presume</span></h1>
                </Logo>
                
                <NavMenu>
                    <NavLink to="/index" activeStyle>
                        Home
                    </NavLink>
                   
                   {/* <NavLink to="/dashboard" activeStyle>
                     Dashboard
                    </NavLink>*/}
                    
                    <NavLink to="/signup" activeStyle>
                        Sign Up
                    </NavLink>
                    
                   {/* <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>*/}
                    
                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>*/}

                

            </Nav>
            

        </>
    )

}
export default Navbar;