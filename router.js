import { Router } from "express";
import * as rh from "./requestHandler.js"; //instead of all import the we use *

const router = Router();

router.route("/test").get(rh.SampleFunction); //will run the function inside the sample function
router.route("/test2").get(rh.SampleFunction2); // by giving this route it will run the the following function called samplefunction2
router.route("/newUser").post(rh.userFunction);
router.route("/deleteUser").delete(rh.deleteFunction);
router.route("/updateUser")
router.route("/getData").get(rh.getData);
export default router;
