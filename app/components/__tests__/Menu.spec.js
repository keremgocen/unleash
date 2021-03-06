/* eslint-disable */
import _ from 'lodash';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Menu from '../Menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Menu Component', () => {
  let component;
  let routerSpy;
  let userLogoutProcess;

  beforeEach(() => {
    routerSpy = sinon.spy();
    userLogoutProcess = sinon.spy();
    const router = {
      push: routerSpy,
    };
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(<Menu router={router} userLogoutProcess={userLogoutProcess}/>,
      {
        context,
        childContextTypes
      });
  });

  it('should render without problems', () => {
    expect(component).to.exist;
  });

  it('should change the page when a menu item is clicked', () => {
    const element = component.find('Menu');
    const expectedRoute = '/heroes/unleash';
    element.node.handleMenuClick(expectedRoute);
    expect(routerSpy.getCall(0).args[0]).to.equal(expectedRoute);
  });

  it('should call the userLogoutProcess function', () => {
    const element = component.find('Menu');
    element.node.props.userLogoutProcess();
    expect(userLogoutProcess).to.have.property('callCount', 1)
  });
});
