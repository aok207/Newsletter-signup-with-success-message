document.addEventListener("DOMContentLoaded", () => {
  // Change the correct illustration based on the screen size on resize
  window.addEventListener("resize", () => {
    changeIllustration();
  });

  // Change the correct illustration based on the screen size on load
  changeIllustration();

  const inputField = document.getElementById("email");

  // On reload clear the input field
  window.addEventListener("load", () => {
    inputField.value = "";
  });

  const signUpContainer = document.getElementById("sign-up-container");
  const successContainer = document.getElementById("success-container");

  // Form submit logic
  const form = document.getElementById("sing-up-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailElement = e.target.email;

    // Email is valid and not empty
    if (isValidEmail(emailElement.value) && emailElement.value !== "") {
      emailElement.dataset.valid = "true";
      // Get the error text element and add the invisible class
      document.getElementById("error-text").classList.add("invisible");
      // Change the paragraph in the success div
      document.getElementById(
        "success-paragraph"
      ).innerHTML = `A confirmation email has been sent to <strong>${e.target.email.value}</strong>. Please
            open it and click the button inside to confirm your subscription.`;
      // Hide the signup container and show the success container
      signUpContainer.classList.add("invisible");
      successContainer.classList.remove("invisible");
    } else {
      emailElement.dataset.valid = "false";
      document.getElementById("error-text").classList.remove("invisible");
    }
  });

  // Logic for the dismiss button click
  const dismissBtn = document.getElementById("dismiss-btn");

  dismissBtn.addEventListener("click", () => {
    successContainer.classList.add("invisible");
    signUpContainer.classList.remove("invisible");
    inputField.value = "";
  });
});

const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
};

const changeIllustration = () => {
  if (window.innerWidth <= 768) {
    document
      .getElementById("mobile-sign-up-illustration")
      .classList.remove("invisible");
  } else {
    document
      .getElementById("mobile-sign-up-illustration")
      .classList.add("invisible");
  }
};
