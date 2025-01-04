const urls = [
    "https://www.youtube.com/shorts/bev02Pvg-6w",
    "https://www.youtube.com/shorts/OvAqnGbk21o",
    "https://www.youtube.com/shorts/v7eRagTWBGE",
    "https://www.youtube.com/shorts/kuhXAwgJyO4",
    "https://www.youtube.com/shorts/NmpwGmPdClI",
    "https://www.youtube.com/shorts/_6z-R6cn60M",
    "https://www.youtube.com/shorts/tvDmruktCT4",
    "https://www.youtube.com/shorts/LgzqNceUPP0",
    "https://www.youtube.com/shorts/Ov6fhd1iya4",
    "https://www.youtube.com/shorts/-38H9hJNN6M",
    "https://www.youtube.com/shorts/EM41yq0OUQ4",
    "https://www.youtube.com/shorts/_6z-R6cn60M",
    "https://www.youtube.com/shorts/IIhJa0xowW4",
    "https://www.youtube.com/shorts/FXM-wopzeBc",
    "https://www.youtube.com/shorts/WY1a2F8X6nE",
    "https://www.youtube.com/shorts/YYkTnkRUmhg",
    "https://www.youtube.com/shorts/5TqtbfPRjY0",
    "https://www.youtube.com/shorts/7zpUZ8Yu8X8",
    "https://www.youtube.com/shorts/Rs0hLxB3yl4",
    "https://www.youtube.com/shorts/_6O-6o7ajY0",
    "https://www.youtube.com/shorts/oS19HpV6WFY",
    "https://www.youtube.com/shorts/F-cZmEJhXdM",
    "https://www.youtube.com/shorts/0kGHyU773_M",
    "https://www.youtube.com/shorts/ko7RaA9NnJk",
    "https://www.youtube.com/shorts/T1mHI92wnKc",
    "https://www.youtube.com/shorts/gJO-iQ2bNTc",
    "https://www.youtube.com/shorts/zRfeeZn7lUE",
    "https://www.youtube.com/shorts/XXPvj0B9QeQ",
    "https://www.youtube.com/shorts/YBGa3YG-YwA",
    "https://www.youtube.com/shorts/Q7A-KehN1is",
    "https://www.youtube.com/shorts/I_mC1L4coZg",
    "https://www.youtube.com/shorts/yqTwUREBdPM",
    "https://www.youtube.com/shorts/bxlinvHTWfo",
    "https://www.youtube.com/shorts/6tXRCUd0AyE",
    "https://www.youtube.com/shorts/gx5F3rfH0EU",
    "https://www.youtube.com/shorts/cSlGRSXPyYM",
    "https://www.youtube.com/shorts/ryYIYKXHnUY",
    "https://www.youtube.com/shorts/MlwXgjRZi0o",
    "https://www.youtube.com/shorts/xU-77SywYGI",
    "https://www.youtube.com/shorts/zBezon9v2JM",
    "https://www.youtube.com/shorts/0cM71ml1ymQ",
    "https://www.youtube.com/shorts/3UPcxqjZ_Ek",
    "https://www.youtube.com/shorts/1Oi2yqCSBTE",
    "https://www.youtube.com/shorts/_6z-R6cn60M",
    "https://www.youtube.com/shorts/tvDmruktCT4",
    "https://www.youtube.com/shorts/kuhXAwgJyO4",
    "https://www.youtube.com/shorts/1IZkTr0JqhE",
    "https://www.youtube.com/shorts/OvAqnGbk21o",
    "https://www.youtube.com/shorts/OegOx2GpRzM",
    "https://www.youtube.com/shorts/wPNMQcadDUo"
];

const startDate = new Date(2025, 0, 10, 12, 0, 0, 0);

let url = urls[randomInteger(0, urls.length - 1)];

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const diff = (startDate - new Date());
        const diffTime = new Date(diff);
        document.getElementById("main__cooldown__numbers").textContent = `${diffTime.getDate()}:${diffTime.getHours()}:${diffTime.getMinutes()}:${diffTime.getSeconds()}`;
    }, 1000);
  });

function onYoutubeClick(){
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= url;
    a.click();
    url = urls[randomInteger(0, urls.length - 1)];
}

function copyToClipboard(){
    var address = document.getElementById("header__buttons__contract");
    navigator.clipboard.writeText(address.innerHTML);
}  

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
