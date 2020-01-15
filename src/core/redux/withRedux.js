import { connect } from 'react-redux';

const withRedux = (mapStateToProps, mapDispatchToProps, WrappedComponent) => (
    connect (
        mapStateToProps,
        mapDispatchToProps
    )(WrappedComponent)
);

export default withRedux;