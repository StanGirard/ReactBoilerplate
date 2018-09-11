import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'reapop'

const Notification = (props) => {
  const { notify } = props
  const onClick = () => {
    // 3. we use `notify` to create a notification
    notify({
      title: 'Notifications status',
      message: 'default, info, success, warning, error',
      status: 'error',
      dismissible: true,
      dismissAfter: 3000
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
export default connect(null, { notify })(Notification)
