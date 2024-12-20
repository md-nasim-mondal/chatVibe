
import Navbar from "@/components/meetComponents/Navbar"
import MessageUserList from "@/components/messageComponents/MessageUserList"
import { ReactNode } from "react"


function layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white">
     <Navbar />

      <div  className="flex gap-4">
          <div className="mt-12">
            <MessageUserList position="left-0" place="block"/> 
         
          </div>
          <div className="md:p-5 flex-1 mt-14">
            {children}
          </div>
      </div>
    </div>
  )
}

export default layout