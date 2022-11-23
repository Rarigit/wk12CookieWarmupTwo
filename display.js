

function clearCookies(){
    Cookies.remove(`imageUrl`);
    location.href = "/index.html";
}



let src = Cookies.get(`imageUrl`);


document.body.insertAdjacentHTML(`afterbegin`, `<img src="${src}" alt="Your Pokemon">`);
document.getElementById(`backButton`).addEventListener(`click`, clearCookies);
