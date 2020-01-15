import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListElement = ({
    title,
    description,
    image,
}) => {
    const {
        url,
        width,
        height,
    } = image;

    return (
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img 
                class="card-img-top"
                alt="Thumbnail [100%x225]"
                src={url}
                data-holder-rendered="true"
                width={width}
                height={height}
            />
            <div class="card-body">
                <p>{title}</p>
                <p class="card-text">{description}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
            </div>
        </div>
    )
};

ListElement.propTypes = {
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    image: PropTypes.shape({
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

ListElement.defaultProps = {
};

export default ListElement;