export const handleSigninButtonClick = () => {
  const formSignin = document.querySelector("#signin");
  const formSignup = document.querySelector("#signup");
  const btnColor = document.querySelector(".btnColor");

  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px";
};

export const handleSignupButtonClick = () => {
  const formSignin = document.querySelector("#signin");
  const formSignup = document.querySelector("#signup");
  const btnColor = document.querySelector(".btnColor");

  formSignin.style.left = "-450px";
  formSignup.style.left = "25px";
  btnColor.style.left = "110px";
};
