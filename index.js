/* 用 Dog API 抓照片 */
function getDogImage() {
    let requiredUrl = `https://dog.ceo/api/breed/samoyed/images/random/1`;

    fetch(requiredUrl)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('狗狗壞掉了！等等再試一次吧⋯⋯'));
}

/*把照片放到 class="resul-img" 的div之中*/
function displayResults(responseJson) {
    console.log(responseJson);
    let arrayOfImg = responseJson.message;
    let display = getImages(arrayOfImg);
    $('.results-img').html(display);
}

/* 回傳 加上照片網址的<img> */
function getImages(arrayOfImg) {
    let valueToReturn = '';
    for (let i = 0; i < arrayOfImg.length; i++) {
        valueToReturn += `<img src="${arrayOfImg[i]}" class="results-img">`;
    }
    console.log('valueToReturn is' + valueToReturn);
    return valueToReturn;
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}


$(function () {
    console.log('狗狗努力算命中，請稍後！');
    watchForm();
});


/* 以下為占卜的部分 */


/* 把占卜結果放到陣列之中 */
/* 並指定要把占卜結果丟進 id="destiny" 的div之中 */
var destiny_text = ['大吉', '小吉', '末吉', '平', '凶', '大凶']
div = document.getElementById('destiny');


/* 將隨機的數字帶入陣列index，就可以隨機挑出一個算命結果了 */
function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function destiny() {
    div.innerHTML = destiny_text[Math.floor(random(1, 5)) - 1];
}