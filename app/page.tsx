export default function Home() {
  const faqs = [
    {
      q: "Which billing providers are supported?",
      a: "DunningOptimizer integrates with Stripe and Paddle via webhooks out of the box."
    },
    {
      q: "How does A/B testing work?",
      a: "Failed payments are split across your configured variants. Each variant has its own email sequence and timing. Analytics show recovery rates per variant so you can pick the winner."
    },
    {
      q: "Can I customize the email sequences?",
      a: "Yes. You control the number of emails, delay between each attempt, subject lines, and body copy for every variant."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Billing Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Recover More Failed Payments<br />
          <span className="text-[#58a6ff]">with Smarter Dunning</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Automatically A/B test dunning email sequences and timing against your real failed payments.
          Find the sequence that recovers the most revenue — no guesswork.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue
        </a>
        <p className="text-[#8b949e] text-sm mt-3">$19/mo · Cancel anytime</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Stripe & Paddle webhook integration",
              "Unlimited A/B test variants",
              "Customizable email sequences",
              "Real-time recovery analytics",
              "Automatic winner detection",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
