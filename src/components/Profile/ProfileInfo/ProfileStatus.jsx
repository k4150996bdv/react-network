import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }
  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState = ({ status: this.props.status })
    }
  }
  render() {
    return <>
      {
        this.state.editMode
          ? <div> <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status} /> </div>
          : <div> <span onDoubleClick={this.activatedEditMode}>{this.props.status || "Without status:("}</span></div>
      }
      <div>
        <button > Рассказать друзьям </button>
      </div>
    </>
  }
}
