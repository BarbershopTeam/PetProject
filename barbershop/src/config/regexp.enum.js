export const NAME = /^[а-щьюяґєіїА-ЩЬЮЯҐЄІЇa-zA-Z]+(([',. -][а-щьюяґєіїА-ЩЬЮЯҐЄІЇa-zA-Z ])?[а-щьюяґєіїА-ЩЬЮЯҐЄІЇa-zA-Z]*)*$/;
export const EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
export const PHONE_NUMBER = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
