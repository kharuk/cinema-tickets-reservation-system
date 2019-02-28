import React, {Component , Fragment} from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        const { loggedIn } = this.props;
        return (
          <Fragment>
            <Header
                loggedIn={false}
            />
            <div className="content">
                {this.props.children}
            </div>
            <Footer/>
          </Fragment>
        )
    }
}

export default Layout;