import React from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({
    movies,
}) => {
    return(
        <section>
        {!movies 
            ? <div> Pas de données à afficher </div>
            : (
                <div class="row">
                    {
                        movies.map(({
                            title,
                            description,
                            images
                        }, index) => {
                            const key = `movie-${title}-${index}`;
                            const image = images.PosterArt;
                            return (
                                <ListElement
                                    key={key}
                                    title={title}
                                    description={description}
                                    image={image}
                                />
                            )
                        })
                    }
                </div>
            )
        }  
        </section>
    )
};

List.propTypes = {
    movies: PropTypes.array,
};

List.defaultProps = {
    movies: null,
};

export default List;