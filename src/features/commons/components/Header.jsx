import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({
    title,
    subtitle
}) => {
    return(
        <section>
            <div class="header">
                <a href="#default" class="title">{title}</a>
                <div class="header-right">
                    <a class="login" href="loginPath">login</a>
                    <button type="button" id="startTrial" class="btn btn-dark" href="startTrial">startTrial</button>
                </div>
            </div>
            <div class="subheader">
                <span href="#default" class="subtitle">{subtitle}</span>
            </div>
        </section>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    startTrial: PropTypes.func.isRequired,
};

Header.defaultProps = {
};

export default Header;