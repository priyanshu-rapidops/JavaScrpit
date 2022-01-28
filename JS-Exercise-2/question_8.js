var date = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}
let days = date('07/01/2018', '05/03/2020');
let months = Math.floor(days / 31);
let years = Math.floor(months / 12);
let absmonth = months - years * 12;
let absdate = days - (months * 31);
console.log(years + " years " + absmonth + " months " + absdate + " days");
