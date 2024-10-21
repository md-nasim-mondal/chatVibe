import Nav from "@/components/landingPage/ShareComponents/Navbar/Nav"
import MessageUserList from "@/components/messageComponents/MessageUserList"
import { ReactNode } from "react"


function layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white">
       <Nav />

      <div className="flex">
          <div>
            <MessageUserList position="left-0"/>
          </div>
          <div>
            {children}
          </div>
      </div>
    </div>
  )
}

export default layout