"use client";

import React, { useState } from "react";
import DishOrbitCarousel, { Dish } from "@/components/ui/dish-orbit-carousel";
import { CoffeeCupSketch, WheatSketch } from "./SketchElements";

const BAKERY_DISHES: Dish[] = [
  {
    title: "1968 Original",
    subtitle: "Star Cake",
    eyebrow: "#1 Signature Heritage Dish",
    label: "Star Cake",
    image: "/images/dish-star-cake.png",
    rating: 4.9,
    chef: "Thiruvadi Legacy Formula",
    kitchen: "Sawyerpuram Master Hearth",
    description:
      "Crafted since 1968 with 100% pure cold-pressed coconut oil, 8 caramelized star-points, and an impossibly airy cardamom sponge crumb. Served on fresh porcelain.",
    likes: 2480,
    ingredients: ["Pure Coconut Oil", "Country Eggs", "Crushed Green Cardamom", "Golden Sponge Crumb"],
    accent: "#D68A36",
  },
  {
    title: "South Indian Roast",
    subtitle: "Hot Americano",
    eyebrow: "#2 Town Favourite Brew",
    label: "Hot Americano",
    image: "/images/dish-americano.png",
    rating: 4.8,
    chef: "Sawyerpuram Master Barista",
    kitchen: "Morning & Twilight Counter",
    description:
      "Piping hot espresso poured over steaming mineral water in vintage faceted glass tumblers, crowned with a thick golden crema head. The companion to our Star Cake.",
    likes: 1820,
    ingredients: ["Estate Peaberry Blend", "Slow Roasted Beans", "Golden Crema Layer"],
    accent: "#B86B26",
  },
  {
    title: "Belgian Dark",
    subtitle: "Truffle Pastry",
    eyebrow: "#3 Gourmet Celebration Slice",
    label: "Chocolate Truffle",
    image: "/images/dish-chocolate-truffle.png",
    rating: 4.9,
    chef: "Patisserie Craft",
    kitchen: "Cold Gateau Larder",
    description:
      "Layers of moist Dutch cocoa sponge drenched in molten Belgian dark ganache glaze, garnished with a hand-curled dark chocolate shaving. Pure indulgence.",
    likes: 1650,
    ingredients: ["Belgian Cocoa 70%", "Silky Dark Ganache", "Moist Sponge", "Chocolate Shavings"],
    accent: "#6B3319",
  },
  {
    title: "72-Layer Wood-Fired",
    subtitle: "Vegetable Puff",
    eyebrow: "#4 Afternoon 4 PM Staple",
    label: "Spiced Flaky Puff",
    image: "/images/dish-puff.png",
    rating: 4.7,
    chef: "Savoury Hearth Master",
    kitchen: "Wood-Fired Oven • Batch 4 PM",
    description:
      "Over 72 gossamer-thin layers of buttery laminated crust, slow-baked to golden crispness around spiced country potatoes, onions, and slow-roasted cumin.",
    likes: 1940,
    ingredients: ["72-Layer Laminated Pastry", "Spiced Potatoes", "Caramelized Onions", "Roasted Cumin"],
    accent: "#C07D3E",
  },
  {
    title: "Pillow-Soft",
    subtitle: "Brioche Butter Bun",
    eyebrow: "#5 Vintage Old-School Joy",
    label: "Brioche Butter Bun",
    image: "/images/dish-brioche-bun.png",
    rating: 4.8,
    chef: "Morning Bakehouse",
    kitchen: "Heritage Dough Workshop",
    description:
      "Plump, golden-domed artisanal brioche buns generously filled with churned sweet butter and sprinkled with sparkling granulated sugar crystals.",
    likes: 1420,
    ingredients: ["Cultured Farm Butter", "Sweet Milk Dough", "Sugar Crystals", "Golden Glaze"],
    accent: "#E5A93C",
  },
  {
    title: "Handcrafted",
    subtitle: "Butter Cookies",
    eyebrow: "#6 Traditional Tea-Time Bite",
    label: "Butter Cookies",
    image: "/images/dish-cookie.png",
    rating: 4.9,
    chef: "Sawyerpuram Classics",
    kitchen: "Slow Hearth Bakehouse",
    description:
      "Melt-in-mouth traditional shortbread rings with fluted scalloped edges, slow-baked until golden crumbly perfection. Packaged in brown parchment tins.",
    likes: 1390,
    ingredients: ["Pure Butterfat", "Cardamom Flour", "Slow Hearth Heat", "Melt-in-Mouth Crumb"],
    accent: "#8F2A1E",
  },
  {
    title: "Velvety Molten",
    subtitle: "Hot Chocolate",
    eyebrow: "#7 Evening Comfort",
    label: "Hot Chocolate",
    image: "/images/dish-hot-chocolate.png",
    rating: 4.8,
    chef: "Beverage Craft",
    kitchen: "Steamed Dairy Hearth",
    description:
      "Rich Dutch cocoa melted into fresh country milk, topped with a velvety steamed froth cloud and delicate cocoa powder dusting.",
    likes: 1530,
    ingredients: ["Artisan Cocoa", "Steamed Country Milk", "Vanilla Bean", "Cocoa Dusting"],
    accent: "#5C2E17",
  },
];

export function ProductsSection() {
  const [orderedDish, setOrderedDish] = useState<string | null>(null);

  const handleOrder = (dish: Dish) => {
    setOrderedDish(dish.subtitle);
    setTimeout(() => {
      setOrderedDish(null);
    }, 3000);
  };

  const sectionHeader = (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center pt-2 sm:pt-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold-500/30 text-gold-600 text-[10.5px] font-display font-black uppercase tracking-[0.2em] shadow-xs mb-1.5">
        <span>The Rotating Bakery Orbit</span>
        <span>•</span>
        <span>Studio 3D Presentation</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-espresso-950 tracking-tight leading-tight">
        Baked Daily. Plated to Perfection.
      </h2>

      <p className="mt-1 text-xs sm:text-sm text-espresso-900/70 font-sans leading-relaxed max-w-xl mx-auto">
        From our 1968 Star Cake to wood-fired savory puffs and velvet hot brews — swing through Sawyerpuram&apos;s most celebrated bakery creations.
      </p>

      {orderedDish && (
        <div className="mt-2 inline-block px-3 py-1 bg-crust-800 text-cream-50 text-[11px] font-mono rounded shadow animate-fade-in">
          ✓ Added <strong>{orderedDish}</strong> to your daily visit itinerary!
        </div>
      )}
    </div>
  );

  const qualityGuaranteesFooter = (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full border-t border-crust-800/15 pt-2 pb-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
        <div>
          <span className="block font-serif text-lg sm:text-xl font-black text-gold-600">100%</span>
          <span className="text-[10px] font-display uppercase tracking-widest text-espresso-900/70">Pure Coconut Oil</span>
        </div>
        <div>
          <span className="block font-serif text-lg sm:text-xl font-black text-gold-600">4:00 PM</span>
          <span className="text-[10px] font-display uppercase tracking-widest text-espresso-900/70">Hot Wood-Fired Batch</span>
        </div>
        <div>
          <span className="block font-serif text-lg sm:text-xl font-black text-gold-600">3 Generations</span>
          <span className="text-[10px] font-display uppercase tracking-widest text-espresso-900/70">Family Craftsmanship</span>
        </div>
        <div>
          <span className="block font-serif text-lg sm:text-xl font-black text-gold-600">Zero Artificial</span>
          <span className="text-[10px] font-display uppercase tracking-widest text-espresso-900/70">Preservatives or Colors</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="relative bg-cream-100 text-espresso-950 scroll-mt-20">
      {/* Torn Paper Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-espresso-950 torn-edge-bottom opacity-10 pointer-events-none z-20" />

      {/* Decorative Heritage Sketches */}
      <WheatSketch className="absolute -left-10 top-24 w-32 h-44 opacity-20 pointer-events-none hidden lg:block -rotate-12 z-10" />
      <CoffeeCupSketch className="absolute -right-8 top-32 w-28 h-28 opacity-25 pointer-events-none hidden lg:block rotate-6 z-10" />

      {/* Pinned Full-Section Orbit Carousel (Scroll locked, auto-rotates, unpins on reaching end) */}
      <DishOrbitCarousel
        dishes={BAKERY_DISHES}
        height="100svh"
        scrollPin={true}
        loop={false}
        header={sectionHeader}
        footer={qualityGuaranteesFooter}
        onOrder={handleOrder}
      />
    </section>
  );
}
