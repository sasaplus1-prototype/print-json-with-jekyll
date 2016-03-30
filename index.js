(function(){

  'use strict';

  var siteJSON = document.getElementById('json-site-data'),
      siteData = JSON.parse(siteJSON.innerHTML);

  console.log(siteData.members[0]);
  console.log(siteData.members[1]);

}());
