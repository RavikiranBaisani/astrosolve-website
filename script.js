const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const astrologerForm = document.querySelector("#astrologer-form");
const formStatus = document.querySelector("#form-status");
const googleFormFrame = document.querySelector('iframe[name="google-form-submit-frame"]');

if (astrologerForm && formStatus && googleFormFrame) {
  let submittedToGoogle = false;
  const submitButton = astrologerForm.querySelector('button[type="submit"]');

  astrologerForm.addEventListener("submit", (event) => {
    const formAction = astrologerForm.getAttribute("action") || "";
    const hasPlaceholderAction = formAction.includes("FORM_ID");
    const hasPlaceholderEntries = Array.from(astrologerForm.elements).some((element) => {
      return element.name && element.name.startsWith("entry.000000000");
    });

    if (hasPlaceholderAction || hasPlaceholderEntries) {
      event.preventDefault();
      formStatus.textContent = "Google Forms is not configured yet.";
      return;
    }

    submittedToGoogle = true;
    formStatus.textContent = "Submitting...";

    if (submitButton) {
      submitButton.disabled = true;
    }
  });

  googleFormFrame.addEventListener("load", () => {
    if (!submittedToGoogle) {
      return;
    }

    submittedToGoogle = false;
    astrologerForm.reset();
    formStatus.textContent = "You're on the list. We'll contact you soon.";

    if (submitButton) {
      submitButton.textContent = "Request Early Access";
      submitButton.disabled = false;
    }
  });
}
