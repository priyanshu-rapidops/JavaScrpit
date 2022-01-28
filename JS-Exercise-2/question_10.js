// 10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​
// differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.

// Input = 01-07-2018 & 03/05/2020
// Output :
// 1 years 10 months 2 days
// or 22 months 2 days
// or 96 weeks 0 days
// or 672 days
// or 16,128 hours
// or 967,680 minutes

function YMWDHM() {
  let dt = "01 / 07 / 2018";
  let dl = "03 / 05 / 2020";

  let a = new Date(dt);
  let b = new Date(dl);
  let m = a.getMonth() + 1 - (b.getMonth() + 1);
  let y = a.getFullYear() - b.getFullYear();
  let d = a.getDay() - b.getDay();
  let timedi = b.getTime() - a.getTime();
  let weekd = timedi / (1000 * 3600 * 24 * 7);
  let days = timedi / (1000 * 3600 * 24);
  let hourss = timedi / (1000 * 3600);
  let minits = timedi / (1000 * 60);
  console.log(
    Math.abs(y) + " year " + Math.abs(m) + " Months " + Math.abs(d) + " Days "
  );
  console.log(
    "or " + Math.abs(y * 12 + m) + " Months " + Math.abs(d) + " Days "
  );
  console.log("or " + Math.floor(weekd) + " Weeks ");
  console.log("or " + Math.floor(days) + " Days ");
  console.log("or " + Math.floor(hourss) + " Hours");
  console.log("or " + Math.floor(minits) + " minits");
}
YMWDHM();
