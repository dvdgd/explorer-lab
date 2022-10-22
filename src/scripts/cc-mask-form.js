import IMask from "imask";

const securityCode = document.querySelector("#security-code");
const securityCodePattern = {
  mask: "0000"
};
export const securityCodeMasked = IMask(securityCode, securityCodePattern);

const expirationDate = document.querySelector("#expiration-date");
const currentYear = new Date().getFullYear();
const addYears = 10;
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: IMask.MaskedRange,
      from: currentYear.toString().slice(2),
      to: (currentYear + addYears).toString().slice(2)
    }
  }
}
export const expirationDateMasked = IMask(expirationDate, expirationDatePattern);

const cardNumber = document.querySelector("#card-number");
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardType: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^(5[1-5]\d{4}|677189)\d{10}$/,
      cardType: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardType: "default"
    }
  ],
  dispatch: (appended, dynamicMasked) => {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');

    const foundMask = dynamicMasked.compiledMasks.find((mask) => {
      return number.match(mask.regex);
    });

    return foundMask;
  }
}
export const cardNumberMasked = IMask(cardNumber, cardNumberPattern);
