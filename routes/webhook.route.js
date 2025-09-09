




// webhook from Clerk

import express from "express";
import { clerkWebHook } from "../controllers/webhook.controller.js";// .js is manadatory
import bodyParser from "body-parser";

const router = express.Router();


// to controllers => webhook.controller.js
// https://docs.svix.com/receiving/verifying-payloads/how
router.post("/clerk",
    bodyParser.raw({ type: "application/json" }),// from svix, body-parser, 
    clerkWebHook
  );
  

export default router;