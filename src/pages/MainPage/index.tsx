import { MainPage as Component } from './MainPage';
import { connect } from 'react-redux';
import { updateEntities } from '../../entities/actionCreators';

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    document.title = `Главная - ${document.title}`;
    dispatch(updateEntities({ user: { '123': { id: '123' } } }));
  },
});

export const MainPage = connect(null, mapDispatchToProps)(Component);
