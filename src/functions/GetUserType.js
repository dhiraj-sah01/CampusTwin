import GetUser from "./GetUser"

function GetUserType() {
    const user = GetUser();

      // const getRole = async () => {
      //   const { data, error } = await supabase
      //     .from("profiles")
      //     .select("name")
      //     .eq("role", "technician");
    
      //   if (error) return;
    
      //   const technicians = data.map((tech) => tech.name);
      //   // console.log(technicians);
    
      //   const randomIndex = Math.floor(Math.random() * technicians.length);
      //   const selectedTechnician = technicians[randomIndex];
    
      //   console.log("Selected:", selectedTechnician);
    
      //   return selectedTechnician;
      // };


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
