
import { UserView } from "./userview/userView";


export class view extends UserView {

}
const vista = new view()
const users = vista.show()
console.log(users);