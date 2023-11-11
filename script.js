const pointer = document.querySelector(".pointer");
const target = document.querySelector(".target");

// lấy vị trí
const targetRect = target.getBoundingClientRect();
const targetX = targetRect.left + targetRect.width / 2;
const targetY = targetRect.top + targetRect.height / 2;

// cho vị trí con trỏ dựa trên dữ liệu
pointer.style.left = `${targetX - 10}px`;
pointer.style.top = `${targetY - 10}px`;

target.addEventListener("click", () => {
    alert("Target clicked");})