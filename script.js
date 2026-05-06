document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const location =
      document.getElementById("location").value;

    const issue =
      document.getElementById("issue").value;

    const message =
`MASCOM TYRES QUOTE REQUEST

Name: ${name}

Location: ${location}

Issue:
${issue}`;

    const whatsappURL =
      `https://wa.me/27787176515?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});