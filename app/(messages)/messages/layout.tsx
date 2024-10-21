
import Navbar from "@/components/meetComponents/Navbar"
import MessageUserList from "@/components/messageComponents/MessageUserList"
import { ReactNode } from "react"


function layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white">
     <Navbar />

      <div  className="flex gap-4">
          <div className="mt-14">
            <MessageUserList position="left-0" place="block"/> 
         
          </div>
          <div className="p-5 pt-10 mt-14">
            {children}
          </div>
      </div>
    </div>
  )
}

export default layout