'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItemData {
  q: string;
  a: string;
  example?: string;
}

interface PageFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItemData[];
  includeSchema?: boolean;
}

export function PageFAQ({
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas dúvidas práticas e legais sobre este cálculo:',
  faqs,
  includeSchema = false,
}: PageFAQProps) {
  // Default first item open for instant value
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const schemaData = includeSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.example ? `${item.a} Exemplo: ${item.example}` : item.a,
          },
        })),
      }
    : null;

  return (
    <section className="py-12 md:py-16 bg-surface-50 border-t border-surface-200">
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <div className="container-app max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">{title}</h2>
          <p className="text-sm md:text-base text-ink-600 mt-2">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.has(index);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-300 shadow-xs ring-1 ring-brand-500/10'
                    : 'border-surface-200 hover:border-surface-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between p-4 md:p-5 text-left cursor-pointer group gap-3"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors ${
                      isOpen ? 'text-brand-800' : 'text-ink-900 group-hover:text-brand-700'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? 'bg-brand-600 text-white rotate-180'
                        : 'bg-surface-100 text-ink-500 group-hover:bg-brand-50 group-hover:text-brand-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Always rendered in DOM for crawlability */}
                <div
                  className={`px-4 md:px-5 pb-5 pt-1 text-sm text-ink-700 border-t border-surface-100 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed text-ink-800">{faq.a}</p>
                  {faq.example && (
                    <div className="mt-3 p-3 bg-brand-50/60 rounded-xl border border-brand-100 text-xs md:text-sm text-brand-950 font-mono">
                      <strong className="block font-sans text-brand-900 font-semibold mb-1">
                        Exemplo prático:
                      </strong>
                      {faq.example}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
