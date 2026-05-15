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
              Crispy Lechon Manok <br />& Juicy Grilled Liempo 🍗
            </h1>

            <p className="mt-6 text-lg text-orange-100">
              Sarap na babalik-balikan! Freshly grilled lechon manok at smoky
              liempo inspired by your favorite Filipino roast house.
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
              Araw-araw bagong luto para siguradong juicy at malasa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🔥</div>

            <h3 className="text-xl font-bold mb-2">Smoky Grilled Liempo</h3>

            <p className="text-gray-600">
              Perfect grilled flavor na bagay sa kanin at barkada.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🚚</div>

            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>

            <p className="text-gray-600">
              Mainit-init na pagkain delivered diretso sa bahay mo.
            </p>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Best Sellers ⭐
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* CARD */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=60"
                alt="Lechon Manok"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Classic Lechon Manok
                </h3>

                <p className="text-gray-600 mt-2">
                  Crispy outside, juicy inside.
                </p>

                <p className="text-orange-600 font-bold text-2xl mt-4">₱380</p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=60"
                alt="Liempo"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Smoky Grilled Liempo
                </h3>

                <p className="text-gray-600 mt-2">
                  Tender pork belly with smoky flavor.
                </p>

                <p className="text-orange-600 font-bold text-2xl mt-4">₱350</p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-orange-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
                alt="Spicy Chicken"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Spicy Lechon Manok
                </h3>

                <p className="text-gray-600 mt-2">
                  Perfect para sa mahilig sa anghang.
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
