
function App() {
	this.init();
}

App.prototype = Object.create(Helper.prototype);

App.prototype.init = function(){
	this.getDate("2016-06-18 11:10:00", "ru");

}

window.addEventListener("DOMContentLoaded", function(){
	new App();
})