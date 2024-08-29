export const REGEX = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  LOWERCASELETTERS: /[a-z]/,
  UPPERCASELETTERS: /[A-Z]/,
  SPECIAL_CHARACTERS: /[!@#\$%\^\&*\)\(+=._-]/,
  NUMBERS: /[0-9]/,
  ZIP_CODE: /^[0-9]{0,6}$/,
  COMPANY_NAME: /^[a-zA-Z_0-9,.& ]{2,25}$/,
  POWERUP_INPUT: /(?!\s*[=+@-]|\s)+^[a-zA-Z_0-9, ]{1,30}$/,
  FOUNDING_DATE: /^[0-9]{0,4}$/,
  LETTERS: /^[a-zA-Z]/,
  LETTERS_ONLY: /^[A-Za-z]+$/,
  NUMBERS_ONLY: /^[0-9]+$/,
  QUOTE: /^[a-zA-Z" ']/,
  WEBSITE: /^[http(s?))\://]/,
  STORYTELLER_INPUTBOX: /^[\s\S]{30,2000}$/,
  INPUTBOX_300: /^[^-\s][a-zA-Z0-9\s-!@:#\$%\^\&*\)\(+ =,"'’?._-]{29,299}$/,
  PERSONANAME_INPUTBOX:
    /^[^-\s][a-zA-Z0-9\s-!@#\$%\^\&*\)\(+ =,"'’?._-]{2,299}$/,
  ACV_INPUT: /^([1-9])[0-9]{3,9}$/,
  PROBLEM_INPUT_BOX: /^[^-\s][a-zA-Z0-9\s-!@#\$%\^\&*\)\(+ =,"'’?._-]{2,199}$/,
  REMOVE_ARTICLES: /(?:(a|and|the) +)/g,
  TAGS_INPUT: /(?!\s*[=+@-]|\s)+^[a-zA-Z_0-9, ]+$/,
  IFSC_CODE: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
  MOBILE_NUMBER: /^[0-9]\d{9}$/,
  UPI_ID:/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/
};
