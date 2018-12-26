import React from 'react'

import userStyles from './user.module.css'

export default props => (
  <div className={userStyles.user}>
    <img src={props.avatar} className={userStyles.avatar} alt="" />
    <div className={userStyles.description}>
    <h2 className={userStyles.username}>{props.username}</h2>
    <p className={userStyles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
