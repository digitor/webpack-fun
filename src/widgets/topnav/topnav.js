import "./topnav.css";


export default function() {
	var wg = document.querySelector('[data-wg=topnav]');
	wg.classList.remove("wgstatus-loading");
	wg.classList.add("wgstatus-loaded");
	
	return "Top Nav loaded.";
}