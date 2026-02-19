// import user from "../model/userModel"

const User = require("../model/userModel")

const register = async(req, res) => {  //frontend bata backend ma data send garne

}

const login = async (req, res) => {

  //Destructing the data
  const {firstName, lastName, email, password} = req.body;
  try {
    if(!firstName || !lastName || !email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    };
    const existingEmail = await User.findOne({email: email});
    if(existingEmail) {
      return res.status(400).json({ 
        success: false,
        message: "Email already exist.." 
      });
    }
    const newUser= new User({
      firstName, lastName, email, password
    });

    await newUser.save();
    return res.status(201).json({ 
        success: true,
        message: "User registered successfully.." ,
        newUser
      }); 

  } catch (error) { 
    return res.status(400).json({ 
        success: false,
        message: `Internal server error ${error}` 
    });
  }

}

module.exports = {
  register,
  login
}

//MERN
// M= mongoDB ( No SQLdatabase)
// E= Express (Backend framework)
// R= React (Frontend framework)
// N= NodeJS (Backend runtime environment)

