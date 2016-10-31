var hypertrack = require('hypertrack')('sk_d4bb63b301bde328ccf64a269a269afe90f29128');
// hypertrack.{ RESOURCE_NAME }.{ METHOD_NAME }

hypertrack.drivers.create({
   "name":"Tapan Pandita",
   "phone":"+16502469293",
   "vehicle_type":"car"
}, function(err, driver) {
     // null if no error occurred
    console.log(driver); // the created driver object
});
