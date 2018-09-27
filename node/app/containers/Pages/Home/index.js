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

import messages from './messages';

import styled from 'components/styled';
import TodoList from 'components/List';
import ListHeader from 'components/ListHeader';
import ListSidebar from 'components/ListSidebar';

import { toggleChecklist } from './actions';
import { itemKeySelector } from './selectors';
import { homePageReducer } from './reducer';

//Photo by <a href="https://unsplash.com/photos/V3nogrYsKiQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Casey Horner </a> on https://unsplash.com/search/photos/winning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Unsplash

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
  //TODO - Add resize listener
}));

const ToolbarDiv = styled('div')(theme => ({
  ...theme.mixins.toolbar,
}));

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  render() {
    console.log(this.props.itemKey);
    return (
      <RootDiv>
        <ListHeader message={messages.header} />
        <ListSidebar items={3} />
        <Content>
          <ToolbarDiv />
          <TodoList
            onToggle={this.props.onChecklistToggle}
            editKey={this.props.itemKey}
            items={3}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          />
        </Content>
      </RootDiv>
    );
  }
}

Home.propTypes = {
  onChecklistToggle: PropTypes.func,
  itemKey: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    itemKey: itemKeySelector(state)
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    onChecklistToggle: itemKey => dispatch(toggleChecklist(itemKey)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'HomePage', reducer: homePageReducer });

export default compose(
  withReducer,
  withConnect,
)(Home);