import React, { Suspense }  from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Header/login';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')); 
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); 
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); 

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
 }
  render() {
    if (!this.props.initialized){
    return <Preloader /> 
  }
    return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
        
        <Suspense fallback={ <Preloader /> }>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login /> } />
        </Suspense >
  
        </div>
      </div>  
    </BrowserRouter> 
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, { initializeApp }) (App) 
