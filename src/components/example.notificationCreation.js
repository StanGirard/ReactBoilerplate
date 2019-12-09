import React from 'react'
import { connect } from 'react-redux'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


const Notification = () => {
  
  const onClick = () => {
    
      store.addNotification({
        title: 'Dropbox',
        message: 'Files were synced',
        type: 'default',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 3000 
        }
      })
    }

  return (
    <div>
      <button onClick={onClick}>Add a notification</button>
    </div>
  )
}

// 2. we map dispatch to props `notify` async action creator
//    here we use a shortcut instead of passing a `mapDispathToProps` function
export default Notification
