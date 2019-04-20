var express = require('express');
var router = express.Router();
let landing=require('../controllers/landing');
/* GET home page. */
//for the http-get method this is what we will do the way we will handle such request on the route


//Creation routes
router.get('/',landing.get_landing );
router.post('/',landing.submit_lead);
//we passing the index handler from controllers  to handle this route
//defined a route that will handle the '/' route by calling a callback function that will do the stuff in its body
//it will respond to the matched route only

//listing the leads
router.get('/leads',landing.show_leads);
//route to list the details of each lead]
router.get('/lead/:lead_id',landing.show_lead);//handle all the individual leads whatever passed in the url will parsed as request parameter
//route of editing leads
router.get('/lead/:lead_id/edit',landing.show_edit_lead);//shows a form to edit the lead
router.post('/lead/:lead_id/edit',landing.edit_lead);//does the editing of data in the database
router.post('/lead/:lead_id/delete',landing.delete_lead);
module.exports = router;
//we pass out the module for other files to use it