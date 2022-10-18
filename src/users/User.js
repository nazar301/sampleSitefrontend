import Signup from "./Signup"
import Login from "./Login"
import Signout from "./Signout"
import MembersArea from "../clubroom/MembersArea"
import Store from "../clubroom/Store"


function User() {
    return(
        <div>
            <div>
                <Signup/>
                <Login/>
                <Signout/>
            </div>
            <div>
                hello from User
            </div>
            if signed in Membership area comes up
            
            <MembersArea/> 
            

            and store comes up when signed in

            <Store/>
        </div>
    )
}

export default User