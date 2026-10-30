const form = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

if (document.getElementById("eventDate")) {
  const today = new Date();
  const normalizedDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  document.getElementById("eventDate").min = normalizedDate;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventDate = document.getElementById("eventDate").value;
  const eventLocation = document.getElementById("eventLocation").value.trim();
  const eventType = document.getElementById("eventType").value;
  const message = document.getElementById("message").value.trim();

  const whatsappMessage = `Hello Papillon Events, I would like to book an event.%0A%0A` +
    `Full Name: ${fullName}%0A` +
    `Phone Number: ${phone}%0A` +
    `Email: ${email}%0A` +
    `Event Date: ${eventDate}%0A` +
    `Event Location: ${eventLocation}%0A` +
    `Event Type: ${eventType}%0A` +
    `Message: ${message}`;

  const whatsappUrl = `https://wa.me/255679467185?text=${whatsappMessage}`;

  formStatus.textContent = "Opening WhatsApp...";
  formStatus.style.color = "#143b63";

  window.open(whatsappUrl, "_blank");
  form.reset();

  setTimeout(() => {
    formStatus.textContent = "Your inquiry has been prepared on WhatsApp. Please send it to complete the booking.";
    formStatus.style.color = "#143b63";
  }, 200);
});
