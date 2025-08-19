function filterProducts() {
  const category = document.getElementById("category").value;
  document.querySelectorAll(".product").forEach(product => {
    product.style.display =
      category === "All" || product.dataset.category === category
        ? "block"
        : "none";
  });
}
