'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Contato
            </h1>
            <p className="text-ink-500 leading-relaxed text-lg">
              Tem dúvidas, sugestões ou quer entrar em contato? Estamos aqui para ajudar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-ink-900 mb-4">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-600">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900 text-sm">E-mail</h3>
                      <a href="mailto:contato@calculahoras.online" className="text-brand-600 hover:text-brand-700 text-sm">
                        contato@calculahoras.online
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-600">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900 text-sm">Horário de Atendimento</h3>
                      <p className="text-ink-500 text-sm">Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-600">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900 text-sm">Localização</h3>
                      <p className="text-ink-500 text-sm">Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-ink-900 mb-4">Perguntas Frequentes</h2>
                <p className="text-ink-500 text-sm leading-relaxed">
                  Antes de entrar em contato, verifique nossas{' '}
                  <a href="/calculadora-de-horas" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                    ferramentas
                  </a>{' '}
                  e a seção de{' '}
                  <a href="/calculadora-de-horas#faq" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                    perguntas frequentes
                  </a>. Você pode encontrar a resposta para sua dúvida rapidamente.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Mensagem enviada!</h3>
                <p className="text-ink-500 text-sm">
                  Obrigado pelo contato. Responderemos em até 48 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated space-y-5">
                <div>
                  <label htmlFor="nome" className="input-label">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    className="input-field"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="input-label">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="input-label">Assunto</label>
                  <select id="assunto" className="input-field" required>
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre o cálculo</option>
                    <option value="sugestao">Sugestão de melhoria</option>
                    <option value="erro">Reportar erro</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="input-label">Mensagem</label>
                  <textarea
                    id="mensagem"
                    className="input-field min-h-[120px] resize-y"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar mensagem
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
