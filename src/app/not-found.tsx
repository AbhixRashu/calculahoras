import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-50 mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-brand-600">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4">
          Ops! Essa página não está no nosso horário.
        </h1>
        <p className="text-ink-500 mb-8 max-w-md mx-auto">
          A página que você procura não foi encontrada ou não existe mais.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Voltar para a calculadora
        </Link>
      </div>
    </div>
  );
}
