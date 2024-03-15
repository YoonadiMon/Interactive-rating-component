let rating 

function changeCard() {
  card = document.querySelector('#container')
  card.innerHTML = `<article id="thankyouCard"><img class="spacingInCard" src="images/illustration-thank-you.svg" alt="illustration-thank-you"><div class="spacingInCard" id="userRating">You selected ${rating} out of 5</div><h1 class="spacingInCard">Thank you!</h1><p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p></article>`
}

function ratingNum(Num) {
  rating = Num
}