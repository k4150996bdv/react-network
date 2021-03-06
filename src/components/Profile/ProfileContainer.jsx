import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizeUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)

  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.userId !== this.props.match.params.userId){
      this.refreshProfile()
    }
   
  }
  render() {
    return <div>
      <Profile {...this.props} 
      isOwner={!this.props.match.params.userId}
      savePhoto={this.props.savePhoto} 
      profile={this.props.profile}
       status={this.props.status}
        updateStatus={this.props.updateStatus} />
    </div>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizeUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
