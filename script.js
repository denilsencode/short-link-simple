// Anda bisa menambahkan fungsionalitas JavaScript jika diperlukan
// Contoh: Animasi atau interaksi tambahan
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", () => {
    alert(`Anda akan diarahkan ke: ${link.href}`);
  });
});
