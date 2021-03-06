//controllers allow us to seperate handler logic from
//route handler logic
//exporting this method as our handler
const models=require('../models');
exports.get_landing=function(req, res, next) {
    res.render('landing', { title: 'Express' });
};
exports.submit_lead=function(req, res, next) {
  console.log("lead email:",req.body.lead_email);
  return models.Lead.create({//create is a sequelize method 
      email:req.body.lead_email
  }).then(lead=>{
      res.redirect('/leads');
  });

};
//using this handler to list the leads in the database
exports.show_leads=function(req, res, next) {
	//findAll() method is defined by sequelize 
    models.Lead.findAll().then(
    	leads=>{//leads contains the rows returned from the database and the methods to access those rows
    		res.render('landing',{title:'Express',leads:leads});//use the same landing viewfile to load the pages
    	})
};
exports.show_lead=function(req, res, next) {
    return models.Lead.findOne({
        where:{
            id:req.params.lead_id
        }
    }).then(lead=>{
        res.render('lead',{lead:lead});
    })
 
};
exports.show_edit_lead=function(req, res, next) {
    return models.Lead.findOne({
        where:{
            id:req.params.lead_id
        }
    }).then(lead=>{
        res.render('lead/edit_lead',{lead:lead});
    })
 
};
exports.edit_lead=function(req, res, next) {
    console.log(req.params.lead_id);
    req.body.lead_email
    return models.Lead.update({
        email:req.body.lead_email
    },{
        where:{
            id:req.params.lead_id
        }
    }).then(result=>{
        //redirect after succesful
        res.redirect('/leads');

       // res.render("/lead/:"+ req.params.lead_id)
    });
};
exports.delete_lead=function(req,res,next){
   return models.Lead.destroy({
      where:{
        id:req.params.lead_id
      }
   }).then(results=>{
     res.redirect('/leads'); 
   })
}
//10327