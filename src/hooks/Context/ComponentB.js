import React, { useContext } from 'react'
import {ChannelContext, UserContext} from '../../components/App'

function ComponentB() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        {user} and Channel {channel}
    </div>
  )
}

export default ComponentB