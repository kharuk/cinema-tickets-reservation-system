import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { links } from '../config/links';
import Header from '../components/Authentication/Header';
import ProfilePageNavBar from '../components/ProfilePage/ProfilePageNavBar';
import '../components/ProfilePage/profilePage.scss';
import AccountSettings from '../components/ProfilePage/AccountSettings';
import ProfilePageContent from '../components/ProfilePage/ProfilePageContent';
import OrderTable from '../components/ProfilePage/OrdersTable';
import { connect } from 'react-redux';
import { getOrdersFiltredByDate } from '../store/selectors';
import { fetchAllOrders } from '../store/actions/orderAction';
import Loader from 'react-loader-spinner';

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchAllOrders().then(() => {
        this.setState({
          isLoading: true,
        });
      });

  }

  state = {
    isLoading: false,
  };

  render() {
    const { ordersFiltredByDate, userInfo } = this.props;
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Profile page" />
          {!this.state.isLoading ? (
            (
<div className="loadingBlock">
                <Loader 
                  type="Puff"
                  color="#ffc107c9"
                  height="100"	
                  width="100"
                  className="loader"
                />   
              </div>
) 
              :

            <div className="row profile-page__container">
              <ProfilePageNavBar userInfo={userInfo} />
              <ProfilePageContent>
                <Switch>
                  <Route
                    exact
                    path={links.ORDERS_PAGE}
                    render={props => <OrderTable {...props} orders={ordersFiltredByDate.currentOrders} />}
                  />
                  <Route
                    exact
                    path={links.PREVIOUS_ORDERS_PAGE}
                    render={props => <OrderTable {...props} orders={ordersFiltredByDate.previousOrders} />}
                  />
                  <Route
                    exact
                    path={links.PROFILE_PAGE}
                    render={props => <AccountSettings {...props} userInfo={userInfo} />}
                  />
                </Switch>
              </ProfilePageContent>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
    orders: state.order.orderList,
    ordersFiltredByDate: getOrdersFiltredByDate(state.order),
    userInfo: state.user.userInfo
  })

const mapDispatchToProps = dispatch => ({
  fetchAllOrders: () => dispatch(fetchAllOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
