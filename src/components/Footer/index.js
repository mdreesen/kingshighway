import React from 'react';

// Importing custom CSS
import './footer.css';
import '../../fonts/fonts.css';

// import social media images
import facebook from '../../utils/socialMedia/facebook.webp';
import youtube from '../../utils/socialMedia/youtube.webp';
import instagram from '../../utils/socialMedia/instagram.webp';

export default function Footer() {

    const mediaArr = [
        {
            icon: facebook,
            link: 'https://m.facebook.com/profile.php?id=158878407477562'
        },
        {
            icon: youtube,
            link: 'https://www.youtube.com/channel/UC9M4fsfuROt3ZI4cO9SCCjg'
        },
        {
            icon: instagram,
            link: 'https://www.instagram.com/explore/locations/106359952/kings-highway-deliverance-church-international/'
        }]

    const Social = () => {
        return mediaArr.map((each) => {
            return (
                <a href={each?.link}>
                    <img className="icon" src={each?.icon} alt=""></img>
                </a>
            );
        })
    }



    const SectionOne = () => {
        return (
            <div className="footer_section">
                <p>
                    Kings Highway Deliverance Church<br />
                    500 East Ridge Road<br />
                    Gary, IN 46409
                </p>
            </div>
        );
    };

    const SectionTwo = () => {
        return (
            <div className="footer_section">
                <div className="socialMedia">
                    <div className="social_container">
                        <Social />
                    </div>
                </div>
                <p>Follow KHDCI on Social Media</p>
            </div>
        );
    }

    const SectionThree = () => {
        return (
            <div className="footer_section">
                <p>Services Times<br />Sunday 10:00am</p>
            </div>
        );
    }

    return (
        <div className="footer position-static" expand="lg" variant="dark">
            <div className="column_container">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>
        </div>
    );
}