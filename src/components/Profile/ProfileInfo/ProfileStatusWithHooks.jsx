import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  const activatedEditMode = () => {
    setEditMode( true)
  }
  const deactivatedEditMode = () => {
    setEditMode( false );
    props.updateStatus(status)
  }
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value) 
    }

  return <>
    {
      !editMode
      ? <div> <span onDoubleClick={activatedEditMode}>{props.status || "Without status:("}</span></div>
      :<> <div> <input  autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivatedEditMode}  /> </div>
      <div>
      <button > Рассказать друзьям </button>
    </div>
    </>
      }
    
  </>
}
export default ProfileStatus;


  // const onStatusChange = (event) => {
  //   setEditMode({
  //     status: event.currentTarget.value
  //   })
  // }
  // componentDidUpdate (prevProps, prevState) {
  //   if (prevProps.status !== this.props.status){
  //     this.setState =( {status: this.props.status} )
  //   }

  // }
  // {
  //   !editMode
  //     ? <div> <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode} value={state.status} /> </div>
  //     : <div> <span onDoubleClick={activatedEditMode}>{props.status || "Without status:("}</span></div>
  // }