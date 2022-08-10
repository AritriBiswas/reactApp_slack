
import React, {useState,useRef} from 'react'
import SidebarOption from './SidebarOption';

export default function AddChannelDialogbox() {
    const [channelname, setChannelName] = useState('');
    const channelRef = useRef("")

    
    const Submit=() => {
        console.log("channel name",channelname)

    }
  return (
    <>
    <SidebarOption channelName={channelname}/>
    <h2>Add Channel</h2>
      <input value ={channelname} onChange={(e) => setChannelName(e.target.value)}  ref= {channelRef} placeholder="ENter channel name: "></input>
      <button onClick={Submit}>Add</button>
      <button onClick={Submit}>Cancel</button>
    </>
  )
}
