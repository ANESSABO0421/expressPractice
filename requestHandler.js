import UserSchema from "./models/UserSchema.js";

export async function SampleFunction() {
  console.log("hello");
}

export async function SampleFunction2() {
  console.log("hello i am anees");
}

// user function

export async function userFunction(req, res) {
  const { name, email, phoneNo } = req.body;
  console.log(name, email, phoneNo);
  try {
    const checkEmail = await UserSchema.findOne({ email: email });
    // already  
    if (checkEmail) {
      res.status(409).send("already email existed");
    }
    //if not create new user
    const createUser = await UserSchema.create({ name, email, phone: phoneNo });
    // console.log(createUser);
    if (createUser) {
      // show this data on api
      res.status(201).send({ data: createUser });
    } else {
      res.status(404).send("unable ato add the user");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
}

export async function deleteFunction(req, res) {
  const { id } = req.body;
  try {
    const deleteUser = await UserSchema.deleteOne(id);
    if (deleteUser) {
      res.status(201).send({ data: deleteUser });
    } else {
      res.status(404).send("data not deleted");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
}

export async function getData(req, res) {
  try {
    const getUser = await UserSchema.find();
    if (getUser) {
      res.status(200).send(getUser);
    } else {
      res.status(404).send("failed to get user");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
}

// export async function updateUser(req,res){
//   try {
//     const updateUser=await UserSchema.updateOne({_id:new ObjectId({_id})},{$set:{

//     }})
//     if(updateUser){
//       res.status(200).send(updateUser)
//     }else{
//       res.status(404).send
//     }

//   } catch (error) {

//   }
// }
