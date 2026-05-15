import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Crispy Lechon Manok 🍗
            </h1>

            <p className="mt-6 text-lg text-orange-100">
              Don C. style roasted chicken — juicy, smoky, at sobrang sarap!
              Freshly grilled araw-araw.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-100 transition">
                Order Now
              </button>

              <Link to="/shop">
                <button className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition">
                  View Menu
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=60"
              alt="Lechon Manok"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Bakit Masarap Dito? 🔥
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🍗</div>
            <h3 className="text-xl font-bold mb-2">Freshly Roasted</h3>
            <p className="text-gray-600">
              Laging bagong luto para juicy at malasa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2">Smoky Flavor</h3>
            <p className="text-gray-600">
              Perfect roasted taste na babalik-balikan.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Mainit na pagkain diretso sa bahay mo.
            </p>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Don C. Lechon Manokan ⭐
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=60"
                alt="Classic Lechon Manok"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Classic Lechon Manok
                </h3>

                <p className="text-gray-600 mt-2">
                  Juicy, crispy roasted chicken.
                </p>

                <p className="text-orange-600 font-bold text-2xl mt-4">₱380</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1625944525533-473fbbda5c16?auto=format&fit=crop&w=800&q=60"
                alt="Garlic Lechon Manok"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Garlic Lechon Manok
                </h3>

                <p className="text-gray-600 mt-2">
                  Rich garlic flavor, tender meat.
                </p>

                <p className="text-orange-600 font-bold text-2xl mt-4">₱400</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1625944525630-7b6c8d6c0f7e?auto=format&fit=crop&w=800&q=60"
                alt="Spicy Lechon Manok"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Spicy Lechon Manok
                </h3>

                <p className="text-gray-600 mt-2">
                  May tamang anghang na babalik-balikan.
                </p>

                <p className="text-orange-600 font-bold text-2xl mt-4">₱400</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
