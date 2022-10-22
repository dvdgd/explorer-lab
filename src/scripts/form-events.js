import { securityCodeMasked, expirationDateMasked, cardNumberMasked } from './cc-mask-form.js';

const cardHolder = document.querySelector("#card-holder");
cardHolder.addEventListener("input", () => {
  updateCardHolder(cardHolder.value);
});

function updateCardHolder(cardHolder) {
  const ccHolder = document.querySelector(".cc-holder .value");
  ccHolder.innerText = cardHolder.length === 0 ? "FULANO DA SILVA" : cardHolder;
}

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value);
});

function updateSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value");
  ccSecurity.innerText = code.length === 0 ? "123" : code;
}

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value);
})

function updateExpirationDate(date) {
  const ccExpiration = document.querySelector(".cc-extra .value");
  ccExpiration.innerText = date.length === 0 ? "02/32" : date;
}

cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardType;
  setCardType(cardType);
  updateCardNumber(cardNumberMasked.value);
});

function updateCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number");
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number;
}

function setCardType(type) {
  const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
  const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
  const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

  const colors = {
    "visa": ["#436D99", "#2D57F2"],
    "mastercard": ["#df6f29", "#c69347"],
    "default": ["black", "gray"],
  };

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}
