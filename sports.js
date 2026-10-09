const router=require("express").Router();
const Sport=require("../models/Sport");
const {requireAuth,requireAdmin}=require("../middleware/auth");
router.get("/sports",requireAuth,async(req,res)=>{const sports=await Sport.find().populate("createdBy","name").sort({createdAt:-1});res.render("sports",{sports});});
router.get("/sports/new",requireAdmin,(req,res)=>res.render("create-sport"));
router.post("/sports",requireAdmin,async(req,res)=>{try{const name=(req.body.name||"").trim();if(!name){req.session.error="Sport name is required.";return res.redirect("/sports/new");}const escaped=name.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");if(await Sport.findOne({name:new RegExp(`^${escaped}$`,"i")})){req.session.error="That sport already exists.";return res.redirect("/sports/new");}await Sport.create({name,createdBy:req.session.user.id});req.session.success="Sport created successfully.";res.redirect("/sports");}catch(e){console.error(e);req.session.error="Unable to create sport.";res.redirect("/sports/new");}});
module.exports=router;
