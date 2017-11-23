import React, { Component } from 'react';

import AuxHoc from '../AuxHoc/AuxHoc';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {


  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState({showSideDrawer: !this.state.showSideDrawer})
  };

  render() {
    return (
      <AuxHoc>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </AuxHoc>
    );
  };
}

export default Layout;