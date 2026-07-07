pages/index.js
import React, { useState } from 'react';
import Head from 'next/head';

export default function TopStayInnProduction() {
  const [lang, setLang] = useState('EN');
  const [chatOpen, setChatOpen] = useState(true);
  const [chatStep, setChatStep] = useState(1);
  const [activeReview, setActiveReview] = useState(0);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to Top Stay Inn 🌟\n\nI can instantly configure your perfect stay in Kasane.\n\nWhat brings you to beautiful Botswana?' }
  ]);

  const content = {
    EN: {
      brand: "TOP STAY INN",
      navHome: "Home",
      navRooms: "Suites",
      navExperiences: "Activities & Safaris",
      navGallery: "Gallery Trace",
      navReviews: "Guest Feedback",
      navContact: "Contact Node",
      heroTitle: "Your Premier Gateway Comfort Point in Kasane",
      heroSub: "An elite executive lodge featuring floor-to-ceiling glass suites, a pristine outdoor pool oasis, and a thatched braai gazebo on Sedudu Road. Perfectly configured for international safaris and high-end corporate transits.",
      btnBook: "SECURE RESERVATION",
      btnExplore: "VIEW INFRASTRUCTURE",
      previewTitle: "Executive Suite Configurations",
      itineraryTitle: "Aeronautical Itineraries & Regional Activities",
      itinerarySub: "Premium travel vectors and adventure logistics anchored directly from your Kasane operational base.",
      reviewsTitle: "Verified Guest Experiences",
    },
    FR: {
      brand: "TOP STAY INN",
      navHome: "Accueil",
      navRooms: "Suites",
      navExperiences: "Activités & Safaris",
      navGallery: "Galerie",
      navReviews: "Avis Clients",
      navContact: "Contact",
      heroTitle: "Votre Havre de Confort Idéal à Kasane",
      heroSub: "Un établissement d'exception comprenant des suites exécutives premium, une piscine extérieure étincelante et un gazebo traditionnel pour barbecue. Parfaitement configuré pour les safaris internationaux et les voyageurs d'affaires.",
      btnBook: "RÉSERVER VOTRE SÉJOUR",
      btnExplore: "EXPLOREZ L'INFRASTRUCTURE",
      previewTitle: "Configurations des Suites Exécutives",
      itineraryTitle: "Itinéraires Aéronautiques & Activités Régionales",
      itinerarySub: "Logistique de voyage haut de gamme et safaris exclusifs ancrés depuis votre base opérationnelle à Kasane.",
      reviewsTitle: "Témoignages Clients Vérifiés",
    }
  };

  const t = content[lang];

  const suites = [
    {
      title: "Panoramic Glass King Suite",
      img: "/1000008611.webp",
      badge: "EXECUTIVE SUITE",
      desc: "Features expansive floor-to-ceiling glass arrays maximizing premium natural light. Equipped with independent split-system climate controls, vibrant modern structural accents, high-speed Wi-Fi connectivity, and dedicated working surfaces."
    },
    {
      title: "Executive Courtyard Oasis",
      img: "/1000008661.jpg",
      badge: "LEISURE MATRIX",
      desc: "Immediate steps away from the crystalline blue lap pool layout, beautifully paired with premium artificial turf accents, custom lounging areas, and our signature traditional thatched wooden gazebo with stone braai integration."
    },
    {
      title: "Corporate Hospitality & Dining",
      img: "/1000008617.webp",
      badge: "DINING FACILITY",
      desc: "Thoughtfully arranged catering layouts supporting executive breakfast boards, private corporate meals, and unified safari group briefings. Seamlessly connected with full kitchen service logic."
    }
  ];

  const activities = [
    {
      title: "Chobe River Boat Cruises",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800",
      type: "WATER-BASED SAFARI",
      desc: "Witness high-density elephant migratory river crossings, hippopotamus pods, and predators tracking water sources directly from customized premium skiffs. Just 10 minutes to the primary Chobe launch terminal vectors."
    },
    {
      title: "Okavango Delta Scenic Flights",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
      type: "AERONAUTICAL VECTOR",
      desc: "Experience breathtaking, low-altitude flights across the world's most pristine inland water network. Charter flights depart seamlessly from the newly modernized Kasane International Airport infrastructure."
    },
    {
      title: "Victoria Falls Day Excursions",
      img: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0edd?auto=format&fit=crop&q=80&w=800",
      type: "CROSS-BORDER ADVENTURE",
      desc: "Uncompromising access to the majestic Smoke that Thunders. Top Stay Inn acts as your structural transit anchor, offering coordinated 1-hour ground transport connections directly through nearby tri-border customs gates."
    },
    {
      title: "Chobe National Park Game Drives",
      img: "https://images.unsplash.com/photo-1511185307590-3c2d37a75ee0?auto=format&fit=crop&q=80&w=800",
      type: "TERRESTRIAL SAFARI",
      desc: "Deploy into deep game paths via open 4x4 safari vehicles. Unmatched proximity vectors to encounter massive lion prides, elusive leopards, and dense herds of Cape buffalo roaming the riverfront tracks."
    }
  ];

  const reviews = [
    {
      name: "Dr. Jean-Marc L.",
      country: "France 🇫🇷",
      text: "The architectural framework of the suites provides spectacular light. Having a dedicated work surface with flawless Wi-Fi made handling corporate check-ins between Chobe game drives completely seamless. Highly recommend Top Stay Inn.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sarah & David M.",
      country: "United Kingdom 🇬🇧",
      text: "Beautifully maintained property! Coming back from intense day-long safaris to unwind poolside by the thatched braai gazebo felt like absolute luxury. The staff coordination for our Victoria Falls transit logic was precise.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Thabo K.",
      country: "Botswana 🇧🇼",
      text: "Top-tier hospitality structure right in Kasane. Exceptional climate control parameters inside the rooms, and absolute proximity to the airport nodes makes it the perfect logistical base for corporate assignments.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  const handleOptionClick = (optionText, nextStep) => {
    const newMessages = [...messages, { sender: 'user', text: optionText }];
    setMessages(newMessages);
    setChatStep(0);

    setTimeout(() => {
      if (nextStep === 2) {
        setMessages([
          ...newMessages,
          { sender: 'bot', text: 'Excellent choice. Chobe safari logistics, professional game drives, and enterprise-grade Wi-Fi are fully live. Would you like to check room availability coordinates?' }
        ]);
        setChatStep(2);
      } else if (nextStep === 3) {
        setMessages([
          ...newMessages,
          { sender: 'bot', text: 'Understood. We offer structured corporate layouts, peaceful dining configurations, and swift airport transit logic. Shall we initiate direct booking paths?' }
        ]);
        setChatStep(3);
      } else {
        setMessages([
          ...newMessages,
          { sender: 'bot', text: 'Perfect. Your preference matrix has been securely recorded. Redirecting your parameters straight to our Sacrosanct Operations Engine via WhatsApp connection...' }
        ]);
        setChatStep(4);
      }
    }, 700);
  };

  return (
    <div className="bg-[#fcfbfa] text-stone-800 font-sans min-h-screen relative antialiased selection:bg-amber-800 selection:text-white">
      <Head>
        <title>Top Stay Inn | Premium Executive Lodge Kasane</title>
        <meta name="description" content="Luxury Accommodation and Aeronautical Safari Gateway in Kasane, Botswana" />
      </Head>

      {/* --- PRE-HEADER BRAND CONTROL BAR --- */}
      <div className="bg-stone-900 text-stone-400 text-[11px] py-2.5 px-4 md:px-12 flex justify-between items-center border-b border-stone-800 font-mono">
        <div className="flex gap-4 items-center tracking-wider">
          <span>TEL: <strong className="text-stone-200">+267 6241222</strong></span>
          <span className="text-stone-700">|</span>
          <span>CELL: <strong className="text-stone-200">+267 73162006 / 73743399</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-stone-300 text-[10px] tracking-tight hidden sm:inline">SACROSANCT AUTOMATION LIVE</span>
        </div>
      </div>

      {/* --- INTERACTIVE HEADER --- */}
      <header className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-40 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-baseline gap-1 group cursor-pointer">
            <span className="font-black text-2xl tracking-tighter text-stone-950 group-hover:text-amber-800 transition-colors">TOP STAY</span>
            <span className="font-light text-xl tracking-widest text-amber-700">INN</span>
          </div>

          <nav className="hidden lg:flex space-x-8 font-semibold text-xs uppercase tracking-widest text-stone-600">
            <a href="#home" className="text-amber-800 border-b-2 border-amber-800 pb-1">{t.navHome}</a>
            <a href="#rooms" className="hover:text-stone-900 transition-colors">{t.navRooms}</a>
            <a href="#activities" className="hover:text-stone-900 transition-colors">{t.navExperiences}</a>
            <a href="#reviews" className="hover:text-stone-900 transition-colors">{t.navReviews}</a>
            <a href="#gallery" className="hover:text-stone-900 transition-colors">{t.navGallery}</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">{t.navContact}</a>
          </nav>

          <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200">
            <button onClick={() => setLang('EN')} className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wider transition-all ${lang === 'EN' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-500'}`}>🇬🇧 EN</button>
            <button onClick={() => setLang('FR')} className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wider transition-all ${lang === 'FR' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-500'}`}>🇫🇷 FR</button>
          </div>
        </div>
      </header>

      {/* --- HERO AREA --- */}
      <section id="home" className="relative bg-stone-950 overflow-hidden min-h-[620px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/1000008613.webp" alt="Top Stay Inn Property Frame" className="w-full h-full object-cover opacity-40 transform scale-100 object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-amber-400 uppercase tracking-widest font-mono text-xs bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-block mb-6">
              🔑 Premium Executive Lodging Node
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-light mb-8 max-w-2xl">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#rooms" className="bg-amber-700 hover:bg-amber-600 text-white font-bold tracking-widest text-xs px-8 py-4 rounded shadow-lg transition-all text-center">
                {t.btnBook}
              </a>
              <a href="#activities" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold tracking-widest text-xs px-8 py-4 rounded transition-all text-center">
                {t.btnExplore}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE HIGHLIGHT MATRIX --- */}
      <section id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-12 border-b border-stone-200 pb-4">
          <div>
            <span className="text-amber-800 font-mono text-xs font-bold tracking-widest uppercase block mb-1">01 / PROPERTY PORTFOLIO</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-950 uppercase">{t.previewTitle}</h2>
          </div>
          <p className="text-stone-500 text-xs font-mono max-w-xs mt-2 md:mt-0">Sedudu Road Coordinates, Secure perimeter control infrastructure equipped with electric fencing modules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((suite, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200/80 group flex flex-col h-full">
              <div className="h-60 overflow-hidden relative bg-stone-100">
                <img src={suite.img} alt={suite.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-stone-950/90 backdrop-blur text-white font-mono text-[10px] tracking-widest font-bold px-2.5 py-1 rounded">{suite.badge}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-lg text-stone-950 mb-3 group-hover:text-amber-800 transition-colors">{suite.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-6 flex-1">{suite.desc}</p>
                <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-[11px] font-mono">
                  <span className="text-stone-400">DSTV &bull; AC &bull; WI-FI</span>
                  <span className="text-amber-800 font-bold tracking-wider uppercase cursor-pointer">Inquire Vector &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETAILED UPSELL & ACTIVITIES SECTION --- */}
      <section id="activities" className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 tracking-widest font-mono text-xs font-bold block mb-2 uppercase">CHOBE ECOTOURISM OPERATIONAL CORE</span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-4">{t.itineraryTitle}</h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto">{t.itinerarySub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, idx) => (
              <div key={idx} className="bg-stone-950 border border-stone-800/80 rounded-xl overflow-hidden group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img src={act.img} alt={act.title} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                  <span className="absolute bottom-3 left-4 font-mono text-[10px] bg-amber-700 text-white font-bold px-2 py-0.5 rounded tracking-wider">{act.type}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold mb-2 text-stone-100 group-hover:text-amber-400 transition-colors">{act.title}</h3>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light mb-6 flex-1">{act.desc}</p>
                  <div className="bg-stone-900 border border-stone-800 p-2.5 rounded text-center text-[10px] font-mono tracking-tighter text-amber-400 uppercase">
                    LOGISTICAL DEPOT: CONFIGURED AT INN
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE REVIEWS ASPECT SECTION --- */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-stone-50 border-y border-stone-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div>
            <span className="text-amber-800 font-mono text-xs font-bold tracking-widest uppercase block mb-1">02 / GUEST JOURNAL</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-950 uppercase mb-4">{t.reviewsTitle}</h2>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">Explore authenticated feedback streams verified directly from our global business pipelines and conservation expedition logs.</p>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveReview(i)} 
                  className={`w-3 h-3 rounded-full transition-all ${activeReview === i ? 'bg-amber-800 w-6' : 'bg-stone-300'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/80 md:col-span-2">
              <div className="text-amber-500 mb-3 text-sm">{reviews[activeReview].rating}</div>
              <p className="text-stone-800 text-sm italic leading-relaxed mb-6">"{reviews[activeReview].text}"</p>
              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <span className="font-black text-xs text-stone-950 tracking-wide uppercase">{reviews[activeReview].name}</span>
                <span className="text-stone-400 font-mono text-[11px]">{reviews[activeReview].country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MID-PAGE INTERACTIVE PROOF TRACE --- */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-amber-900/5 border border-amber-900/10 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-stone-200 shadow-sm">
            <img src="/1000008663.jpg" alt="Guests checking in at Top Stay Inn" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-amber-800 font-mono text-xs font-bold uppercase tracking-widest block">AUTHENTIC ENCOUNTERS</span>
            <h3 className="text-2xl font-black text-stone-950 tracking-tight uppercase">Trusted by Global Travelers</h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Top Stay Inn merges the operational efficiency demanded by corporate assignment vectors with the deep, welcoming aura required for cross-border safaris. Our physical hosting layers ensure you remain integrated, comfortable, and perfectly positioned in the Chobe enclave.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-stone-950 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded tracking-widest uppercase">
                ⚡ VERIFIED OPERATIONAL PROPERTY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SITE NODE --- */}
      <footer id="contact" className="bg-stone-950 text-stone-500 text-xs py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-stone-300 text-sm tracking-widest">TOP STAY INN</p>
            <p className="mt-1 font-light">Sedudu Road, Kasane, Botswana. Your ultimate gateway node.</p>
          </div>
          <div className="font-mono text-stone-400 text-center md:text-right">
            <p>Powered by <span className="text-amber-500 font-bold">Sacrosanct Tech &amp; Automation&trade;</span></p>
            <p className="text-[10px] text-stone-600 mt-1">Next.js Engine Production Build &bull; All Rights Reserved 2026</p>
          </div>
        </div>
      </footer>

      {/* =========================================================
          🚀 FULLY INTERACTIVE LIVE CONCIERGE CHAT MODULE 
          ========================================================= */}
      <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full px-4 sm:px-0">
        {chatOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/80 overflow-hidden flex flex-col h-[460px] animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-stone-950 text-white px-4 py-3.5 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping absolute"></div>
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full relative"></div>
                <div>
                  <h4 className="font-bold tracking-tight text-xs text-stone-100">Sacrosanct AI Concierge&trade;</h4>
                  <p className="text-[10px] text-stone-400 font-mono leading-none mt-0.5">Automated Reservation Suite</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-stone-400 hover:text-white text-sm font-bold p-1">✕</button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-stone-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs whitespace-pre-wrap leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-amber-700 text-white rounded-tr-none font-medium' : 'bg-white text-stone-800 border border-stone-200/60 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatStep === 0 && <div className="flex justify-start"><div className="bg-white border border-stone-200/60 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs text-stone-400 animate-pulse">Routing configuration vectors...</div></div>}
            </div>

            <div className="p-3 bg-white border-t border-stone-100 space-y-2">
              {chatStep === 1 && (
                <div className="flex flex-col gap-1.5">
                  <button onClick={() => handleOptionClick("Leisure & Safaris 🐾", 2)} className="w-full text-left bg-stone-100 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-800 hover:text-amber-900 transition-all font-medium text-xs py-2 px-3 rounded-xl">Leisure &amp; Safaris 🐾</button>
                  <button onClick={() => handleOptionClick("Business / Government Assignment 💼", 3)} className="w-full text-left bg-stone-100 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-800 hover:text-amber-900 transition-all font-medium text-xs py-2 px-3 rounded-xl">Business / Government Assignment 💼</button>
                </div>
              )}
              {chatStep === 2 && (
                <div className="flex flex-col gap-1.5">
                  <button onClick={() => handleOptionClick("View Premium Suites 🛏️", 4)} className="w-full text-left bg-stone-900 hover:bg-stone-800 text-white transition-all font-medium text-xs py-2 px-3 rounded-xl">View Premium Suites 🛏️</button>
                  <button onClick={() => handleOptionClick("Check Live Calendar Sync 📅", 4)} className="w-full text-left bg-stone-100 hover:bg-amber-50 border border-stone-200 text-stone-800 transition-all font-medium text-xs py-2 px-3 rounded-xl">Check Live Calendar Sync 📅</button>
                </div>
              )}
              {chatStep === 3 && (
                <div className="flex flex-col gap-1.5">
                  <button onClick={() => handleOptionClick("Connect to Reservations Node ⚡", 4)} className="w-full text-left bg-amber-700 hover:bg-amber-600 text-white transition-all font-medium text-xs py-2 px-3 rounded-xl text-center">Connect to Reservations Node ⚡</button>
                </div>
              )}
              {chatStep === 4 && <div className="text-center py-2 text-[10px] font-mono text-emerald-600 font-semibold tracking-tighter bg-emerald-50 rounded-xl border border-emerald-200">⚡ HANDOFF CHANNELS PREPARED FOR DEPLOYMENT</div>}
              <div className="flex gap-2 items-center pt-2 border-t border-stone-100 mt-2">
                <input type="text" placeholder="Type message coordinates..." disabled className="bg-stone-50 border border-stone-200 text-stone-400 text-xs px-3 py-1.5 rounded-lg flex-1 cursor-not-allowed" />
                <button disabled className="text-stone-300 p-1 cursor-not-allowed"><svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg></button>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => setChatOpen(true)} className="bg-stone-950 hover:bg-amber-800 text-white rounded-full p-4 shadow-2xl border border-stone-800 flex items-center justify-center group transition-all transform hover:scale-105 ml-auto">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <svg className="w-6 h-6 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}

