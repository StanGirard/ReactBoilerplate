import React from 'react'
import { connect } from 'react-redux'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const sendNotification = (title, message, type) => {
    console.log("------------------")
    console.log("HELLLLLOOOOOo")
    return store.addNotification({
      title: title,
      message: message,
      type: type,                         // 'default', 'success', 'info', 'warning'
      container: 'bottom-left',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000 
      }
    })
  }

