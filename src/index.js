import template from "./template.hbs";
import { products } from "./data";

const container = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");

container.innerHTML = template({ products });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );

  container.innerHTML = template({ products: filteredProducts });
});
