// =========================================================
// AcadClaude – JavaScript của trang
// 1. Menu trên điện thoại
// 2. Nút Copy cho các khối code
// 3. Tự cập nhật năm ở chân trang
// =========================================================

// ---------- 1. Menu trên điện thoại ----------
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Đóng" : "Menu";
  });

  // Bấm một mục trong menu thì đóng menu lại
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    });
  });
}

// ---------- 2. Nút Copy ----------
// Nút có data-copy="id-cua-khoi-pre" sẽ copy nội dung khối đó
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      button.textContent = "Đã copy";
    } catch {
      button.textContent = "Bôi đen để copy";
    }
    setTimeout(() => (button.textContent = "Copy"), 2000);
  });
});

// ---------- 3. Năm hiện tại ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
