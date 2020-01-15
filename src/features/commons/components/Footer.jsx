import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({
}) => {
    return(
        <section>
            <div class="footer">
                <a> Home</a> | 
                <a> Terms of conditon</a> | 
                <a> Privacy Policy</a> | 
                <a> Collection Statement</a> | 
                <a> Help</a> | 
                <a> Manage Account</a>
                <div class="copyright">Copyright @ 2016 Demo Streaming. All Rights Reserved</div>
                <div class="media">
                    <div class="social">
                        <img 
                            src="../../../../assets/social/facebook-white.svg" 
                            alt="facebook"
                            height="87px"
                            width="100px" />
                        <img 
                            src="../../../../assets/social/instagram-white.svg" 
                            alt="instagram"
                            height="87px"
                            width="100px" />

                        <img 
                            src="../../../../assets/social/twitter-white.svg" 
                            alt="twitter"
                            height="87px"
                            width="100px" />
                    </div>
                    <div class="store">
                        <img 
                            src="../../../../assets/store/app-store.svg" 
                            alt="appstore"
                            height="87px"
                            width="100px" />
                        <img 
                            src="../../../../assets/store/play-store.svg" 
                            alt="playstore"
                            height="87px"
                            width="100px" />

                        <img 
                            src="../../../../assets/store/windows-store.svg" 
                            alt="windowsstore"
                            height="87px"
                            width="100px" />
                    </div>
                </div>
            </div>
        </section>
    )
};

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;