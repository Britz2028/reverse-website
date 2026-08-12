"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "Oversized T-Shirts" | "Hoodies";
  price: number;
  description: string;
  images: string[];
};

type BagItem = {
  product: Product;
  size: string;
  quantity: number;
};

const sizes = ["S", "M", "L", "XL", "XXL"];

const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "REVRSE / 001",
    title: "BUILT\nDIFFERENT.",
    collection: "NEW COLLECTION — 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "REVRSE / 002",
    title: "MOVE\nDIFFERENT.",
    collection: "OVERSIZED SERIES — 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "REVRSE / 003",
    title: "NO\nRULES.",
    collection: "STREET UNIFORM — 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "REVRSE / 004",
    title: "STAY\nRAW.",
    collection: "CORE COLLECTION — 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "REVRSE / 005",
    title: "WEAR\nYOUR WAY.",
    collection: "ESSENTIALS — 2026",
  },
];

const products: Product[] = [
  {
    id: 1,
    name: "REVRSE Oversized Black Tee",
    category: "Oversized T-Shirts",
    price: 1499,
    description:
      "A heavyweight oversized REVRSE tee designed for everyday movement, comfort and attitude.",
    images: [
      "https://images/revrsecrocprint.png",
      "https://images/revrsecrocprint.png",
      "https://images/revrsecrocprint.png",
    ],
  },
  {
    id: 2,
    name: "REVRSE Heavyweight White Tee",
    category: "Oversized T-Shirts",
    price: 1499,
    description:
      "Clean heavyweight construction with an oversized silhouette made for a relaxed streetwear fit.",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 3,
    name: "REVRSE Washed Black Tee",
    category: "Oversized T-Shirts",
    price: 2799,
    description:
      "A washed finish with a relaxed oversized fit for a raw REVRSE look.",
    images: [
      "https://images.unsplash.com/photo-1527719327859-7a2b0e3c7f31?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 4,
    name: "REVRSE Graphic Oversized Tee",
    category: "Oversized T-Shirts",
    price: 2899,
    description:
      "A statement oversized tee created for those who refuse to follow the standard.",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 5,
    name: "REVRSE Core Oversized Tee",
    category: "Oversized T-Shirts",
    price: 2399,
    description:
      "A minimal everyday oversized essential with a clean REVRSE attitude.",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 6,
    name: "REVRSE Grey Oversized Hoodie",
    category: "Hoodies",
    price: 4499,
    description:
      "Heavyweight oversized hoodie built for comfort, layering and everyday streetwear.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 7,
    name: "REVRSE Black Heavy Hoodie",
    category: "Hoodies",
    price: 4799,
    description:
      "A heavy black hoodie with an oversized fit and strong minimal REVRSE aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=90",
    ],
  },
  {
    id: 8,
    name: "REVRSE Brown Oversized Hoodie",
    category: "Hoodies",
    price: 4799,
    description:
      "Relaxed heavyweight hoodie in a muted brown tone with an oversized silhouette.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=90",
    ],
  },
];

const money = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [wishlist, setWishlist] = useState<number[]>([]);
  const [bag, setBag] = useState<BagItem[]>([]);

  const [modal, setModal] = useState<string | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [collectionOpen, setCollectionOpen] = useState(false);
  const [collection, setCollection] = useState<
    "Oversized T-Shirts" | "Hoodies" | null
  >(null);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [notice, setNotice] = useState("");

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [checkout, setCheckout] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    payment: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === banners.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!notice) return;

    const timer = setTimeout(() => {
      setNotice("");
    }, 2200);

    return () => clearTimeout(timer);
  }, [notice]);

  const bagCount = bag.reduce((total, item) => total + item.quantity, 0);

  const bagTotal = bag.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const searchResults = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return products;

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (query.includes("hoodie") && product.category === "Hoodies") ||
        (query.includes("t shirt") &&
          product.category === "Oversized T-Shirts") ||
        (query.includes("t-shirt") &&
          product.category === "Oversized T-Shirts") ||
        (query.includes("oversized") &&
          product.category === "Oversized T-Shirts")
      );
    });
  }, [search]);

  const collectionProducts = collection
    ? products.filter((product) => product.category === collection)
    : [];

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setSelectedImage(0);
    setSelectedSize("");
    setSelectedQuantity(1);
  }

  function closeProduct() {
    setSelectedProduct(null);
  }

  function toggleWishlist(productId: number) {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }

  function addToBag(
    product: Product,
    size: string,
    quantity: number = 1
  ) {
    if (!size) {
      setValidationMessage("PLEASE SELECT A SIZE.");
      return;
    }

    setValidationMessage("");

    setBag((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...current,
        {
          product,
          size,
          quantity,
        },
      ];
    });

    setNotice("ADDED TO BAG");
  }

  function addCurrentProductToBag() {
    if (!selectedProduct) return;

    addToBag(
      selectedProduct,
      selectedSize,
      selectedQuantity
    );
  }

  function removeFromBag(productId: number, size: string) {
    setBag((current) =>
      current.filter(
        (item) =>
          !(item.product.id === productId && item.size === size)
      )
    );
  }

  function changeBagQuantity(
    productId: number,
    size: string,
    amount: number
  ) {
    setBag((current) =>
      current
        .map((item) =>
          item.product.id === productId && item.size === size
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + amount),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function scrollToProducts() {
    setMenuOpen(false);

    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function shopTheDrop() {
    setCollection(null);
    setCollectionOpen(true);
    setMenuOpen(false);
  }

  function openCollections() {
    setCollectionOpen(true);
    setCollection(null);
    setMenuOpen(false);
  }

  function openWishlist() {
    setModal("wishlist");
    setMenuOpen(false);
  }

  function openBag() {
    setModal("bag");
    setMenuOpen(false);
  }

  function openSearch() {
    setSearchOpen(true);
    setMenuOpen(false);
  }

  function closeEverything() {
    setModal(null);
    setSearchOpen(false);
    setCollectionOpen(false);
    setSelectedProduct(null);
    setCheckoutOpen(false);
  }

  function openCheckout() {
    if (bag.length === 0) {
      setNotice("YOUR BAG IS EMPTY");
      return;
    }

    setModal(null);
    setCheckoutOpen(true);
  }

  function validateCheckout() {
    if (!checkout.name.trim()) {
      setValidationMessage("PLEASE ENTER YOUR FULL NAME.");
      return false;
    }

    if (!checkout.phone.trim()) {
      setValidationMessage("PLEASE ENTER YOUR PHONE NUMBER.");
      return false;
    }

    if (!checkout.email.trim()) {
      setValidationMessage("PLEASE ENTER YOUR EMAIL.");
      return false;
    }

    if (!checkout.address.trim()) {
      setValidationMessage("PLEASE ENTER YOUR DELIVERY ADDRESS.");
      return false;
    }

    if (!checkout.city.trim()) {
      setValidationMessage("PLEASE ENTER YOUR CITY.");
      return false;
    }

    if (!checkout.state.trim()) {
      setValidationMessage("PLEASE ENTER YOUR STATE.");
      return false;
    }

    if (!checkout.pin.trim()) {
      setValidationMessage("PLEASE ENTER YOUR PIN CODE.");
      return false;
    }

    if (!checkout.payment) {
      setValidationMessage("PLEASE SELECT A PAYMENT METHOD.");
      return false;
    }

    setValidationMessage("");
    return true;
  }

  function proceedToPayment() {
    if (!validateCheckout()) return;

    /*
      PAYMENT INTEGRATION WILL BE CONNECTED LATER.

      UPI:
      ritz3690@axl

      COD:
      ₹50 advance confirmation amount.

      For now this shows the payment-ready confirmation screen.
    */

    setOrderConfirmed(true);
    setCheckoutOpen(false);
  }

  function continueShopping() {
    setOrderConfirmed(false);
    setModal(null);
    setSelectedProduct(null);

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <main className="site">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero">
        <div className="slides">
          {banners.map((banner, index) => (
            <div
              key={banner.image}
              className={`slide ${
                index === activeSlide ? "active" : ""
              }`}
            >
              <img
                src={banner.image}
                alt=""
                draggable={false}
              />

              <div className="dark-overlay" />
            </div>
          ))}
        </div>

        {/* =======================================================
            NAVIGATION
        ======================================================= */}

        <nav className="navbar">
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="desktop-nav">
            <button onClick={scrollToProducts}>SHOP</button>

            <button onClick={openCollections}>
              COLLECTIONS
            </button>

            <button onClick={() => setModal("about")}>
              ABOUT
            </button>
          </div>

          <button
            className="logo-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="REVRSE Home"
          >
            <img
              src="/Images/pngrevrse.png"
              className="logo"
              alt="REVRSE"
            />
          </button>

          <div className="right-nav">
            <button
              className="nav-action"
              onClick={openSearch}
            >
              <span className="search-icon">⌕</span>

              <span className="desktop-label">
                SEARCH
              </span>
            </button>

            <button
              className="nav-action wishlist"
              onClick={openWishlist}
            >
              <span className="desktop-label">
                WISHLIST
              </span>

              <span className="heart-icon">
                {wishlist.length > 0 ? "♥" : "♡"}
              </span>
            </button>

            <span className="divider" />

            <button
              className="nav-action"
              onClick={openBag}
            >
              <span className="bag-icon">♧</span>

              <span className="desktop-label">
                BAG ({bagCount})
              </span>
            </button>
          </div>
        </nav>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}

        {menuOpen && (
          <div className="mobile-panel">
            <button onClick={scrollToProducts}>
              SHOP
            </button>

            <button onClick={openCollections}>
              COLLECTIONS
            </button>

            <button
              onClick={() => {
                setModal("about");
                setMenuOpen(false);
              }}
            >
              ABOUT
            </button>

            <button
              onClick={() => {
                setModal("story");
                setMenuOpen(false);
              }}
            >
              OUR STORY
            </button>

            <button onClick={openSearch}>
              SEARCH
            </button>

            <button onClick={openWishlist}>
              WISHLIST
            </button>

            <button onClick={openBag}>
              BAG ({bagCount})
            </button>

            <button
              onClick={() => {
                setModal("faq");
                setMenuOpen(false);
              }}
            >
              FAQ
            </button>

            <button
              onClick={() => {
                setModal("contact");
                setMenuOpen(false);
              }}
            >
              CONTACT US
            </button>

            <button
              onClick={() => {
                setModal("size");
                setMenuOpen(false);
              }}
            >
              SIZE GUIDE
            </button>

            <button
              onClick={() => {
                setModal("track");
                setMenuOpen(false);
              }}
            >
              TRACK ORDER
            </button>

            <button
              onClick={() => {
                setModal("shipping");
                setMenuOpen(false);
              }}
            >
              SHIPPING POLICY
            </button>

            <button
              onClick={() => {
                setModal("return");
                setMenuOpen(false);
              }}
            >
              RETURN & REFUND
            </button>

            <button
              onClick={() => {
                setModal("terms");
                setMenuOpen(false);
              }}
            >
              TERMS & CONDITIONS
            </button>

            <button
              onClick={() => {
                setModal("privacy");
                setMenuOpen(false);
              }}
            >
              PRIVACY
            </button>
          </div>
        )}

        {/* =======================================================
            HERO CONTENT
        ======================================================= */}

        <div className="hero-content">
          <p className="eyebrow">
            {banners[activeSlide].eyebrow}
          </p>

          <h1>
            {banners[activeSlide].title
              .split("\n")
              .map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
          </h1>

          <div className="hero-bottom">
            <button
              className="shop-button"
              onClick={shopTheDrop}
            >
              SHOP THE DROP
              <strong>→</strong>
            </button>

            <span className="collection-text">
              {banners[activeSlide].collection}
            </span>
          </div>
        </div>

        {/* =======================================================
            BANNER INDICATORS
        ======================================================= */}

        <div className="indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                activeSlide === index
                  ? "active-indicator"
                  : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Banner ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}

      <section
        id="products"
        className="products-section"
      >
        <div className="section-heading">
          <div>
            <p>REVRSE / NEW DROP</p>
            <h2>Latest pieces</h2>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >
              <div
                className="product-image-wrap"
                onClick={() => openProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="product-image"
                />

                <button
                  className={`save-product ${
                    wishlist.includes(product.id)
                      ? "saved"
                      : ""
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  aria-label="Wishlist"
                >
                  {wishlist.includes(product.id)
                    ? "♥"
                    : "♡"}
                </button>

                <button
                  className="quick-add"
                  onClick={(event) => {
                    event.stopPropagation();
                    openProduct(product);
                  }}
                  aria-label="Add product"
                >
                  +
                </button>
              </div>

              <div className="product-info">
                <div
                  className="product-text-click"
                  onClick={() => openProduct(product)}
                >
                  <h3>{product.name}</h3>
                  <p>{money(product.price)}</p>
                </div>

                <button
                  className="add-cart"
                  onClick={() => openProduct(product)}
                >
                  ADD
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="story-section">
        <div className="story-content">
          <p>OUR STORY</p>

          <h2>
            BUILT FOR PEOPLE
            <br />
            WHO DON&apos;T FOLLOW
            <br />
            THE CROWD.
          </h2>

          <button
            className="story-button"
            onClick={() => setModal("story")}
          >
            OUR STORY →
          </button>
        </div>
      </section>

      {/* =========================================================
          INFORMATION
      ========================================================= */}

      <section className="info-section">
        <div className="info-card">
          <h3>Need help?</h3>

          <button onClick={() => setModal("faq")}>
            FAQ
          </button>

          <button onClick={() => setModal("contact")}>
            CONTACT US
          </button>

          <button onClick={() => setModal("track")}>
            ORDER QUERIES
          </button>

          <button onClick={() => setModal("size")}>
            SIZE GUIDE
          </button>
        </div>

        <div className="info-card">
          <h3>Orders</h3>

          <button onClick={() => setModal("track")}>
            TRACK ORDER
          </button>

          <button onClick={() => setModal("shipping")}>
            SHIPPING POLICY
          </button>

          <button onClick={() => setModal("return")}>
            RETURN POLICY
          </button>

          <button onClick={() => setModal("return")}>
            REFUND POLICY
          </button>
        </div>

        <div className="info-card">
          <h3>REVRSE</h3>

          <button onClick={() => setModal("story")}>
            OUR STORY
          </button>

          <button onClick={() => setModal("contact")}>
            CONTACT
          </button>

          <button onClick={() => setModal("contact")}>
            INSTAGRAM
          </button>

          <button onClick={() => setModal("terms")}>
            TERMS & CONDITIONS
          </button>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="footer">
        <div className="footer-logo">
          <img
            src="/Images/pngrevrse.png"
            alt="REVRSE"
          />
        </div>

        <div className="footer-links">
          <button onClick={() => setModal("privacy")}>
            PRIVACY
          </button>

          <button onClick={() => setModal("terms")}>
            TERMS
          </button>

          <button onClick={() => setModal("shipping")}>
            SHIPPING
          </button>

          <button onClick={() => setModal("return")}>
            RETURNS
          </button>
        </div>

        <p>
          © 2026 REVRSE. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* =========================================================
          SEARCH
      ========================================================= */}

      {searchOpen && (
        <div className="full-overlay">
          <div className="search-screen">
            <div className="overlay-header">
              <h2>SEARCH REVRSE</h2>

              <button
                className="close-button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearch("");
                }}
              >
                ×
              </button>
            </div>

            <div className="search-input-wrap">
              <span>⌕</span>

              <input
                autoFocus
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search hoodies, t shirts, products..."
              />
            </div>

            {searchResults.length === 0 ? (
              <div className="empty-state">
                <h3>NO PRODUCTS FOUND</h3>

                <p>
                  Try another product name or category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <div className="search-results">
                {searchResults.map((product) => (
                  <button
                    className="search-result"
                    key={product.id}
                    onClick={() => {
                      setSearchOpen(false);
                      openProduct(product);
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                    />

                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.category}</span>
                      <b>{money(product.price)}</b>
                    </div>

                    <span>→</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          COLLECTIONS
      ========================================================= */}

      {collectionOpen && (
        <div className="full-overlay">
          <div className="collection-screen">
            <div className="overlay-header">
              <div>
                <p>REVRSE / COLLECTIONS</p>
                <h2>
                  {collection
                    ? collection
                    : "CHOOSE YOUR COLLECTION"}
                </h2>
              </div>

              <button
                className="close-button"
                onClick={() => {
                  setCollectionOpen(false);
                  setCollection(null);
                }}
              >
                ×
              </button>
            </div>

            {!collection ? (
              <div className="collection-choice-grid">
                <button
                  className="collection-choice tshirt-choice"
                  onClick={() =>
                    setCollection("Oversized T-Shirts")
                  }
                >
                  <img
                    src={products[0].images[0]}
                    alt="Oversized T-Shirts"
                  />

                  <span>OVERSIZED T-SHIRTS</span>
                  <small>5 PRODUCTS</small>
                </button>

                <button
                  className="collection-choice hoodie-choice"
                  onClick={() =>
                    setCollection("Hoodies")
                  }
                >
                  <img
                    src={products[5].images[0]}
                    alt="Hoodies"
                  />

                  <span>HOODIES</span>
                  <small>3 PRODUCTS</small>
                </button>
              </div>
            ) : (
              <div className="collection-products">
                <button
                  className="back-collection"
                  onClick={() => setCollection(null)}
                >
                  ← BACK TO COLLECTIONS
                </button>

                <div className="product-grid">
                  {collectionProducts.map((product) => (
                    <article
                      className="product-card"
                      key={product.id}
                    >
                      <div
                        className="product-image-wrap"
                        onClick={() =>
                          openProduct(product)
                        }
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="product-image"
                        />

                        <button
                          className={`save-product ${
                            wishlist.includes(product.id)
                              ? "saved"
                              : ""
                          }`}
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleWishlist(product.id);
                          }}
                        >
                          {wishlist.includes(product.id)
                            ? "♥"
                            : "♡"}
                        </button>
                      </div>

                      <div className="product-info">
                        <div>
                          <h3>{product.name}</h3>
                          <p>{money(product.price)}</p>
                        </div>

                        <button
                          className="add-cart"
                          onClick={() =>
                            openProduct(product)
                          }
                        >
                          ADD
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          PRODUCT DETAIL
      ========================================================= */}

      {selectedProduct && (
        <div className="full-overlay product-overlay">
          <div className="product-detail">
            <button
              className="close-button product-close"
              onClick={closeProduct}
            >
              ×
            </button>

            <div className="detail-gallery">
              <div className="detail-main-image">
                <img
                  src={
                    selectedProduct.images[
                      selectedImage
                    ]
                  }
                  alt={selectedProduct.name}
                />

                <button
                  className="gallery-arrow left"
                  onClick={() =>
                    setSelectedImage((current) =>
                      current === 0
                        ? selectedProduct.images.length -
                          1
                        : current - 1
                    )
                  }
                >
                  ‹
                </button>

                <button
                  className="gallery-arrow right"
                  onClick={() =>
                    setSelectedImage((current) =>
                      current ===
                      selectedProduct.images.length - 1
                        ? 0
                        : current + 1
                    )
                  }
                >
                  ›
                </button>
              </div>

              <div className="thumbnail-row">
                {selectedProduct.images.map(
                  (image, index) => (
                    <button
                      key={image}
                      className={
                        selectedImage === index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                      onClick={() =>
                        setSelectedImage(index)
                      }
                    >
                      <img
                        src={image}
                        alt=""
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="detail-info">
              <p className="detail-category">
                {selectedProduct.category}
              </p>

              <h1>{selectedProduct.name}</h1>

              <div className="detail-price">
                {money(selectedProduct.price)}
              </div>

              <p className="detail-description">
                {selectedProduct.description}
              </p>

              <div className="detail-section">
                <div className="detail-label-row">
                  <strong>SIZE</strong>

                  <button
                    onClick={() => setModal("size")}
                  >
                    SIZE GUIDE
                  </button>
                </div>

                <div className="size-row">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={
                        selectedSize === size
                          ? "size-button selected"
                          : "size-button"
                      }
                      onClick={() =>
                        setSelectedSize(size)
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <strong>QUANTITY</strong>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      setSelectedQuantity(
                        (value) => Math.max(1, value - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <span>{selectedQuantity}</span>

                  <button
                    onClick={() =>
                      setSelectedQuantity(
                        (value) => value + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {validationMessage && (
                <p className="validation-message">
                  {validationMessage}
                </p>
              )}

              <div className="detail-actions">
                <button
                  className="detail-add"
                  onClick={addCurrentProductToBag}
                >
                  ADD TO BAG
                </button>

                <button
                  className="detail-buy"
                  onClick={() => {
                    if (!selectedSize) {
                      setValidationMessage(
                        "PLEASE SELECT A SIZE."
                      );
                      return;
                    }

                    setValidationMessage("");

                    setBag([
                      {
                        product: selectedProduct,
                        size: selectedSize,
                        quantity: selectedQuantity,
                      },
                    ]);

                    setSelectedProduct(null);
                    setCheckoutOpen(true);
                  }}
                >
                  BUY NOW
                </button>
              </div>

              <button
                className={`detail-wishlist ${
                  wishlist.includes(selectedProduct.id)
                    ? "saved"
                    : ""
                }`}
                onClick={() =>
                  toggleWishlist(selectedProduct.id)
                }
              >
                {wishlist.includes(selectedProduct.id)
                  ? "♥ REMOVE FROM WISHLIST"
                  : "♡ ADD TO WISHLIST"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          GENERAL MODALS
      ========================================================= */}

      {modal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="close-button"
              onClick={() => setModal(null)}
            >
              ×
            </button>

            {/* ABOUT */}
            {modal === "about" && (
              <div className="modal-content about-content">
                <img
                  className="popup-logo"
                  src="/Images/pngrevrse.png"
                  alt="REVRSE"
                />

                <p className="modal-kicker">
                  ABOUT REVRSE
                </p>

                <h2>
                  REVRSE IS NOT MADE
                  <br />
                  TO BLEND IN.
                </h2>

                <p>
                  REVRSE is built for those who move
                  differently, think differently, and create
                  their own direction.
                </p>

                <p>
                  We believe clothing is more than
                  something you wear — it&apos;s an expression
                  of attitude, identity, and individuality.
                </p>

                <p>
                  From oversized silhouettes to heavyweight
                  essentials, every REVRSE piece is designed
                  with a focus on comfort, confidence, and
                  character.
                </p>

                <h3>
                  NO RULES. NO LIMITS.
                  <br />
                  JUST YOUR WAY.
                </h3>

                <strong>WELCOME TO REVRSE.</strong>
              </div>
            )}

            {/* STORY */}
            {modal === "story" && (
              <div className="modal-content">
                <img
                  className="popup-logo"
                  src="/Images/pngrevrse.png"
                  alt="REVRSE"
                />

                <p className="modal-kicker">
                  OUR STORY
                </p>

                <h2>
                  EVERYTHING STARTS
                  <br />
                  WITH A REASON.
                </h2>

                <p>
                  REVRSE started with a simple idea — to
                  create clothing for people who don&apos;t want
                  to dress like everyone else.
                </p>

                <p>
                  We wanted to build something that felt
                  different. Something that represented
                  individuality, confidence, and the freedom
                  to create your own identity.
                </p>

                <p>
                  What began as an idea became REVRSE — a
                  brand built around oversized silhouettes,
                  bold designs, and everyday pieces made to
                  stand out.
                </p>

                <h3>
                  WE DIDN&apos;T WANT TO FOLLOW THE
                  STANDARD.
                  <br />
                  WE WANTED TO REVERSE IT.
                </h3>

                <p>
                  Every piece is created with the belief that
                  there are no rules to how you should look,
                  move, or express yourself.
                </p>

                <p>
                  REVRSE is for the ones who choose their own
                  direction.
                </p>

                <h3>
                  DON&apos;T FOLLOW THE CROWD.
                  <br />
                  REVERSE IT.
                </h3>

                <strong>WELCOME TO REVRSE.</strong>
              </div>
            )}

            {/* FAQ */}
            {modal === "faq" && (
              <FAQContent />
            )}

            {/* CONTACT */}
            {modal === "contact" && (
              <div className="modal-content">
                <p className="modal-kicker">
                  REVRSE / CONTACT
                </p>

                <h2>GET IN TOUCH.</h2>

                <div className="contact-list">
                  <a href="#" className="contact-option">
                    <span>WHATSAPP</span>
                    <b>→</b>
                  </a>

                  <a href="#" className="contact-option">
                    <span>INSTAGRAM</span>
                    <b>→</b>
                  </a>

                  <a
                    href="mailto:"
                    className="contact-option"
                  >
                    <span>EMAIL</span>
                    <b>→</b>
                  </a>

                  <a
                    href="tel:"
                    className="contact-option"
                  >
                    <span>PHONE</span>
                    <b>→</b>
                  </a>
                </div>

                <p className="placeholder-note">
                  Your WhatsApp, Instagram, email and phone
                  details can be added here later.
                </p>
              </div>
            )}

            {/* SIZE GUIDE */}
            {modal === "size" && (
              <div className="modal-content">
                <p className="modal-kicker">
                  REVRSE / SIZE GUIDE
                </p>

                <h2>FIND YOUR FIT.</h2>

                <div className="size-table-wrap">
                  <table className="size-table">
                    <thead>
                      <tr>
                        <th>SIZE</th>
                        <th>CHEST</th>
                        <th>LENGTH</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>S</td>
                        <td>40"</td>
                        <td>27"</td>
                      </tr>

                      <tr>
                        <td>M</td>
                        <td>42"</td>
                        <td>28"</td>
                      </tr>

                      <tr>
                        <td>L</td>
                        <td>44"</td>
                        <td>29"</td>
                      </tr>

                      <tr>
                        <td>XL</td>
                        <td>46"</td>
                        <td>30"</td>
                      </tr>

                      <tr>
                        <td>XXL</td>
                        <td>48"</td>
                        <td>31"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  These measurements are placeholder
                  measurements for the first version and can
                  be changed to your actual REVRSE size chart.
                </p>
              </div>
            )}

            {/* TRACK */}
            {modal === "track" && (
              <TrackOrderContent />
            )}

            {/* SHIPPING */}
            {modal === "shipping" && (
              <PolicyContent
                title="SHIPPING POLICY"
                kicker="REVRSE / SHIPPING"
              >
                <h3>
                  WE&apos;RE GETTING YOUR REVRSE ORDER
                  TO YOU.
                </h3>

                <p>
                  Every order is carefully packed and
                  prepared before it leaves us.
                </p>

                <h4>PROCESSING TIME</h4>

                <p>
                  Orders are usually processed within 2–4
                  business days after the order is placed.
                </p>

                <h4>DELIVERY TIME</h4>

                <p>
                  Once shipped, delivery generally takes
                  3–7 business days, depending on your
                  location.
                </p>

                <h4>ORDER TRACKING</h4>

                <p>
                  Once your order has been shipped, you&apos;ll
                  receive tracking information.
                </p>

                <h4>DELIVERY DELAYS</h4>

                <p>
                  Occasionally, deliveries may take longer
                  because of holidays, weather, courier
                  delays, or circumstances outside our
                  control.
                </p>

                <h4>WRONG ADDRESS</h4>

                <p>
                  Please make sure your delivery address is
                  correct before placing your order.
                </p>

                <h3>
                  REVRSE — MADE TO MOVE WITH YOU.
                </h3>
              </PolicyContent>
            )}

            {/* RETURN */}
            {modal === "return" && (
              <PolicyContent
                title="RETURN & REFUND POLICY"
                kicker="REVRSE / RETURNS"
              >
                <h3>
                  WE WANT YOU TO LOVE YOUR REVRSE.
                </h3>

                <p>
                  If your order isn&apos;t right for you, you
                  may request a return according to the
                  conditions below.
                </p>

                <h4>ELIGIBILITY</h4>

                <p>
                  Items must be unused, unworn, unwashed,
                  and returned in their original condition
                  with all original tags and packaging intact.
                </p>

                <h4>RETURN WINDOW</h4>

                <p>
                  Return requests must be submitted within
                  7 days of delivery.
                </p>

                <h4>HOW TO REQUEST A RETURN</h4>

                <p>
                  Contact us through Order Queries with your
                  order number and the reason for your return.
                </p>

                <h4>DAMAGED OR WRONG ITEM</h4>

                <p>
                  If you receive a damaged, defective, or
                  incorrect product, contact us as soon as
                  possible with photographs and your order
                  details.
                </p>

                <h4>NON-RETURNABLE ITEMS</h4>

                <p>
                  Items that have been worn, washed, damaged
                  after delivery, or returned without their
                  original tags may not be eligible for return.
                </p>

                <h4>REFUNDS</h4>

                <p>
                  Once the returned product is received and
                  inspected, we&apos;ll confirm whether the
                  return is approved. Approved refunds will be
                  processed according to the original payment
                  method.
                </p>

                <h3>
                  REVRSE — IF IT&apos;S NOT RIGHT, WE&apos;LL
                  HELP MAKE IT RIGHT.
                </h3>
              </PolicyContent>
            )}

            {/* TERMS */}
            {modal === "terms" && (
              <PolicyContent
                title="TERMS & CONDITIONS"
                kicker="REVRSE / TERMS"
              >
                <h3>WELCOME TO REVRSE.</h3>

                <p>
                  By accessing and using the REVRSE website,
                  you agree to the following terms and
                  conditions.
                </p>

                <h4>1. ORDERS</h4>
                <p>
                  When you place an order, you agree that
                  the information provided is accurate and
                  complete.
                </p>

                <h4>2. PRODUCTS & PRICING</h4>
                <p>
                  We make every effort to display product
                  images, descriptions, sizes, and prices
                  accurately.
                </p>

                <h4>3. PAYMENTS</h4>
                <p>
                  Orders must be paid using the payment
                  methods available at checkout.
                </p>

                <h4>4. SHIPPING</h4>
                <p>
                  Orders are processed and delivered
                  according to our Shipping Policy.
                </p>

                <h4>5. RETURNS & REFUNDS</h4>
                <p>
                  Returns and refunds are subject to our
                  Return & Refund Policy.
                </p>

                <h4>6. PRODUCT USE</h4>
                <p>
                  REVRSE products are intended for personal
                  use.
                </p>

                <h4>7. INTELLECTUAL PROPERTY</h4>
                <p>
                  The REVRSE name, logo, designs, photographs,
                  graphics, text, and other website content
                  belong to REVRSE or their respective owners.
                </p>

                <h4>8. WEBSITE CONTENT</h4>
                <p>
                  We may update, modify, or remove website
                  content, products, prices, or services at
                  any time.
                </p>

                <h4>9. USER RESPONSIBILITY</h4>
                <p>
                  You agree not to misuse the website or
                  attempt unauthorized access.
                </p>

                <h4>10. CONTACT</h4>
                <p>
                  If you have questions about these terms,
                  please contact us.
                </p>

                <h3>
                  BY USING REVRSE, YOU AGREE TO THESE TERMS
                  & CONDITIONS.
                </h3>

                <strong>
                  REVRSE — REVERSE THE STANDARD.
                </strong>
              </PolicyContent>
            )}

            {/* PRIVACY */}
            {modal === "privacy" && (
              <PolicyContent
                title="PRIVACY POLICY"
                kicker="REVRSE / PRIVACY"
              >
                <h3>
                  YOUR PRIVACY MATTERS TO REVRSE.
                </h3>

                <p>
                  We respect your privacy and are committed
                  to protecting the information you share with
                  us when you use the REVRSE website.
                </p>

                <h4>1. INFORMATION WE COLLECT</h4>
                <p>
                  We may collect information such as your
                  name, email address, phone number, shipping
                  address, billing details, order information,
                  and other information you provide.
                </p>

                <h4>2. HOW WE USE YOUR INFORMATION</h4>
                <p>
                  Your information may be used to process and
                  deliver orders, provide customer support,
                  communicate about orders, and improve our
                  website.
                </p>

                <h4>3. PAYMENT INFORMATION</h4>
                <p>
                  Payments may be processed through secure
                  third-party payment providers.
                </p>

                <h4>4. ORDER & DELIVERY INFORMATION</h4>
                <p>
                  We may share necessary information with
                  delivery partners and service providers.
                </p>

                <h4>5. COOKIES</h4>
                <p>
                  Our website may use cookies or similar
                  technologies to improve your experience.
                </p>

                <h4>6. COMMUNICATIONS</h4>
                <p>
                  If you contact us or provide your contact
                  information, we may use it to respond to
                  your questions or provide order updates.
                </p>

                <h4>7. DATA SECURITY</h4>
                <p>
                  We take reasonable steps to protect the
                  information we collect.
                </p>

                <h4>8. THIRD-PARTY SERVICES</h4>
                <p>
                  Our website may use third-party services
                  such as payment providers, shipping services,
                  analytics, or social-media platforms.
                </p>

                <h4>9. YOUR CHOICES</h4>
                <p>
                  You may contact us regarding personal
                  information we hold about you.
                </p>

                <h4>10. POLICY UPDATES</h4>
                <p>
                  We may update this Privacy Policy when
                  necessary.
                </p>

                <h4>11. CONTACT US</h4>
                <p>
                  If you have questions about this Privacy
                  Policy, please contact REVRSE.
                </p>

                <strong>
                  REVRSE — YOUR DATA. YOUR PRIVACY. YOUR
                  TRUST.
                </strong>
              </PolicyContent>
            )}

            {/* WISHLIST */}
            {modal === "wishlist" && (
              <div className="modal-content">
                <p className="modal-kicker">
                  REVRSE / WISHLIST
                </p>

                <h2>SAVED FOR LATER.</h2>

                {wishlist.length === 0 ? (
                  <div className="empty-state small">
                    <h3>YOUR WISHLIST IS EMPTY</h3>
                    <p>
                      Tap the ♡ on a product to save it here.
                    </p>
                  </div>
                ) : (
                  <div className="wishlist-list">
                    {products
                      .filter((product) =>
                        wishlist.includes(product.id)
                      )
                      .map((product) => (
                        <div
                          className="wishlist-item"
                          key={product.id}
                        >
                          <button
                            className="wishlist-product"
                            onClick={() =>
                              openProduct(product)
                            }
                          >
                            <img
                              src={product.images[0]}
                              alt={product.name}
                            />

                            <div>
                              <strong>
                                {product.name}
                              </strong>
                              <span>
                                {money(product.price)}
                              </span>
                            </div>
                          </button>

                          <button
                            className="remove-link"
                            onClick={() =>
                              toggleWishlist(product.id)
                            }
                          >
                            REMOVE
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* BAG */}
            {modal === "bag" && (
              <div className="modal-content">
                <p className="modal-kicker">
                  REVRSE / BAG
                </p>

                <h2>YOUR BAG.</h2>

                {bag.length === 0 ? (
                  <div className="empty-state small">
                    <h3>YOUR BAG IS EMPTY</h3>

                    <button
                      onClick={() => {
                        setModal(null);
                        scrollToProducts();
                      }}
                    >
                      SHOP PRODUCTS
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="bag-list">
                      {bag.map((item) => (
                        <div
                          className="bag-item"
                          key={`${item.product.id}-${item.size}`}
                        >
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                          />

                          <div className="bag-item-info">
                            <h3>{item.product.name}</h3>

                            <p>
                              SIZE: {item.size}
                            </p>

                            <strong>
                              {money(item.product.price)}
                            </strong>

                            <div className="bag-controls">
                              <div className="quantity-control">
                                <button
                                  onClick={() =>
                                    changeBagQuantity(
                                      item.product.id,
                                      item.size,
                                      -1
                                    )
                                  }
                                >
                                  −
                                </button>

                                <span>
                                  {item.quantity}
                                </span>

                                <button
                                  onClick={() =>
                                    changeBagQuantity(
                                      item.product.id,
                                      item.size,
                                      1
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>

                              <button
                                className="remove-link"
                                onClick={() =>
                                  removeFromBag(
                                    item.product.id,
                                    item.size
                                  )
                                }
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bag-total">
                      <span>TOTAL</span>
                      <strong>{money(bagTotal)}</strong>
                    </div>

                    <button
                      className="checkout-button"
                      onClick={openCheckout}
                    >
                      PROCEED TO CHECKOUT →
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          CHECKOUT
      ========================================================= */}

      {checkoutOpen && !orderConfirmed && (
        <div className="full-overlay checkout-overlay">
          <div className="checkout-screen">
            <div className="overlay-header">
              <div>
                <p>REVRSE / CHECKOUT</p>
                <h2>COMPLETE YOUR ORDER.</h2>
              </div>

              <button
                className="close-button"
                onClick={() => setCheckoutOpen(false)}
              >
                ×
              </button>
            </div>

            <button
              className="back-to-bag"
              onClick={() => {
                setCheckoutOpen(false);
                setModal("bag");
              }}
            >
              ← BACK TO BAG
            </button>

            <div className="checkout-layout">
              <div className="checkout-form">
                <h3>DELIVERY DETAILS</h3>

                <label>
                  FULL NAME
                  <input
                    value={checkout.name}
                    onChange={(event) =>
                      setCheckout({
                        ...checkout,
                        name: event.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  PHONE NUMBER
                  <input
                    type="tel"
                    value={checkout.phone}
                    onChange={(event) =>
                      setCheckout({
                        ...checkout,
                        phone: event.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  EMAIL ADDRESS
                  <input
                    type="email"
                    value={checkout.email}
                    onChange={(event) =>
                      setCheckout({
                        ...checkout,
                        email: event.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  FULL ADDRESS
                  <textarea
                    value={checkout.address}
                    onChange={(event) =>
                      setCheckout({
                        ...checkout,
                        address: event.target.value,
                      })
                    }
                  />
                </label>

                <div className="checkout-two">
                  <label>
                    CITY
                    <input
                      value={checkout.city}
                      onChange={(event) =>
                        setCheckout({
                          ...checkout,
                          city: event.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    STATE
                    <input
                      value={checkout.state}
                      onChange={(event) =>
                        setCheckout({
                          ...checkout,
                          state: event.target.value,
                        })
                      }
                    />
                  </label>
                </div>

                <label>
                  PIN CODE
                  <input
                    value={checkout.pin}
                    onChange={(event) =>
                      setCheckout({
                        ...checkout,
                        pin: event.target.value,
                      })
                    }
                  />
                </label>

                <h3>PAYMENT METHOD</h3>

                <div className="payment-options">
                  <button
                    className={
                      checkout.payment === "UPI"
                        ? "payment-option selected"
                        : "payment-option"
                    }
                    onClick={() =>
                      setCheckout({
                        ...checkout,
                        payment: "UPI",
                      })
                    }
                  >
                    <strong>UPI</strong>
                    <span>ritz3690@axl</span>
                  </button>

                  <button
                    className={
                      checkout.payment === "CARD"
                        ? "payment-option selected"
                        : "payment-option"
                    }
                    onClick={() =>
                      setCheckout({
                        ...checkout,
                        payment: "CARD",
                      })
                    }
                  >
                    <strong>CREDIT / DEBIT CARD</strong>
                    <span>Card payment</span>
                  </button>

                  <button
                    className={
                      checkout.payment === "NET BANKING"
                        ? "payment-option selected"
                        : "payment-option"
                    }
                    onClick={() =>
                      setCheckout({
                        ...checkout,
                        payment: "NET BANKING",
                      })
                    }
                  >
                    <strong>NET BANKING</strong>
                    <span>Select bank later</span>
                  </button>

                  <button
                    className={
                      checkout.payment === "COD"
                        ? "payment-option selected"
                        : "payment-option"
                    }
                    onClick={() =>
                      setCheckout({
                        ...checkout,
                        payment: "COD",
                      })
                    }
                  >
                    <strong>
                      CASH ON DELIVERY
                    </strong>

                    <span>
                      ₹50 advance required
                    </span>
                  </button>
                </div>

                {validationMessage && (
                  <p className="validation-message">
                    {validationMessage}
                  </p>
                )}

                <button
                  className="payment-button"
                  onClick={proceedToPayment}
                >
                  PROCEED TO PAYMENT →
                </button>
              </div>

              <div className="checkout-summary">
                <h3>ORDER SUMMARY</h3>

                {bag.map((item) => (
                  <div
                    className="summary-item"
                    key={`${item.product.id}-${item.size}`}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                    />

                    <div>
                      <strong>
                        {item.product.name}
                      </strong>

                      <span>
                        {item.size} × {item.quantity}
                      </span>

                      <b>
                        {money(
                          item.product.price *
                            item.quantity
                        )}
                      </b>
                    </div>
                  </div>
                ))}

                <div className="summary-total">
                  <span>TOTAL</span>
                  <strong>{money(bagTotal)}</strong>
                </div>

                {checkout.payment === "COD" && (
                  <div className="cod-note">
                    <strong>COD NOTICE</strong>

                    <p>
                      A ₹50 advance is required to confirm
                      your Cash on Delivery order. The
                      remaining amount will be payable on
                      delivery.
                    </p>
                  </div>
                )}

                {checkout.payment === "UPI" && (
                  <div className="cod-note">
                    <strong>UPI PAYMENT</strong>

                    <p>
                      UPI ID:
                      <br />
                      <b>ritz3690@axl</b>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          ORDER CONFIRMATION
      ========================================================= */}

      {orderConfirmed && (
        <div className="full-overlay">
          <div className="confirmation-screen">
            <div className="confirmation-mark">
              ✓
            </div>

            <img
              src="/Images/pngrevrse.png"
              alt="REVRSE"
              className="confirmation-logo"
            />

            <p className="modal-kicker">
              REVRSE / ORDER
            </p>

            <h1>ORDER CONFIRMED.</h1>

            <p>
              Thank you for choosing REVRSE.
            </p>

            <div className="confirmation-box">
              <span>ORDER NUMBER</span>
              <strong>
                #REV{Math.floor(Math.random() * 900000 + 100000)}
              </strong>
            </div>

            <div className="confirmation-box">
              <span>TOTAL</span>
              <strong>{money(bagTotal)}</strong>
            </div>

            <div className="confirmation-actions">
              <button
                onClick={() => setModal("track")}
              >
                TRACK ORDER
              </button>

              <button onClick={continueShopping}>
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          ADDED TO BAG NOTICE
      ========================================================= */}

      {notice && (
        <div className="toast">
          ✓ {notice}
        </div>
      )}
    </main>
  );
}

/* ===============================================================
   FAQ COMPONENT
=============================================================== */

function FAQContent() {
  const [openQuestion, setOpenQuestion] =
    useState<number | null>(null);

  const faqs = [
    {
      question: "What is REVRSE?",
      answer:
        "REVRSE is a streetwear brand focused on oversized silhouettes, bold designs, and comfortable everyday pieces made for people who want to express themselves differently.",
    },
    {
      question: "What sizes do you offer?",
      answer:
        "Our products are available in S, M, L, XL and XXL. Check the Size Guide on each product before ordering.",
    },
    {
      question: "Are REVRSE T-shirts oversized?",
      answer:
        "Yes. Our T-shirts are designed with an oversized fit. We recommend checking the size chart to find the fit that's right for you.",
    },
    {
      question: "How do I choose my size?",
      answer:
        "Open the product you're interested in and select Size Guide. You'll find the measurements needed to choose your preferred fit.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Choose your product, select your size, click Add to Bag, review your items in the Bag, and proceed to checkout.",
    },
    {
      question: "Can I add products to my wishlist?",
      answer:
        "Yes. Click the ♡ icon on any product to save it to your Wishlist. Click it again to remove it.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "If you need to change or cancel an order, contact us as soon as possible through Order Queries.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you'll receive tracking information needed to follow your delivery.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Return requests should be submitted within 7 days of delivery, subject to the Return & Refund Policy.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times can vary depending on your location. Estimated delivery information will be provided during the ordering process.",
    },
    {
      question:
        "What if I receive a damaged or incorrect product?",
      answer:
        "Contact us through Order Queries as soon as possible with your order details and photographs of the issue.",
    },
    {
      question: "How can I contact REVRSE?",
      answer:
        "Use Contact Us or Order Queries and our team will assist you.",
    },
  ];

  return (
    <div className="modal-content">
      <p className="modal-kicker">
        REVRSE / FAQ
      </p>

      <h2>FREQUENTLY ASKED QUESTIONS.</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openQuestion === index
                ? "open"
                : ""
            }`}
            key={faq.question}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpenQuestion(
                  openQuestion === index
                    ? null
                    : index
                )
              }
            >
              <span>{faq.question}</span>

              <b>
                {openQuestion === index ? "−" : "+"}
              </b>
            </button>

            {openQuestion === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===============================================================
   TRACK ORDER COMPONENT
=============================================================== */

function TrackOrderContent() {
  const [trackingId, setTrackingId] = useState("");
  const [tracked, setTracked] = useState(false);

  return (
    <div className="modal-content">
      <p className="modal-kicker">
        REVRSE / TRACK ORDER
      </p>

      <h2>WHERE IS YOUR ORDER?</h2>

      <p>
        Enter your order tracking ID below to check your
        delivery status.
      </p>

      <label className="tracking-label">
        ORDER TRACKING ID

        <input
          value={trackingId}
          onChange={(event) =>
            setTrackingId(event.target.value)
          }
          placeholder="Enter tracking ID"
        />
      </label>

      <button
        className="tracking-button"
        onClick={() => setTracked(true)}
      >
        TRACK ORDER →
      </button>

      {tracked && (
        <div className="tracking-result">
          <strong>
            TRACKING SYSTEM READY
          </strong>

          <p>
            Tracking ID:
            <br />
            <b>{trackingId || "Not entered"}</b>
          </p>

          <small>
            Your live courier tracking system can be
            connected here later.
          </small>
        </div>
      )}
    </div>
  );
}

/* ===============================================================
   POLICY COMPONENT
=============================================================== */

function PolicyContent({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="modal-content policy-content">
      <p className="modal-kicker">{kicker}</p>

      <h2>{title}</h2>

      <div className="policy-body">
        {children}
      </div>
    </div>
  );
}
