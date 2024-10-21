// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from "react";
import "./portifolio.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Portfolio() {
    const [showContact, setShowContact] = useState(true);
    const toggleContactDetails = () => {
        setShowContact((prevShowContact) => {
            console.log("Toggling contact details:", !prevShowContact); 
            return !prevShowContact;
        });
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowContact(false); 
            } else {
                setShowContact(true); 
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="main">
            <div className="left"></div>
            <div className="sidebar">
                <div className="intro">
                    <img src="Discord_TA_pfp.jpg" alt="Profile" className="image" />
                    <div className="role">
                        <h1 className="name">Krishna Sri Tarun</h1>
                        <div className="roles">
                            <p>Web Full Stack Developer</p>
                        </div>
                        <button className="details-button" onClick={toggleContactDetails}>
                            {showContact ? "Hide Contact" : "Show Contact"}
                        </button>
                        <button className="details-icon" onClick={toggleContactDetails} >
                            {showContact ? <VisibilityOff /> : <Visibility />}
                        </button>
                    </div>
                </div>
                <hr className="border" />
                {showContact && (
                    <div className="details">
                        <div className="detail-res">
                            <div className="content">
                                <div className="icon">
                                    <EmailOutlinedIcon  />
                                </div>
                                <div>
                                    <p className="input">Email</p>
                                    <a className="value" style={{ textDecoration: 'none'}}>krishnasritarun95@gmail.com</a>
                                </div>
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <PhoneInTalkIcon />
                                </div>
                                <div>
                                    <p className="input">Phone</p>
                                    <p className="value">+91 6281688435</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-res">
                            <div className="content">
                                <div className="icon">
                                    <CalendarMonthRoundedIcon />
                                </div>
                                <div>
                                    <p className="input">Birthday</p>
                                    <p className="value">22 Agust, 2003</p>
                                </div>
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <LocationOnOutlinedIcon />
                                </div>
                                <div>
                                    <p className="input">Location</p>
                                    <p className="value">Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-res">
                            <div className="content-icons">
                                <a className="icon_bottom" href="https://github.com/KrishnaSriTarun" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 30 }}/></a>
                                <a className="icon_bottom" href="https://www.linkedin.com/in/krishna-sri-tarun" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 30 }} /></a>
                                <a className="icon_bottom" href="https://www.instagram.com/krishna_sri_tarun_" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ fontSize: 30 }} /></a>
                                <a href="https://leetcode.com/u/KRISHNA_SRI_TARUN/" target="_blank" rel="noopener noreferrer">
                                    <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="leet_code_icon">
                                        <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="black"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#333333"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="black"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="body"></div>
            <div className="right"></div>
        </div>
    );
}

export default Portfolio;
