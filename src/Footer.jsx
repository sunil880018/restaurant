import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Footer() {
    const href="#";
    return (
        <div className="footer">
            <div className="social_icon">
                <span><a href={href}><FacebookIcon/></a></span>
                <span><a href={href}><LinkedInIcon/></a></span>
                <span><a href={href}><InstagramIcon/></a></span>
                <span><a href={href}><GitHubIcon/></a></span>
            </div>
            <div className="developer">
                <span style={{color:"#fff"}}>Developed By : </span><span className="name">Sunil Kumar</span>
            </div>
        </div>
    )
}
