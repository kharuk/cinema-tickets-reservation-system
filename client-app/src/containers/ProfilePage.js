import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { links } from '../config/links';
import Header from '../components/Authentication/Header';
import ProfilePageNavBar from '../components/ProfilePage/ProfilePageNavBar';
import '../components/ProfilePage/profilePage.scss'
import AccountSettings from '../components/ProfilePage/AccountSettings';
import ProfilePageContent from '../components/ProfilePage/ProfilePageContent';
import OrderTable from '../components/ProfilePage/OrdersTable';

class ProfilePage extends Component {

  render() {
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Profile page"/>
          <div className="row profile-page__container">
            <ProfilePageNavBar path={this.props.match}/>
            <ProfilePageContent>
              <Switch>
                <Route exact path={ links.ORDERS_PAGE} component={ OrderTable }/> 
                <Route exact path={ links.PREVIOUS_ORDERS_PAGE } component={ OrderTable }/>
                <Route exact path={ links.PROFILE_PAGE } component={ AccountSettings }/> 
  
              </Switch>
            </ProfilePageContent>
          </div>
        </div>

      </section>
    )
  }
}

export default  ProfilePage;