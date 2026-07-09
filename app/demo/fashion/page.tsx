"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { ShoppingBag, X, Plus, Minus, ArrowLeft, Check } from "lucide-react";

const products = [
  { id: 1, name: "Silk Blazer", category: "DAMES", price: 349, image: "/images/fashion/blazer.jpg" },
  { id: 2, name: "Merino Coat", category: "HEREN", price: 499, image: "/images/fashion/coat.jpg" },
  { id: 3, name: "Leather Bag", category: "ACCESSOIRES", price: 279, image: "/images/fashion/bag.jpg" },
  { id: 4, name: "Cashmere Sweater", category: "DAMES", price: 199, image: "/images/fashion/sweater.jpg" },
  { id: 5, name: "Tailored Trousers", category: "HEREN", price: 179, image: "/images/fashion/trousers.jpg" },
  { id: 6, name: "Silk Scarf", category: "ACCESSOIRES", price: 89, image: "/images/fashion/scarf.jpg" },
  { id: 7, name: "Wool Dress", category: "DAMES", price: 289, image: "/images/fashion/dress.jpg" },
  { id: 8, name: "Linen Shirt", category: "HEREN", price: 129, image: "/images/fashion/shirt.jpg" },
];

interface CartItem {
  product: (typeof products)[0];
  quantity: number;
}

export default function FashionDemo() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [addedId, setAddedId] = useState<number | null>(null);

  const categories = ["ALL", "DAMES", "HEREN", "ACCESSOIRES"];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const addToCart = useCallback((product: (typeof products)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 800);
  }, []);

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/demo/fashion"
              className="text-xl tracking-widest text-gray-900 uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              LUXE
            </Link>

            {/* Desktop Category Filter */}
            <nav className="hidden md:flex items-center gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-widest uppercase transition-colors pb-1 ${
                    activeCategory === cat
                      ? "text-gray-900 font-semibold border-b-2 border-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="hidden sm:inline-flex items-center gap-1 text-xs tracking-wider text-gray-400 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={12} />
                Terug
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Winkelwagen"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Category Filter */}
        <div className="md:hidden border-t border-gray-100 overflow-x-auto">
          <div className="flex gap-1 px-4 py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider whitespace-nowrap border transition-colors flex-shrink-0 ${
                  activeCategory === cat
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm tracking-widest text-gray-500 uppercase mb-4">
                Nieuwe Collectie 2026
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Elegance
                <br />
                Redefined
              </h1>
              <p className="text-lg text-gray-600 max-w-md mb-8 leading-relaxed">
                Ontdek ons nieuwe assortiment. Minimalistisch design, maximale
                impact. Timeless pieces voor de moderne wardrobe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("collection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gray-900 text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-700 transition-colors"
                >
                  Shop Nu
                </button>
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className="border border-gray-900 text-gray-900 px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Collectie
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/fashion/coat.jpg"
                  alt="Merino Coat - Featured"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm text-gray-400 tracking-widest uppercase">
                {activeCategory === "ALL" ? "Alle Items" : activeCategory}
              </span>
              <h2
                className="text-3xl text-gray-900 mt-2 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Collectie
              </h2>
            </div>
            <span className="text-sm text-gray-400">
              {filteredProducts.length} items
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[3/4] mb-4 overflow-hidden relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-3 text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    {addedId === product.id ? (
                      <>
                        <Check size={14} />
                        Toegevoegd
                      </>
                    ) : (
                      "Toevoegen"
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-400 tracking-wider uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm text-gray-900 tracking-wide mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-light">&euro;{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Gratis verzending
              </p>
              <p className="text-sm text-gray-500 tracking-wide">
                Vanaf &euro;150 binnen Nederland
              </p>
            </div>
            <div>
              <p
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                30 dagen retour
              </p>
              <p className="text-sm text-gray-500 tracking-wide">
                Niet goed? Geld terug
              </p>
            </div>
            <div>
              <p
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Veilig betalen
              </p>
              <p className="text-sm text-gray-500 tracking-wide">
                iDEAL, Creditcard, PayPal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-light mb-4 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Word lid van de inner circle
          </h2>
          <p className="text-gray-400 mb-8 tracking-wide">
            Ontvang als eerste toegang tot nieuwe collecties en exclusieve
            aanbiedingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm tracking-wider focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-3 bg-white text-gray-900 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors">
              Inschrijven
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 tracking-wider">
              &copy; 2026 Luxe Fashion &mdash; Demo webshop door{" "}
              <Link
                href="/"
                className="text-gray-900 hover:text-orange-600 transition-colors"
              >
                WebBoost Partner
              </Link>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-xs text-gray-500 tracking-wider hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={14} />
                Demo&apos;s overzicht
              </Link>
              <Link
                href="/"
                className="text-xs text-gray-500 tracking-wider hover:text-gray-900 transition-colors"
              >
                WebBoost Partner
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2
                className="text-xl tracking-wider"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Winkelwagen ({cartCount})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag
                    size={48}
                    className="mx-auto text-gray-200 mb-4"
                  />
                  <p className="text-gray-400 tracking-wide">
                    Uw winkelwagen is leeg
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-4 text-sm text-gray-900 tracking-wider underline"
                  >
                    Verder winkelen
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-20 h-24 relative flex-shrink-0 bg-gray-100 overflow-hidden">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm tracking-wide">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mb-2">
                          {item.product.category}
                        </p>
                        <p className="text-sm mb-3">
                          &euro;{item.product.price}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, -1)
                            }
                            className="w-7 h-7 border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, 1)
                            }
                            className="w-7 h-7 border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between mb-2 text-sm text-gray-500">
                  <span>Subtotaal</span>
                  <span>&euro;{cartTotal}</span>
                </div>
                <div className="flex justify-between mb-4 text-sm text-gray-500">
                  <span>Verzending</span>
                  <span>{cartTotal >= 150 ? "Gratis" : "€4.95"}</span>
                </div>
                <div className="flex justify-between mb-6 pt-4 border-t border-gray-100">
                  <span className="font-semibold">Totaal</span>
                  <span
                    className="text-xl"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    &euro;{cartTotal >= 150 ? cartTotal : cartTotal + 4.95}
                  </span>
                </div>
                <button className="w-full bg-gray-900 text-white py-4 text-xs tracking-widest uppercase hover:bg-gray-700 transition-colors">
                  Afrekenen
                </button>
                <p className="text-xs text-gray-400 text-center mt-3 tracking-wide">
                  Demo &mdash; geen echte betaling
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
