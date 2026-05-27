"use client";
import { menuData } from "@/assets/assets";
import { useState } from "react";

type BadgeKey = "Chef's Pick" | "Bestseller" | "Spicy" | "Premium" | "Seasonal";

const badgeClasses: Record<BadgeKey, string> = {
      "Chef's Pick": "bg-orange-50 text-orange-700 border border-orange-200",
      Bestseller: "bg-red-50 text-red-700 border border-red-200",
      Spicy: "bg-rose-50 text-rose-700 border border-rose-200",
      Premium: "bg-violet-50 text-violet-700 border border-violet-200",
      Seasonal: "bg-green-50 text-green-700 border border-green-200",
};

export default function MenuPage() {
      const [activeCategory, setActiveCategory] = useState("starters");
      const [cart, setCart] = useState<Record<number, number>>({});

      const items =
            menuData.items[activeCategory as keyof typeof menuData.items];

      const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
      const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
            const allItems = Object.values(menuData.items).flat();
            const item = allItems.find((i) => i.id === Number(id));
            return sum + (item ? item.price * qty : 0);
      }, 0);

      const addToCart = (id: number) =>
            setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
      const removeFromCart = (id: number) =>
            setCart((c) => {
                  const next = { ...c };
                  if (next[id] > 1) next[id]--;
                  else delete next[id];
                  return next;
            });

      return (
            <div className="min-h-screen bg-orange-50/40 text-stone-900 font-serif">
                  {/* Header */}
                  <header className="bg-white border-b border-orange-100 text-center px-4 py-10">
                        <h1 className="text-5xl serif font-bold tracking-widest text-stone-900 mb-1">
                              Haveli
                        </h1>
                        <p className="text-xs tracking-[4px] uppercase text-stone-400 font-sans">
                              Authentic North Indian Cuisine
                        </p>
                        <div className="flex items-center justify-center gap-3 mt-4 max-w-xs mx-auto text-[#E85D04] text-xs">
                              <span className="flex-1 h-px bg-linear-to-r from-transparent to-orange-200" />
                              ✦ ◈ ✦
                              <span className="flex-1 h-px bg-linear-to-l from-transparent to-orange-200" />
                        </div>
                  </header>

                  {/* Sticky Category Nav */}
                  <nav className="sticky top-0 z-10 bg-white border-b border-orange-100 flex justify-center gap-2 px-4 py-3 overflow-x-auto">
                        {menuData.categories.map((cat) => {
                              const active = activeCategory === cat.id;
                              return (
                                    <button
                                          key={cat.id}
                                          onClick={() =>
                                                setActiveCategory(cat.id)
                                          }
                                          className={`whitespace-nowrap px-5 py-1.5 rounded-full text-sm font-sans transition-all duration-200 cursor-pointer ${
                                                active
                                                      ? "bg-[#E85D04] text-white font-semibold shadow-md shadow-orange-200"
                                                      : "bg-white text-stone-500 border border-stone-200 hover:border-[#E85D04] hover:text-[#E85D04]"
                                          }`}
                                    >
                                          {cat.label}
                                    </button>
                              );
                        })}
                  </nav>

                  {/* Menu Items */}
                  <main className="max-w-2xl mx-auto px-4 pt-6 pb-32">
                        <div className="divide-y divide-orange-100">
                              {items.map((item) => (
                                    <div
                                          key={item.id}
                                          className="flex items-start justify-between gap-4 py-5"
                                    >
                                          {/* Left */}
                                          <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                                                      {/* Veg / Non-veg indicator */}
                                                      <span
                                                            className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded-sm border-2 shrink-0 ${
                                                                  item.veg
                                                                        ? "border-green-600"
                                                                        : "border-red-600"
                                                            }`}
                                                      >
                                                            <span
                                                                  className={`w-1.5 h-1.5 rounded-full ${
                                                                        item.veg
                                                                              ? "bg-green-600"
                                                                              : "bg-red-600"
                                                                  }`}
                                                            />
                                                      </span>

                                                      <span className="text-base font-bold text-stone-800 tracking-tight">
                                                            {item.name}
                                                      </span>

                                                      {item.badge &&
                                                            badgeClasses[
                                                                  item.badge as BadgeKey
                                                            ] && (
                                                                  <span
                                                                        className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-semibold font-sans ${
                                                                              badgeClasses[
                                                                                    item.badge as BadgeKey
                                                                              ]
                                                                        }`}
                                                                  >
                                                                        {
                                                                              item.badge
                                                                        }
                                                                  </span>
                                                            )}
                                                </div>

                                                <p className="text-sm text-stone-400 leading-relaxed font-sans max-w-sm">
                                                      {item.desc}
                                                </p>
                                          </div>

                                          {/* Right */}
                                          <div className="flex flex-col items-end gap-2 shrink-0">
                                                <span className="text-base font-bold text-[#E85D04] font-sans">
                                                      ₹{item.price}
                                                </span>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </main>
            </div>
      );
}
