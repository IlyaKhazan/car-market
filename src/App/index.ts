import { connect } from 'react-redux';

import { App as Component } from './App';

const mapStateToProps = (state) => ({
  title: state.app.title,
});

export const App = connect(mapStateToProps)(Component);
