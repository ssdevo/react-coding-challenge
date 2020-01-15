import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    actionsTypes,
} from './redux';
import withRedux from '../../core/redux/withRedux';
import Header from '../commons/components/Header';
import Footer from '../commons/components/Footer';
import Wrapper from '../commons/components/Wrapper';
import List from './components/List';

class HomePage extends Component {
    static defaultProps = {
        list: null,
        requestList:  null,
        loading: false,
        error: false,
    }

    static propTypes = {
        list: PropTypes.shape({
            total: PropTypes.number,
            entries: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    description: PropTypes.string,
                    programType: PropTypes.string,
                    releaseYear: PropTypes.number,
                    images:PropTypes.shape({
                        PosterArt: PropTypes.shape({
                            url: PropTypes.string,
                            width: PropTypes.number,
                            height: PropTypes.number,
                        }),
                    }),
                })
            )
        }),
        loading: PropTypes.bool,
        error: PropTypes.bool,
        requestList: PropTypes.func,
    };

    componentDidMount() {
        this.initPage();
    }

    initPage = () => {
        const {
            requestList,
        } = this.props;

        requestList();
    }

    login = () => {
        console.log("LOGIN");
    }

    startTrial = () => {
        console.log("START TRIAL");
    }

    render(){

        const {
            error,
            loading,
            list
        } = this.props;
        
        return (
            <Fragment>
                <Header
                    title="Demo Streaming"
                    subtitle="Popular Titles"
                    login={this.login}
                    startTrial={this.startTrial}
                />
                <Wrapper>
                {error && <div> Une erreur est survenue </div> }
                {loading && <div> loading </div> }
                {(!loading && !error) && 
                    <List
                        movies={list.entries}
                    />
                }
                </Wrapper>
                <Footer
                    title="Demo Streaming"
                    subtitle="Popular Titles"
                    login={this.login}
                    startTrial={this.startTrial}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        data,
        loading,
        error,
    } = state.get('list');

    return (
        {
            list: data,
            loading,
            error,
        }
    );
};

const mapDispatchToProps = dispatch => ({
    requestList: () => dispatch({
        type: actionsTypes.LIST_REQUEST,
    }),
});

export default withRedux(
    mapStateToProps,
    mapDispatchToProps,
    HomePage,
);