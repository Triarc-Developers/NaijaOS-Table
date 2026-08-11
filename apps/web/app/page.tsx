export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
          NaijaOS-Table
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          A place for investors.
        </h1>
        <p className="text-lg text-neutral-300 mb-10">
          Join the Table: real strategies for credit building, investing, and using AI to build wealth, taught live by someone actually doing it.
        </p>
        
          href="mailto:oc.odenigbo@gmail.com?subject=I want to join the Table"
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full transition"
        >
          Join the Table
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 grid gap-6 sm:grid-cols-3">
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-indigo-300">Credit Building</h3>
          <p className="text-neutral-400 text-sm">
            Practical tools and strategies to build and protect your credit.
          </p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Investing</h3>
          <p className="text-neutral-400 text-sm">
            Learn the fundamentals, and get live context on what is actually moving markets right now.
          </p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-cyan-300">AI Tools</h3>
          <p className="text-neutral-400 text-sm">
            Hands on walkthroughs of the AI tools actually worth using to grow your money and your business.
          </p>
        </div>
      </section>

      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <div className="bg-neutral-900 rounded-3xl p-10 border border-neutral-800">
          <p className="text-sm text-neutral-400 mb-2">Membership</p>
          <p className="text-4xl font-bold mb-1">$2<span className="text-lg text-neutral-400">/month</span></p>
          <p className="text-sm text-neutral-500 mb-8">Cancel anytime. Introductory price, may change as the Table grows.</p>
          
            href="mailto:oc.odenigbo@gmail.com?subject=I want to join the Table"
            className="block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Join the Table
          </a>
        </div>
      </section>

      <footer className="text-center text-neutral-600 text-sm py-10">
        Built by Odenigbo. Met live on TikTok, welcome to the Table.
      </footer>
    </main>
  );
}
