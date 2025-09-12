
import User from "../models/user.model.js"
import { Webhook } from "svix";



// from https://docs.svix.com/receiving/verifying-payloads/how
// to routes -> webhook.route.js
export const clerkWebHook = async (req, res) => {

    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;


    console.log(WEBHOOK_SECRET)

    if (!WEBHOOK_SECRET) {
        throw new Error("Webhook secret needed!");
      }



      const payload = req.body;
      const headers = req.headers;
    
      const wh = new Webhook(WEBHOOK_SECRET);
      let evt;
      
      try {
        evt = wh.verify(payload, headers);
      } catch (err) {
        res.status(400).json({
          message: "Webhook verification failed!",
        });
      }


      // from https://clerk.com/docs/webhooks/sync-data
     // if (evt.type === 'user.created') {
        //console.log('userId:', evt.data.id)
    //  }



    console.log("cccccccccccccclllllllllllleeeeeeeeeeeeeerrrrrkkkkkkkk ====> ", evt.data)
    //console.log("cccccccccccccclllllllllllleeeeeeeeeeeeeerrrrrkkkkkkkk ====> ", evt)
    //console.log("cccccccccccccclllllllllllleeeeeeeeeeeeeerrrrrkkkkkkkk ====> ", data)
   
    if (evt.type === "user.created") {
        const newUser = new User({
          clerkUserId: evt.data.id,
          username: evt.data.username || evt.data.email_addresses[0].email_address,
          email: evt.data.email_addresses[0].email_address,
          //img: evt.data.profile_img_url,
        });
    
        await newUser.save();
      }
      return res.status(200).json({ message: "WEBHOOK RECEIVED CooooooooooooL" })



}//export const clerkWebHook 