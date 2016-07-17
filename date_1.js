function Helper() {

}

Helper.prototype.getDate__getToday = function(date) {

 	var dates = date ? new Date(date) : new Date();

 	var valueDate = (new Date(dates.getFullYear(), dates.getMonth(), dates.getDate())).valueOf();
 	return valueDate;
 	
 	

}

Helper.prototype.getDate__getMonth = function (month, lang){
	
	var monthObject = {
		ru: {
			1: 'Января',
			2: 'Февраля',
			3: 'Марта',
			4: 'Апреля',
			5: 'Мая',
			6: 'Июня',
			7: 'Июля',
			8: 'Августа',
			9: 'Сентября',
			10: 'Октября',
			11: 'Ноября',
			12: 'Декабря'
		},
		uk: {
			1: "Січня",
			2: "Лютого",
			3: "Березня",
			4: "Квітня",
			5: "Травня",
			6: "Червня",
			7: "Липня",
			8: "Серпня",
			9: "Вересня",
			10: "Жовтня",
			11: "Листопада",
			12: "Грудня"
		}
	}

	return monthObject[lang][month];
		
}



Helper.prototype.getDate = function(date, lang){
	var nowValue = this.getDate__getToday(),//число
		newsDateValue = this.getDate__getToday(date),
		newsDate = new Date(date),
		monthNews = date.split(' ');

		if (now == newsDate) {
			alert(newsDate.getDate() + " " + this.getDate__getMonth(newsDate.getMounth()+1, lang) + " " +newsDate.getFullYear());
			} else {
		 
			alert(monthNews[1].slice(0,-3));
		}
		
}












