const testimonials = [
  {
    quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. The more content you provide about you. Lorem, quos saepe suscipit, nemo dolore sapiente!”",
    name: "James Rodrigo",
    role: "Customer",
  },
  {
    quote: "“This is another customer's feedback. It helps us understand what they love about the service!”",
    name: "Anna Smith",
    role: "Customer",
  },
  {
    quote: "“Great experience! I would recommend this to everyone.”",
    name: "Michael Johnson",
    role: "Customer",
  },
];

const quoteElement = document.querySelector(".quote");
const nameElement = document.querySelector(".name");
const roleElement = document.querySelector(".role");
const navDots = document.querySelectorAll(".nav-dot");

navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // تحديث النصوص
    quoteElement.textContent = testimonials[index].quote;
    nameElement.textContent = testimonials[index].name;
    roleElement.textContent = testimonials[index].role;

    // تحديث الحالة النشطة للنقاط
    navDots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
