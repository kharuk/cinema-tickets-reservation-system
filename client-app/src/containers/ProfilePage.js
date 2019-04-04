import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { links } from '../config/links';
import Header from '../components/Authentication/Header';
import ProfilePageNavBar from '../components/ProfilePage/ProfilePageNavBar';
import '../components/ProfilePage/profilePage.scss'
import AccountSettings from '../components/ProfilePage/AccountSettings';
import ProfilePageContent from '../components/ProfilePage/ProfilePageContent';
import OrderTable from '../components/ProfilePage/OrdersTable';
import { connect } from "react-redux";

import {
  fetchAllOrders
} from '../store/actions/orderAction';

class ProfilePage extends Component {

  componentDidMount() {
    this.props.fetchAllOrders();
  }

  render() {
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Profile page"/>
          <div className="row profile-page__container">
            <ProfilePageNavBar/>
            <ProfilePageContent>
              <Switch>
                <Route exact path={ links.ORDERS_PAGE } render={(props) => <OrderTable {...props} orders={this.props.currentOrders}/>} /> 
                <Route exact path={ links.PREVIOUS_ORDERS_PAGE } render={(props) => <OrderTable {...props} orders={this.props.previousOrders}/>} />
                <Route exact path={ links.PROFILE_PAGE } component={ AccountSettings }/> 
              </Switch>
            </ProfilePageContent>
          </div>
        </div>

      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orderList, // filter
    currentOrders: state.order.currentOrders,
    previousOrders: state.order.previousOrders
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: () => dispatch(fetchAllOrders())
})

export default  connect(mapStateToProps, mapDispatchToProps)(ProfilePage);