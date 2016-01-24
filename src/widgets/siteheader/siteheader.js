"use strict"

import TopNav from "../topnav/topnav.js";
import "./siteheader.css";


export default function() {

	var wg = document.querySelector('[data-wg=siteheader]');
	wg.classList.remove("wgstatus-loading");
	wg.classList.add("wgstatus-loaded");

	return TopNav() + " Imported site header widget.";
}