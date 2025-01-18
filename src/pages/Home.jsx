import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { FiArrowRight } from 'react-icons/fi';

    function Home() {
      const navigate = useNavigate();

      const handleShopNavigation = (hash) => {
        window.scrollTo(0, 0);
        navigate(`/shop${hash}`);
      };

      return (
        <div className="fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <img
                src="https://i.ibb.co/xLgwxQ4/download-16.jpg"
                alt="Abstract Shape"
                className="h-[300px] md:h-[500px] object-contain opacity-20 md:opacity-30 ml-[-50px] md:ml-0"
              />
              <img
                src="https://i.ibb.co/SwLWHyt/Tribal-metal-shape-3d-rendering-abstract-chrome-shape.jpg"
                alt="Tribal-metal-shape-3d-rendering-abstract-chrome-shape"
                className="h-[400px] md:h-[600px] object-contain opacity-20 md:opacity-30 mr-[-50px] md:mr-0"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="https://i.ibb.co/NYn3vmH/png.jpg"
                alt="Abstract Shape"
                className="h-[200px] md:h-[300px] object-contain opacity-10 md:opacity-15 transform translate-y-[-30px] md:translate-y-[-50px]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
            <div className="max-w-3xl text-center relative z-10">
              <h1 className="hero-title text-[60px] font-bold mb-4 md:mb-6">VULGAR</h1>
              <p className="text-[16px] md:text-[18px] text-white mb-6 md:mb-8 slide-up uppercase" style={{ fontFamily: 'Onyx, sans-serif', letterSpacing: '0.2em' }}>Discover our latest collection of premium clothing</p>
              <div className="flex justify-center gap-3">
                <Link
                  to="/shop"
                  className="inline-block border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-500"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="bg-zinc-900 py-6 px-4 text-center">
            <p className="text-gray-400 text-sm">
              New Arrivals: Check out our latest collection!
            </p>
          </section>

          {/* Lookbook Section */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl md:text-2xl font-light text-center mb-10 md:mb-12" style={{ fontFamily: 'Onyx, sans-serif', fontSize: '28px' }}>Lookbook</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div onClick={() => handleShopNavigation('#tribal-hoodie')} className="lookbook-item cursor-pointer">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src="https://i.ibb.co/9rB39fZ/VETEMETS.jpg"
                      alt="Tribal Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lookbook-overlay">
                    <div className="text-center">
                      <h3 className="text-2xl font-light mb-2">Tribal Collection</h3>
                      <div className="inline-flex items-center text-sm hover:ml-2 transition-all duration-300">
                        Explore Collection <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => handleShopNavigation('')} className="lookbook-item cursor-pointer">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src="https://i.ibb.co/VTtd2gy/HOMUNCULUS.jpg"
                      alt="Vagabond Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lookbook-overlay">
                    <div className="text-center">
                      <h3 className="text-2xl font-light mb-2">Vagabond Collection</h3>
                      <div className="inline-flex items-center text-sm hover:ml-2 transition-all duration-300">
                        Explore Collection <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl md:text-2xl font-light text-center mb-10 md:mb-12">Collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {[
                  { name: 'Women', description: 'Elegant essentials' },
                  { name: 'Men', description: 'Modern classics' },
                  { name: 'Accessories', description: 'Finishing touches' }
                ].map((category) => (
                  <Link to="/shop" key={category.name} className="group">
                    <div className="h-[250px] md:h-[400px] bg-zinc-900 mb-4 md:mb-6 product-card"></div>
                    <h3 className="text-lg font-light mb-2 md:mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-light mb-6 md:mb-8">Newsletter</h2>
              <p className="text-gray-400 text-sm mb-8 md:mb-10">Stay updated with our latest collections and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-transparent border border-zinc-800 px-3 py-1.5 text-sm focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button 
                  type="submit" 
                  className="px-4 py-1.5 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      );
    }

    export default Home;
