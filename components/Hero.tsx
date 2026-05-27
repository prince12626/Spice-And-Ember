"use client";
import { slides } from "@/assets/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowRight } from "lucide-react";

const Hero = () => {
      return (
            <section className="relative w-full flex items-center justify-center h-[calc(100vh-56px)] cursor-default select-none">
                  <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full md:w-[90vw] h-full md:h-[90vh]"
                  >
                        {slides.map((slide, index) => (
                              <SwiperSlide
                                    key={index}
                                    className="relative w-full md:rounded-4xl h-full"
                              >
                                    <Image
                                          src={slide.image}
                                          alt={slide.title}
                                          fill
                                          priority={index === 0}
                                          className="object-cover md:rounded-4xl"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/5 to-black/5 md:rounded-4xl" />

                                    <div className="absolute bottom-6 left-5 md:bottom-10 md:left-10 text-white max-w-[85%] md:max-w-2xl">
                                          <h1 className="text-3xl sm:text-5xl md:text-7xl serif text-shadow-black font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                                {slide.title}
                                          </h1>
                                          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-4 md:mb-8 drop-shadow-md">
                                                {slide.description}
                                          </p>
                                          <button className="bg-[#E85D04] flex items-center gap-2 hover:bg-[#fe6906] hover:gap-5 text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg transition-all duration-300 cursor-pointer">
                                                View full Menu{" "}
                                                <ArrowRight size={18} />
                                          </button>
                                    </div>
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      );
};

export default Hero;
