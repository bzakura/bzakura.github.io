const caption = document.querySelector(".accordian-caption");

const accordian = document.querySelectorAll(".accordian");

const plus = document.querySelector(".plus");

accordian.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");

    if (acc.classList.contains("active")) {
      acc.classList.toggle("plus-block");
      acc.classList.toggle("minus-block");
    } else {
      acc.classList.remove("plus-block");
      acc.classList.toggle("minus-block");
    }
  });
});
