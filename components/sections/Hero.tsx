"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { track } from "../../lib/analytics";

export default function Hero() {
  return (
    <section className="container-xl relative">
      <div className="grid md:grid-cols-2 gap-8 items-center glass p-8 md:p-12">
        {/* Video / image side */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
          {/* fallback poster + gentle overlay */}
          <Image src="/hero/poster.jpg" alt="Dashboard preview" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Text side */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Where Marketing Vision Meets Technical Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70 max-w-prose"
          >
            Director-level martech leadership across WooCommerce, LearnDash, WP Fusion, FluentCRM, GA4, and Cloudflare Workers.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/case-studies"
              className="btn btn-primary"
              onClick={() => track("view_case_study", { source: "hero" })}
            >
              View Case Studies
            </a>
            <a
              href="/Jacob_Darling_Resume.pdf"
              className="btn btn-secondary"
              onClick={() => track("resume_download", { source: "hero" })}
            >
              Download Résumé
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
            <span className="badge">Woo Subscriptions</span>
            <span className="badge">LearnDash</span>
            <span className="badge">WP Fusion</span>
            <span className="badge">FluentCRM</span>
            <span className="badge">GA4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
