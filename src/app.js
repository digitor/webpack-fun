"use strict"

import SiteHeader from "siteheader/siteheader";

console.log("App loaded. ", SiteHeader() );

/*require(["siteheader/siteheader"], function(SiteHeader) {

	console.log("App loaded. ", SiteHeader.default() );

});
*/

require(["heroheader/heroheader"], function(HeroHeader) {

	console.log(HeroHeader.default());
});