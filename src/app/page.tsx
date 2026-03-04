/* ==========================================================================
   GOLIARD LANDING PAGE
   A lifestyle platform for women in graduate school navigating the beautiful 
   contradiction of being deeply intellectual AND deeply alive.
   ========================================================================== */

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ===================================================================
          HERO SECTION
          Full-viewport, bold serif headline, warm textured background, CTA
        =================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Warm textured background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 via-secondary-300 to-primary-300/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Brand name with subtle animation */}
          <h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-dark-deep mb-6 tracking-tight animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Goliard
          </h1>
          
          {/* Tagline */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-dark-warm max-w-3xl mx-auto mb-8 font-light leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
            style={{ opacity: 0 }}
          >
            For women who balance <span className="italic text-primary-700">brilliance</span> with{" "}
            <span className="italic text-primary-700">wildness</span>.
          </p>
          
          {/* Sub-headline naming the tension */}
          <p 
            className="text-lg md:text-xl text-dark-500 max-w-2xl mx-auto mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]"
            style={{ opacity: 0 }}
          >
            The lifestyle platform where academia meets adventure, love meets ambition, 
            and you don't have to choose.
          </p>
          
          {/* CTA Button */}
          <a 
            href="#waitlist"
            className="inline-block bg-primary-700 text-cream px-10 py-4 text-lg font-medium rounded-full 
                       hover:bg-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-xl
                       animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]"
            style={{ opacity: 0 }}
          >
            Join the Waitlist
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===================================================================
          TENSION SECTION
          Names what she feels — the guilt of wanting fun, the loneliness of 
          being "too ambitious" or "too free".
        =================================================================== */}
      <section className="py-24 px-6 bg-dark-deep text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nobody told you that getting your Masters would also mean{" "}
            <span className="italic text-secondary-500">explaining</span> why you still want to{" "}
            <span className="italic text-secondary-500">dance</span>,{" "}
            <span className="italic text-secondary-500">travel</span>,{" "}
            <span className="italic text-secondary-500">fall in love</span>, and{" "}
            <span className="italic text-secondary-500">stay out late</span>.
          </h2>
          
          <p className="text-xl text-dark-500 max-w-2xl mx-auto leading-relaxed">
            The world expects you to choose. Be serious or be free. Be academic or be spontaneous. 
            Be in love or be ambitious. But what if you don't want either/or?
          </p>
          
          <p className="text-2xl md:text-3xl italic text-secondary-500 mt-10">
            What if you want both?
          </p>
        </div>
      </section>

      {/* ===================================================================
          FEATURES / PILLARS SECTION
          5 pillars: World Map, Reading Room, Love & Latitude, Nature Diaries, 
          Pan-African Thread
        =================================================================== */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-dark-deep mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What Goliard Gives You
            </h2>
            <p className="text-lg text-dark-500 max-w-xl mx-auto">
              Five spaces designed for the woman who refuses to fragment herself.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1: The World Map */}
            <article className="group bg-secondary-100 rounded-2xl p-8 hover:bg-secondary-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-deep mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                The World Map
              </h3>
              <p className="text-dark-500 leading-relaxed mb-4">
                Travel for budget grad students — hidden gems, student discounts, visa tips, 
                and the art of seeing the world while your bank account says otherwise.
              </p>
              <span className="text-sm text-primary-700 font-medium">Coming Soon →</span>
            </article>
            
            {/* Pillar 2: The Reading Room */}
            <article className="group bg-secondary-100 rounded-2xl p-8 hover:bg-secondary-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-deep mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Reading Room
              </h3>
              <p className="text-dark-500 leading-relaxed mb-4">
                Academic wellness, thesis support, burnout guides, and the honest conversations 
                about mental health that your department won't have.
              </p>
              <span className="text-sm text-primary-700 font-medium">Coming Soon →</span>
            </article>
            
            {/* Pillar 3: Love & Latitude */}
            <article className="group bg-secondary-100 rounded-2xl p-8 hover:bg-secondary-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-deep mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                Love & Latitude
              </h3>
              <p className="text-dark-500 leading-relaxed mb-4">
                Relationships while being mobile, ambitious, and emotionally complex. 
                Long-distance, international, and everything in between.
              </p>
              <span className="text-sm text-primary-700 font-medium">Coming Soon →</span>
            </article>
            
            {/* Pillar 4: The Nature Diaries */}
            <article className="group bg-secondary-100 rounded-2xl p-8 hover:bg-secondary-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-deep mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Nature Diaries
              </h3>
              <p className="text-dark-500 leading-relaxed mb-4">
                Slow travel, ecotourism, nature retreats, and the healing that comes 
                from forests, mountains, and bodies of water.
              </p>
              <span className="text-sm text-primary-700 font-medium">Coming Soon →</span>
            </article>
            
            {/* Pillar 5: The Pan-African Thread */}
            <article className="group bg-secondary-100 rounded-2xl p-8 hover:bg-secondary-300 transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-deep mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Pan-African Thread
              </h3>
              <p className="text-dark-500 leading-relaxed mb-4">
                Afrodiaspora perspectives on education, identity, belonging. 
                Stories from Lagos to London, Accra to Atlanta.
              </p>
              <span className="text-sm text-primary-700 font-medium">Coming Soon →</span>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          COMMUNITY SECTION
          3 fictional member portraits — Name, city, degree, dream destination
        =================================================================== */}
      <section className="py-24 px-6 bg-dark-warm text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Who You'll Meet Here
            </h2>
            <p className="text-lg text-secondary-300 max-w-xl mx-auto">
              Women who understand that ambition and adventure aren't opposites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Member 1 */}
            <div className="bg-dark-800 rounded-2xl p-8 text-center hover:bg-dark-deep transition-all duration-300">
              <div className="w-24 h-24 bg-primary-500/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-4xl text-secondary-500" style={{ fontFamily: "var(--font-cormorant)" }}>A</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-cream mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Adaeze
              </h3>
              <p className="text-secondary-500 mb-2">Lagos, Nigeria</p>
              <p className="text-dark-500 mb-4">PhD in Urban Planning</p>
              <p className="text-sm text-secondary-300 italic">
                "Dream destination: Lisbon — I want to write my dissertation in a café by the Tagus."
              </p>
            </div>
            
            {/* Community Member 2 */}
            <div className="bg-dark-800 rounded-2xl p-8 text-center hover:bg-dark-deep transition-all duration-300">
              <div className="w-24 h-24 bg-primary-500/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-4xl text-secondary-500" style={{ fontFamily: "var(--font-cormorant)" }}>K</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-cream mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Khadija
              </h3>
              <p className="text-secondary-500 mb-2">Atlanta, USA</p>
              <p className="text-dark-500 mb-4">Masters in Public Health</p>
              <p className="text-sm text-secondary-300 italic">
                "Dream destination: Zanzibar — to understand my roots and my grandmother's stories."
              </p>
            </div>
            
            {/* Community Member 3 */}
            <div className="bg-dark-800 rounded-2xl p-8 text-center hover:bg-dark-deep transition-all duration-300">
              <div className="w-24 h-24 bg-primary-500/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-4xl text-secondary-500" style={{ fontFamily: "var(--font-cormorant)" }}>S</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-cream mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Siri
              </h3>
              <p className="text-secondary-500 mb-2">London, UK</p>
              <p className="text-dark-500 mb-4">PhD in African Studies</p>
              <p className="text-sm text-secondary-300 italic">
                "Dream destination: Paris — for the archives, the food, and the chaos of it all."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          MANIFESTO SECTION
          Second-person letter "Dear Goliard," — names her contradictions with love.
          Tone: wise older sister who studied abroad and fell in love in Lisbon.
        =================================================================== */}
      <section className="py-24 px-6 bg-primary-700 text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-12 text-center"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dear Goliard,
          </h2>
          
          <div className="prose prose-lg mx-auto text-cream/90 leading-relaxed space-y-6">
            <p className="text-xl md:text-2xl font-display" style={{ fontFamily: "var(--font-cormorant)" }}>
              You were told you couldn't have it all. That choosing academia meant choosing solitude. 
              That loving freely meant being less serious. That traveling meant falling behind.
            </p>
            
            <p>
              But nobody told you about the women who did both. Who finished their theses AND 
              watched the sunset in Santorini. Who fell in love deeply AND published their research. 
              Who took Gap years AND graduated with honors.
            </p>
            
            <p>
              Goliard is for you — the woman who reads theory by day and dances by night. 
              Who takes notes in the library and learns salsa on the weekends. Who is unapologetically 
              intellectual AND unapologetically alive.
            </p>
            
            <p>
              You are not broken for wanting more. You are not too much for being whole. 
              The world will try to make you choose. We are here to remind you that you don't have to.
            </p>
            
            <p className="text-xl md:text-2xl font-display italic" style={{ fontFamily: "var(--font-cormorant)" }}>
              Welcome home, sister. You've been waiting for this space.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          WAITLIST CTA SECTION
          Headline: "She's building something. Are you in?"
          Email input + button
          Social proof placeholder
        =================================================================== */}
      <section id="waitlist" className="py-24 px-6 bg-cream-warm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-dark-deep mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            She's building something. <span className="text-primary-700 italic">Are you in?</span>
          </h2>
          
          <p className="text-lg text-dark-500 mb-10 max-w-xl mx-auto">
            Join the waitlist to be the first to know when we launch. Early access members get 
            exclusive access to our community and beta features.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full border-2 border-secondary-300 bg-cream text-dark-deep 
                         placeholder:text-dark-500/50 focus:outline-none focus:border-primary-500 transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-primary-700 text-cream font-medium rounded-full 
                         hover:bg-primary-500 transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
            </button>
          </form>
          
          {/* Social proof placeholder */}
          <p className="text-sm text-dark-500">
            <span className="font-semibold text-primary-700">2,847</span> women already on the waitlist
          </p>
        </div>
      </section>

      {/* ===================================================================
          FOOTER SECTION
          Logo, links, social handles
        =================================================================== */}
      <footer className="py-16 px-6 bg-dark-deep text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-2">
              <h3 
                className="font-display text-4xl font-semibold text-cream mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Goliard
              </h3>
              <p className="text-secondary-300 max-w-sm mb-6">
                A lifestyle platform for women who balance brilliance with wildness. 
                Because you shouldn't have to choose.
              </p>
              
              {/* Social handles */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-cream mb-4">Explore</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-secondary-300 hover:text-primary-500 transition-colors">Features</a></li>
                <li><a href="#community" className="text-secondary-300 hover:text-primary-500 transition-colors">Community</a></li>
                <li><a href="#manifesto" className="text-secondary-300 hover:text-primary-500 transition-colors">Manifesto</a></li>
                <li><a href="#waitlist" className="text-secondary-300 hover:text-primary-500 transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            
            {/* AI Features (coming soon) */}
            <div>
              <h4 className="font-semibold text-cream mb-4">Coming Soon</h4>
              <ul className="space-y-3 text-sm text-secondary-300">
                <li>Personalized Feed</li>
                <li>AI Chatbot "Goldie"</li>
                <li>Speech Recognition</li>
                <li>Travel Photo Analysis</li>
                <li>Burnout Prediction</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-300">
              © {new Date().getFullYear()} Goliard. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
