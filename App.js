function App() {
	this.init();
}//конструктор приложение

App.prototype = Object.create(Helper.prototype);//наследование хелпер у аппа

App.prototype.init = function(){
	this.getDate("2016-06-18 11:10:00", "ru");

}//единица апп(метод) включает в себя дату статьи(добавленной)

window.addEventListener("DOMContentLoaded", function(){
	new App();
})//после загрузки всего создается экземпляр класса Апп