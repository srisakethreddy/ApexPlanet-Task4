 const products = [
      { name: "Smartphone", category: "electronics", price: 30, rating: 4.5 },
      { name: "T-Shirt", category: "fashion", price: 20, rating: 4.0 },
      { name: "Laptop", category: "electronics", price: 80, rating: 4.8 },
      { name: "Jeans", category: "fashion", price: 40, rating: 4.1 }
    ];

    function displayProducts(filteredProducts) {
      const container = document.getElementById("productContainer");
      container.innerHTML = "";
      filteredProducts.forEach(p => {
        container.innerHTML += `
          <div class="product-card">
            <h3>${p.name}</h3>
            <p><strong>Category:</strong> ${p.category}</p>
            <p><strong>Price:</strong> $${p.price}</p>
            <p><strong>Rating:</strong> ${p.rating}</p>
          </div>
        `;
      });
    }

    function filterAndSort() {
      let filtered = [...products];
      const category = document.getElementById("categoryFilter").value;
      const sort = document.getElementById("sortFilter").value;

      if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
      }

      if (sort === "price") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      displayProducts(filtered);
    }

    document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
    document.getElementById("sortFilter").addEventListener("change", filterAndSort);

    displayProducts(products);