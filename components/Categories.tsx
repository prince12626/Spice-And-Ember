import { categories } from "@/assets/assets";
import Image from "next/image";

const Categories = () => {
      return (
            <div className="w-[90vw] mx-auto my-12">
                  <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        Categories
                  </h2>
                  <p className="text-gray-500 text-lg max-w-2xl mb-6">
                        Our carefully curated selections — from sizzling
                        starters to indulgent desserts, crafted to satisfy every
                        craving.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category) => {
                              return (
                                    <div
                                          key={category.category}
                                          className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-4/3"
                                    >
                                          <Image
                                                src={category.image}
                                                alt={category.category}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                          />

                                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />

                                          <div className="absolute bottom-4 left-0 right-0 text-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                                <p className="text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
                                                      {category.category}
                                                </p>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default Categories;
