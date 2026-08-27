import GetUser from "./GetUser"

function GetUserType() {
    const user = GetUser();

    if(user){
    if(user.email.endsWith("@gmail.com")){ //mail check for users
      return "user";
    }
    else if(user.email.endsWith("@kiit.admin.ac.in")){//mail check for admins
      return "admin";
    }
    else if(user.email.endsWith("@kiit.technician.ac.in")){//mail check for technicians
      return "technician";
    }
  }
  return;
}

export default GetUserType;
