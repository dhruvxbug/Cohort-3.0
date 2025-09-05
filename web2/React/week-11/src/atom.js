import {atom, selector} from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
       key: "networkAtomSe3lector",
       get: async ()=>{
        const res = await axios.get("link")
        return res.data
       }
    })
})

export const totatlNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(notifications);
        return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging;
    }
})


//app.jsx 
import { useEffect, useState } from "react"
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil"
import { notifications, totatlNotificationSelector } from "./atom"
import axios from 'axios'

export default function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount ,setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totatlNotificationSelector);

  return(
   <div>
       <button> Home </button>

        <button> My Network {networkCount.network >= 100 ? "99+" : networkCount.network} </button>
        <button> Jobs  {networkCount.jobs} </button>
        <button> Messaging {networkCount.messaging} </button>
        <button> Notification {networkCount.notifications} </button>

        <button> Me ({totalNotificationCount}) </button>
   </div>
  )
}