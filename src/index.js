import Handlebars from "handlebars";

const products = [
  { name: "product 1", price: "10$", description: "description 1" },
  { name: "product 2", price: "20$", description: "description 2" },
  { name: "product 3", price: "30$", description: "description 3" },
];

const templateSrc = `
<ul class="product-list">
  {{#each products}}
    <li class="product-item">
      <h2 class="name">{{name}}</h2>
      <p class="price">Price: {{price}}</p>
      <p class="description">{{description}}</p>
    </li>
  {{/each}}
</ul>
`;

const template = Handlebars.compile(templateSrc);

function render(filteredProducts) {
  document.getElementById("product-container").innerHTML = template({
    products: filteredProducts,
  });
}

render(products);

document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );
  render(filtered);
});
