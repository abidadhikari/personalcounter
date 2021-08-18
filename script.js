const col = document.querySelectorAll(".col");

const days = col[0];
const hours = col[1];
const minutes = col[2];
const seconds = col[3];

const day30 = 2.592e9; //30days in miliiseconds
const tday = new Date(2021, 7, 18, 6, 0, 0, 0); //starting date
let sdate = tday.getTime();
let edate = sdate + day30;

const changeData = () => {
  let currDate = new Date().getTime();
  console.log(currDate)
  if (!(currDate > edate)) {
    let distance = edate - currDate;
    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    if (days.innerHTML<20) {
        document.querySelector(".container").style.boxShadow="5px 5px 8px yellow";
    }
    if (days.innerHTML<10) {
        // document.body.style.backgroundColor="red";
        document.querySelector(".container").style.boxShadow="5px 5px 8px red";
    }
  }
  else{
    document.querySelector(".container").innerHTML="Event expired"
      
      document.body.style.backgroundColor="red";
  }
};
changeData();
setInterval(changeData, 1000);
