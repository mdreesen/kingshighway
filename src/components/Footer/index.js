import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing custom CSS
import './footer.css';
import '../../fonts/fonts.css';

export default function Footer() {

    const SectionOne = () => {
        return (
            <div>
                <p>
                    Kings Highway Deliverance Church
                    500 East Ridge Road
                    Gary, IN 46409
                </p>
            </div>
        );
    };

    const SectionTwo = () => {
        return (
            <div>
                <p>Social Media Links</p>
                <p>Follow West Angeles on Social Media</p>
            </div>
        );
    }

    return (
        <div className="footer position-static" expand="lg" variant="dark">
            <Container>
                <div className="column_container">
                    <SectionOne />
                    <SectionTwo />
                </div>
            </Container>
        </div>
    );
}