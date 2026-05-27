"use client";
import { featuredDishes } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Dish = (typeof featuredDishes)[0];

const OurBest = () => {
      const [selected, setSelected] = useState<Dish | null>(null);

      return (
            <section className="w-[90vw] mx-auto my-16">
                  {/* Heading */}
                  <div className="mb-10">
                        <p className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest mb-2">
                              Handpicked For You
                        </p>
                        <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                              Our Best For You
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl">
                              Dishes our guests keep coming back for — made
                              fresh, served with love.
                        </p>
                  </div>

                  {/* Dishes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredDishes.map((dish) => (
                              <div
                                    key={dish.id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-black/5"
                              >
                                    {/* Image */}
                                    <div className="relative w-full h-56 overflow-hidden">
                                          <Image
                                                src={dish.image}
                                                alt={dish.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                          />
                                          <span className="absolute top-3 left-3 bg-[#E85D04] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {dish.tag}
                                          </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                          <p className="text-xs text-[#E85D04] font-medium uppercase tracking-wide mb-1">
                                                {dish.category}
                                          </p>
                                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {dish.name}
                                          </h3>
                                          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                                {dish.desc}
                                          </p>

                                          <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900">
                                                      {dish.price}
                                                </span>
                                                <button
                                                      onClick={() =>
                                                            setSelected(dish)
                                                      }
                                                      className="bg-[#E85D04] hover:bg-[#F48C06] text-white text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
                                                >
                                                      View
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>

                  {/* Modal */}
                  {selected && (
                        <div
                              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
                              onClick={() => setSelected(null)}
                        >
                              <div
                                    className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    {/* Modal Image */}
                                    <div className="relative w-full h-64">
                                          <Image
                                                src={selected.image}
                                                alt={selected.name}
                                                fill
                                                className="object-cover"
                                          />
                                          <span className="absolute top-3 left-3 bg-[#E85D04] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {selected.tag}
                                          </span>
                                          {/* Close btn */}
                                          <button
                                                onClick={() =>
                                                      setSelected(null)
                                                }
                                                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 transition cursor-pointer"
                                          >
                                                <X size={18} />
                                          </button>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="p-6">
                                          <p className="text-xs text-[#E85D04] font-medium uppercase tracking-wide mb-1">
                                                {selected.category}
                                          </p>
                                          <h3 className="serif text-3xl font-bold text-gray-900 mb-2">
                                                {selected.name}
                                          </h3>
                                          <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                                {selected.desc}
                                          </p>

                                          <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900">
                                                      {selected.price}
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </section>
      );
};

export default OurBest;
