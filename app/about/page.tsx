"use client";

const AboutPage = () => {
      return (
            <div className="min-h-screen bg-orange-50/40 text-stone-900 font-serif overflow-x-hidden">
                  <header className="bg-white border-b border-orange-100 text-center px-4 py-8 sm:py-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-stone-900 mb-1">
                              About Haveli
                        </h1>

                        <p className="text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase text-stone-400 font-sans">
                              Our Heritage & Passion
                        </p>

                        <div className="flex items-center justify-center gap-3 mt-4 max-w-xs mx-auto text-[#E85D04] text-xs">
                              <span className="flex-1 h-px bg-linear-to-r from-transparent to-orange-200" />
                              ✦ ◈ ✦
                              <span className="flex-1 h-px bg-linear-to-l from-transparent to-orange-200" />
                        </div>
                  </header>

                  <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                        <section className="mb-14 sm:mb-16">
                              <div className="mb-6 sm:mb-8">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                                          Our Story
                                    </h2>

                                    <div className="flex items-center gap-3 text-[#E85D04] text-xs mb-6">
                                          <span className="h-px w-12 bg-orange-200" />
                                          ✦
                                          <span className="h-px w-12 bg-orange-200" />
                                    </div>
                              </div>

                              <div className="space-y-4 font-sans text-sm sm:text-base text-stone-800 leading-relaxed">
                                    <p>
                                          Haveli was born from a passion for
                                          authentic North Indian cuisine and a
                                          commitment to preserving traditional
                                          recipes passed down through
                                          generations. Founded in 2010, our
                                          restaurant stands as a testament to
                                          the art of slow-cooked, flavor-rich
                                          dishes that tell stories of heritage
                                          and warmth.
                                    </p>

                                    <p>
                                          Every dish on our menu is a reflection
                                          of our founder&apos;s childhood
                                          memories in the bustling bazaars of
                                          Delhi, where the aromas of spices
                                          filled the air and families gathered
                                          to celebrate food and togetherness.
                                          We&apos;ve recreated that magic here,
                                          bringing you an experience that
                                          transcends mere dining.
                                    </p>

                                    <p>
                                          From our signature Butter Chicken to
                                          our carefully crafted breads, each
                                          recipe is prepared with the finest
                                          ingredients and traditional
                                          techniques. We believe in honoring the
                                          past while celebrating the present.
                                    </p>
                              </div>
                        </section>

                        <Divider />

                        <section className="mb-14 sm:mb-16">
                              <SectionTitle title="Ambience & Experience" />

                              <div className="space-y-4 font-sans text-sm sm:text-base text-stone-800 leading-relaxed">
                                    <p>
                                          Walking into Haveli is like stepping
                                          into a warm embrace. Our dining space
                                          is thoughtfully designed with
                                          traditional Indian architecture, warm
                                          amber lighting, and curated artwork
                                          that celebrates our cultural heritage.
                                    </p>

                                    <p>
                                          The soft melodies of Indian classical
                                          music create an atmosphere of calm
                                          sophistication, while the inviting
                                          aroma of our kitchens sets the stage
                                          for an unforgettable culinary journey.
                                          Whether you&apos;re here for an
                                          intimate dinner or a family
                                          celebration, every moment is crafted
                                          to be special.
                                    </p>

                                    <p>
                                          Our attentive staff takes pride in
                                          understanding your preferences and
                                          ensuring that each visit leaves you
                                          with memories worth savoring.
                                    </p>
                              </div>
                        </section>

                        <Divider />

                        <section className="mb-14 sm:mb-16">
                              <SectionTitle title="Our Values" />

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    <ValueCard
                                          icon="🌶️"
                                          title="Fresh Ingredients"
                                          text="We source the finest, freshest ingredients from trusted suppliers. Every spice is carefully selected, every vegetable handpicked for quality."
                                    />

                                    <ValueCard
                                          icon="📖"
                                          title="Traditional Recipes"
                                          text="Our recipes are time-honored traditions, perfected over decades. We respect the craft and honor the heritage with every plate we serve."
                                    />

                                    <ValueCard
                                          icon="❤️"
                                          title="Warm Hospitality"
                                          text="Hospitality isn't just a service—it's a way of life. We treat every guest like family, creating moments that linger long after the meal ends."
                                    />
                              </div>
                        </section>

                        <Divider />

                        <section className="mb-16">
                              <SectionTitle title="Visit Us" />

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                    <div className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-6">
                                          <h3 className="text-lg font-bold text-stone-900 mb-4">
                                                Address
                                          </h3>

                                          <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                                                123 Heritage Street
                                                <br />
                                                New Delhi, Delhi 110001
                                                <br />
                                                India
                                          </p>

                                          <a
                                                href="https://maps.google.com"
                                                className="inline-flex items-center justify-center bg-[#E85D04] font-semibold text-white px-5 sm:px-6 py-2 rounded-full text-sm font-sans hover:bg-[#fe6906] transition-colors"
                                          >
                                                Get Directions
                                          </a>
                                    </div>

                                    <div className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-6">
                                          <h3 className="text-lg font-bold text-stone-900 mb-4">
                                                Hours & Contact
                                          </h3>

                                          <div className="font-sans text-stone-700 space-y-3 mb-4">
                                                <div>
                                                      <p className="text-sm font-semibold text-stone-900">
                                                            Mon - Thu
                                                      </p>
                                                      <p className="text-sm">
                                                            11:00 AM - 11:00 PM
                                                      </p>
                                                </div>

                                                <div>
                                                      <p className="text-sm font-semibold text-stone-900">
                                                            Fri - Sun
                                                      </p>
                                                      <p className="text-sm">
                                                            11:00 AM - 12:00 AM
                                                      </p>
                                                </div>

                                                <div className="pt-2 space-y-1 break-words">
                                                      <p className="text-sm">
                                                            📞{" "}
                                                            <span className="font-semibold">
                                                                  +91 (11)
                                                                  4567-8900
                                                            </span>
                                                      </p>
                                                      <p className="text-sm">
                                                            ✉️{" "}
                                                            <span className="font-semibold">
                                                                  hello@spiceandember.com
                                                            </span>
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="mt-8 bg-orange-50/60 border border-orange-100 rounded-2xl p-5 sm:p-8 text-center">
                                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                                          Plan Your Visit
                                    </h3>

                                    <p className="font-sans text-sm sm:text-base text-stone-700 mb-6 max-w-2xl mx-auto">
                                          We accept reservations for groups and
                                          special occasions. Contact us to book
                                          your table.
                                    </p>

                                    <button className="bg-[#E85D04] text-white px-6 sm:px-8 py-3 rounded-full font-sans font-semibold hover:bg-[#fe6906] transition-colors">
                                          Reserve a Table
                                    </button>
                              </div>
                        </section>
                  </main>
            </div>
      );
};

const SectionTitle = ({ title }: { title: string }) => {
      return (
            <div className="mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                        {title}
                  </h2>

                  <div className="flex items-center gap-3 text-[#E85D04] text-xs mb-6">
                        <span className="h-px w-12 bg-orange-200" />
                        ✦
                        <span className="h-px w-12 bg-orange-200" />
                  </div>
            </div>
      );
};

const ValueCard = ({
      icon,
      title,
      text,
}: {
      icon: string;
      title: string;
      text: string;
}) => {
      return (
            <div className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-6">
                  <div className="bg-orange-50 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-[#E85D04] text-lg font-serif font-bold">
                        {icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3">
                        {title}
                  </h3>

                  <p className="font-sans text-stone-700 text-sm leading-relaxed">
                        {text}
                  </p>
            </div>
      );
};

const Divider = () => {
      return (
            <div className="flex items-center justify-center gap-3 text-[#E85D04] text-xs my-10 sm:my-12">
                  <span className="flex-1 h-px bg-orange-100" />
                  ✦ ◈ ✦
                  <span className="flex-1 h-px bg-orange-100" />
            </div>
      );
};

export default AboutPage;
