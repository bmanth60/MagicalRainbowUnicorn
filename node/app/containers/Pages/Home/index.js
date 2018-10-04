/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import styled from 'components/styled';
import TodoList from 'components/List';
import ListHeader from 'components/ListHeader';
import ListSidebar from 'components/ListSidebar';

import {
  toggleChecklistItem,
  checkChecklistItem,
  addChecklistItem,
  updateChecklistItem,
  addChecklist,
  updateChecklist,
  deleteChecklist,
  selectChecklist,
  toggleChecklistName,
} from './actions';

import {
  selectedItemSelector,
  listSelector,
  selectedListSelector,
  itemSelector,
  listNameEditSelector,
} from './selectors';

import { homePageReducer } from './reducer';

const RootDiv = styled('div')({
  flexGrow: 1,
  zIndex: 1,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  width: '100%',
});

const Content = styled('main')(theme => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  backgroundImage: 'url("https://source.unsplash.com/V3nogrYsKiQ")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: theme.spacing.unit * 3,
  overflowY: 'auto',
  height: window.innerHeight,
  // TODO Brian - 20181003 - Add resize listener
}));

const ToolbarDiv = styled('div')(theme => ({
  ...theme.mixins.toolbar,
}));

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  render() {
    return (
      <RootDiv>
        <ListHeader
          editing={this.props.listNameEdit}
          onToggle={this.props.toggleChecklistName}
          onDelete={this.props.deleteChecklist}
          onEdit={this.props.updateChecklist}
          message={this.props.item.get('name')}
        />
        <ListSidebar
          onAdd={this.props.addChecklist}
          onSelect={this.props.selectChecklist}
          selected={this.props.selectedList}
          items={this.props.lists}
        />
        <Content>
          <ToolbarDiv />
          <TodoList
            onToggle={this.props.toggleChecklistItem}
            onEdit={this.props.updateChecklistItem}
            onAdd={this.props.addChecklistItem}
            onCheck={this.props.checkChecklistItem}
            editId={this.props.selectedItem}
            items={this.props.item.get('items')}
          />
        </Content>
      </RootDiv>
    );
  }
}

Home.propTypes = {
  selectedItem: PropTypes.number,
  selectedList: PropTypes.number,
  listNameEdit: PropTypes.bool,
  lists: PropTypes.object,
  item: PropTypes.object,
  toggleChecklistItem: PropTypes.func,
  checkChecklistItem: PropTypes.func,
  addChecklistItem: PropTypes.func,
  updateChecklistItem: PropTypes.func,
  addChecklist: PropTypes.func,
  deleteChecklist: PropTypes.func,
  updateChecklist: PropTypes.func,
  selectChecklist: PropTypes.func,
  toggleChecklistName: PropTypes.func,
};

const mapStateToProps = state => {
  const hpState = state.get('HomePage');
  return {
    selectedItem: selectedItemSelector(hpState),
    selectedList: selectedListSelector(hpState),
    lists: listSelector(hpState),
    item: itemSelector(hpState),
    listNameEdit: listNameEditSelector(hpState),
  };
};

const withConnect = connect(
  mapStateToProps,
  {
    toggleChecklistItem,
    checkChecklistItem,
    addChecklistItem,
    updateChecklistItem,
    addChecklist,
    deleteChecklist,
    selectChecklist,
    updateChecklist,
    toggleChecklistName,
  },
);

const withReducer = injectReducer({
  key: 'HomePage',
  reducer: homePageReducer,
});

export default compose(
  withReducer,
  withConnect,
)(Home);
