let title = document.querySelector(".hero h5");
let title_our_category = document.querySelector(".our_categories");

// ----------------- services section -----------------------//

let services_image = document.querySelector(".services_image img");
let back = document.querySelector(".back"); // This element does not exist in index.html, might cause error if not handled
let next = document.querySelector(".next"); // This element does not exist in index.html, might cause error if not handled

let images_slide = [
  "./assets/Images/sliiii-removebg-preview.png",
  "./assets/Images/sliid2.png",
];

let n = 0;

let slider = setInterval(() => {
  n++;

  if (n == images_slide.length) {
    n = 0;
  }
  // Check if services_image exists before setting src
  if (services_image) {
    services_image.src = images_slide[n];
  }
}, 5000);

/* -------------------- category section -------------------------- */

let samsung_category_image = document.querySelector(".samsung_category_image");
let iphone_category_image = document.querySelector(".iphone_category_image");

let iphone_category = document.querySelectorAll(".iphone");
let samsung_category = document.querySelectorAll(".samsung");
var filter_category = document.querySelector("#category");

function samsung() {
  filter_category.value = "Samsung";
  samsung_category.forEach((e) => {
    e.classList.remove("hide");
  });
  iphone_category.forEach((e) => {
    e.classList.add("hide");
  });
  scrollToProducts();
}

function iphone() {
  filter_category.value = "iPhone";
  samsung_category.forEach((e) => {
    e.classList.add("hide");
  });
  iphone_category.forEach((e) => {
    e.classList.remove("hide");
  });
  scrollToProducts();
}

samsung_category_image.addEventListener("click", samsung);
iphone_category_image.addEventListener("click", iphone);

let footer_samsung = document.querySelector(".footer_samsung");
let footer_iphone = document.querySelector(".footer_iphone");

footer_samsung.addEventListener("click", samsung);
footer_iphone.addEventListener("click", iphone);

filter_category.addEventListener("change", function () {
  if (filter_category.value == "iPhone") {
    samsung_category.forEach((e) => {
      e.classList.add("hide");
    });
    iphone_category.forEach((e) => {
      e.classList.remove("hide");
    });
  } else if (filter_category.value == "Samsung") {
    samsung_category.forEach((e) => {
      e.classList.remove("hide");
    });
    iphone_category.forEach((e) => {
      e.classList.add("hide");
    });
  } else {
    samsung_category.forEach((e) => {
      e.classList.remove("hide");
    });
    iphone_category.forEach((e) => {
      e.classList.remove("hide");
    });
  }
});

function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/*----------------- responsive ----------------------*/

let menu = document.querySelector(".menu");
let items = document.querySelector(".items");

menu.addEventListener("click", function () {
  items.classList.toggle("show");
});

// Add validation to the contact form
let contactForm = document.querySelector(".contact_us form");

contactForm.addEventListener("submit", function (event) {
  let nameInput = contactForm.querySelector('input[placeholder="Tên"]');
  let lastNameInput = contactForm.querySelector('input[placeholder="Họ"]');
  let emailInput = contactForm.querySelector('input[placeholder="E-mail"]');
  let messageInput = contactForm.querySelector(".message");

  if (
    nameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    event.preventDefault();
    alert("Vui lòng nhập đầy đủ họ, tên, email và lời nhắn của bạn!");
  }
});

// Dữ liệu chi tiết sản phẩm - Đặt ở đây để Phone_store.js có thể truy cập
// Đây là dữ liệu nguồn cho cả trang index và trang chi tiết
const allProductDetails = {
  "iPhone 11": {
    name: "iPhone 11",
    price: "9.190.000 ₫",
    image: "./assets/Images/produits/iphone11-removebg-preview.png",
    description:
      "iPhone 11 là một chiếc điện thoại tuyệt vời với camera kép mạnh mẽ, chip A13 Bionic nhanh chóng và thời lượng pin cả ngày.",
    specs: {
      screen: "Liquid Retina HD display 6.1-inch",
      processor: "A13 Bionic chip",
      camera: "Dual 12MP Ultra Wide and Wide cameras",
      battery: "Up to 17 hours video playback",
      storage: "64GB, 128GB, 256GB",
    },
  },
  "Galaxy S20": {
    name: "Galaxy S20",
    price: "4.499.000 ₫",
    image: "./assets/Images/produits/galaxys20-removebg-preview.png",
    description:
      "Samsung Galaxy S20 mang đến màn hình Dynamic AMOLED sống động, hệ thống camera linh hoạt và hiệu năng mạnh mẽ.",
    specs: {
      screen: "6.2-inch Dynamic AMOLED 2X",
      processor: "Exynos 990 (Global) / Snapdragon 865 (US)",
      camera: "12MP Wide, 64MP Telephoto, 12MP Ultra Wide",
      battery: "4000 mAh",
      storage: "128GB",
    },
  },
  "Galaxy S21": {
    name: "Galaxy S21",
    price: "4.799.000 ₫",
    image: "./assets/Images/produits/galaxys21-removebg-preview.png",
    description:
      "Galaxy S21 là sự kết hợp hoàn hảo giữa thiết kế thời thượng và hiệu năng mạnh mẽ, mang đến trải nghiệm người dùng đẳng cấp.",
    specs: {
      screen: "6.2-inch Dynamic AMOLED 2X",
      processor: "Exynos 2100 (Global) / Snapdragon 888 (US)",
      camera: "12MP Wide, 64MP Telephoto, 12MP Ultra Wide",
      battery: "4000 mAh",
      storage: "128GB, 256GB",
    },
  },
  "iPhone 12 Pro Max": {
    name: "iPhone 12 Pro Max",
    price: "13.490.000 ₫",
    image: "./assets/Images/produits/iphone12_pro_max-removebg-preview.png",
    description:
      "iPhone 12 Pro Max sở hữu màn hình Super Retina XDR lớn, hệ thống camera Pro tiên tiến và chip A14 Bionic.",
    specs: {
      screen: "Super Retina XDR 6.7-inch",
      processor: "A14 Bionic chip",
      camera: "12MP Ultra Wide, Wide, and Telephoto",
      battery: "Up to 20 hours video playback",
      storage: "128GB, 256GB, 512GB",
    },
  },
  "iPhone 13": {
    name: "iPhone 13",
    price: "11.590.000 ₫",
    image: "./assets/Images/produits/iphone13-removebg-preview.png",
    description:
      "iPhone 13 với chip A15 Bionic mạnh mẽ, hệ thống camera kép tiên tiến và thời lượng pin được cải thiện đáng kể.",
    specs: {
      screen: "Super Retina XDR 6.1-inch",
      processor: "A15 Bionic chip",
      camera: "Dual 12MP Wide and Ultra Wide cameras",
      battery: "Up to 19 hours video playback",
      storage: "128GB, 256GB, 512GB",
    },
  },
  "iPhone 14": {
    name: "iPhone 14",
    price: "12.750.000 ₫",
    image: "./assets/Images/produits/iphone14-removebg-preview.png",
    description:
      "iPhone 14 mang đến khả năng phát hiện va chạm, camera cải tiến và thời lượng pin vượt trội.",
    specs: {
      screen: "Super Retina XDR 6.1-inch",
      processor: "A15 Bionic chip (5-core GPU)",
      camera: "Dual 12MP Main and Ultra Wide cameras",
      battery: "Up to 20 hours video playback",
      storage: "128GB, 256GB, 512GB",
    },
  },
  "iPhone 15 Pro Max": {
    name: "iPhone 15 Pro Max",
    price: "25.490.000 ₫",
    image: "./assets/Images/produits/iphone15_pro_max-removebg-preview.png",
    description:
      "iPhone 15 Pro Max với khung titan, chip A17 Pro và hệ thống camera mạnh mẽ nhất từ trước đến nay.",
    specs: {
      screen: "Super Retina XDR with ProMotion 6.7-inch",
      processor: "A17 Pro chip",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: "256GB, 512GB, 1TB",
    },
  },
  "Galaxy S22": {
    name: "Galaxy S22",
    price: "5.999.000 ₫",
    image: "./assets/Images/produits/galaxys22-removebg-preview.png",
    description:
      "Galaxy S22 với thiết kế tinh tế, camera chuyên nghiệp và hiệu năng mạnh mẽ trong một kích thước nhỏ gọn.",
    specs: {
      screen: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 1 / Exynos 2200",
      camera: "50MP Wide, 10MP Telephoto, 12MP Ultra Wide",
      battery: "3700 mAh",
      storage: "128GB, 256GB",
    },
  },
  "Galaxy S23": {
    name: "Galaxy S23",
    price: "6.159.000 ₫",
    image: "./assets/Images/produits/galaxys23-removebg-preview.png",
    description:
      "Galaxy S23 nổi bật với camera cải tiến, hiệu năng mạnh mẽ và thời lượng pin tối ưu cho trải nghiệm mượt mà.",
    specs: {
      screen: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2 for Galaxy",
      camera: "50MP Wide, 10MP Telephoto, 12MP Ultra Wide",
      battery: "3900 mAh",
      storage: "128GB, 256GB",
    },
  },
  "Galaxy S23 Ultra": {
    name: "Galaxy S23 Ultra",
    price: "9.899.000 ₫",
    image: "./assets/Images/produits/galaxys23ultra-removebg-preview.png",
    description:
      "Galaxy S23 Ultra là đỉnh cao của công nghệ với camera 200MP, S Pen tích hợp và hiệu năng vượt trội.",
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2 for Galaxy",
      camera:
        "200MP Wide, 10MP Periscope Telephoto, 10MP Telephoto, 12MP Ultra Wide",
      battery: "5000 mAh",
      storage: "256GB, 512GB, 1TB",
    },
  },
  "Galaxy S21 Ultra": {
    name: "Galaxy S21 Ultra",
    price: "10.679.000 ₫",
    image: "./assets/Images/produits/galaxys21ultra-removebg-preview.png",
    description:
      "Galaxy S21 Ultra mang đến trải nghiệm di động cao cấp với màn hình Dynamic AMOLED tuyệt đẹp, camera 108MP và hỗ trợ S Pen.",
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X",
      processor: "Exynos 2100 (Global) / Snapdragon 888 (US)",
      camera:
        "108MP Wide, 10MP Periscope Telephoto, 10MP Telephoto, 12MP Ultra Wide",
      battery: "5000 mAh",
      storage: "128GB, 256GB, 512GB",
    },
  },
};

// Shopping Cart functionality
const cartButtons = document.querySelectorAll(".add_to_cart");
const cartCountSpan = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeModalButton = document.querySelector(".close-button");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalSpan = document.getElementById("cart-total");
const checkoutButton = document.querySelector(".checkout-button");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Load cart from localStorage

// Function to format currency (assuming Vietnamese Dong)
function formatCurrency(amountString) {
  // Remove dots for thousands separator, then parse as number
  const numericValue = parseFloat(
    amountString.replace(/\./g, "").replace(/₫/g, "").trim()
  );
  if (isNaN(numericValue)) return "0 ₫";
  return numericValue.toLocaleString("vi-VN") + " ₫";
}

function updateCartDisplay() {
  cartItemsContainer.innerHTML = ""; // Clear existing items

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Giỏ hàng đang trống.</p>";
    cartTotalSpan.textContent = "0 ₫";
    // Disable checkout button if cart is empty
    checkoutButton.disabled = true;
    checkoutButton.style.backgroundColor = "#ccc";
    checkoutButton.style.cursor = "not-allowed";
    return;
  }

  let totalAmount = 0;

  cartItems.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    // Ensure price is a number for calculation
    const itemPriceNumeric = parseFloat(
      item.price.replace(/\./g, "").replace(/₫/g, "").trim()
    );
    totalAmount += itemPriceNumeric * item.quantity;

    itemElement.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span><br>
                <span class="cart-item-price">${formatCurrency(
                  item.price
                )}</span>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-button decrease" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button increase" data-index="${index}">+</button>
            </div>
            <button class="remove-item-button" data-index="${index}">Xóa</button>
        `;
    cartItemsContainer.appendChild(itemElement);
  });

  cartTotalSpan.textContent = formatCurrency(totalAmount.toString());

  // Enable checkout button if cart has items
  checkoutButton.disabled = false;
  checkoutButton.style.backgroundColor = "#4CAF50";
  checkoutButton.style.cursor = "pointer";

  // Add event listeners for quantity buttons and remove button
  cartItemsContainer
    .querySelectorAll(".quantity-button.decrease")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity--;
        } else {
          cartItems.splice(index, 1); // Remove item if quantity goes to 0
        }
        updateCartCount();
        updateCartDisplay();
      });
    });

  cartItemsContainer
    .querySelectorAll(".quantity-button.increase")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        cartItems[index].quantity++;
        updateCartCount();
        updateCartDisplay();
      });
    });

  cartItemsContainer
    .querySelectorAll(".remove-item-button")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        cartItems.splice(index, 1); // Remove the item
        updateCartCount();
        updateCartDisplay();
      });
    });
}

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.dataset.name;
    const productPrice = event.target.dataset.price; // This price is from the index.html, not the detailed one

    const existingItem = cartItems.find((item) => item.name === productName);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        name: productName,
        price: productPrice,
        quantity: 1,
      });
    }
    updateCartCount();
    console.log("Sản phẩm trong giỏ hàng:", cartItems); // For debugging
  });
});

function updateCartCount() {
  let totalCount = 0;
  cartItems.forEach((item) => {
    totalCount += item.quantity;
  });
  cartCountSpan.textContent = totalCount;
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart to localStorage
}

// Open the cart modal when floating cart button is clicked
const floatingCartButton = document.querySelector(".floating-cart");
floatingCartButton.addEventListener("click", () => {
  cartModal.style.display = "block";
  updateCartDisplay(); // Populate modal with current cart items
});

// Close the cart modal when the close button is clicked
closeModalButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// Handle checkout button click
checkoutButton.addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm để thanh toán.");
    return;
  }

  // Simulate an order process (e.g., sending data to a server)
  console.log("Đặt hàng các sản phẩm:", cartItems);
  console.log("Tổng số tiền:", cartTotalSpan.textContent);

  alert("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");

  // Clear the cart
  cartItems = [];
  updateCartCount();
  updateCartDisplay(); // Update modal to show empty cart

  // Close the cart modal
  cartModal.style.display = "none";

  // Scroll back to the top of the page (simulates returning to homepage)
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Optional: Navigate to a different page if you had a dedicated "Thank You" page
  // window.location.href = "thank_you.html";
});

// JavaScript for "Xem chi tiết" to navigate to product_detail.html
const viewDetailsButtons = document.querySelectorAll(".view_details");

viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.dataset.name;

    // Mã hóa tên sản phẩm để truyền qua URL
    const encodedProductName = encodeURIComponent(productName);

    // Chuyển hướng đến trang chi tiết với tên sản phẩm trong URL
    window.location.href = `product_detail.html?productName=${encodedProductName}`;
  });
});

// Initial cart count update when page loads
updateCartCount();

// Navbar Search Functionality
const navbarSearchInput = document.getElementById("navbar-search-input");
const searchSuggestionsDiv = document.getElementById("search-suggestions");
const productBoxes = document.querySelectorAll(".products .box");

navbarSearchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  searchSuggestionsDiv.innerHTML = ""; // Clear previous suggestions

  if (searchTerm.length === 0) {
    searchSuggestionsDiv.style.display = "none";
    return;
  }

  const matchingProducts = Object.values(allProductDetails).filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (matchingProducts.length > 0) {
    matchingProducts.forEach((product) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = product.name;
      suggestionItem.addEventListener("click", () => {
        navbarSearchInput.value = product.name;
        searchSuggestionsDiv.style.display = "none";
        scrollToProduct(product.name);
      });
      searchSuggestionsDiv.appendChild(suggestionItem);
    });
    searchSuggestionsDiv.style.display = "block";
  } else {
    searchSuggestionsDiv.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (
    !navbarSearchInput.contains(event.target) &&
    !searchSuggestionsDiv.contains(event.target)
  ) {
    searchSuggestionsDiv.style.display = "none";
  }
});

function scrollToProduct(productName) {
  productBoxes.forEach((box) => box.classList.remove("hide"));

  const targetProductElement = document.querySelector(
    `.products .box[data-product-name="${productName}"]`
  );

  if (targetProductElement) {
    productBoxes.forEach((box) => {
      if (box !== targetProductElement) {
        box.classList.add("hide");
      }
    });

    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        targetProductElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  } else {
    scrollToProducts();
  }
}
