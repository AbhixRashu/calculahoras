/**
 * Gerador de PDF e impressão para folha de ponto / cálculo de horas (Brasil / CLT).
 * Gera um relatório profissional pronto para imprimir ou salvar como PDF.
 */

export interface ExportReportData {
  title: string;
  type: 'diaria' | 'semanal' | 'mensual' | 'anual';
  dateStr?: string;
  items: Array<{ label: string; value: string }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
  summary: {
    totalLabel: string;
    totalValue: string;
    decimalValue?: string;
    notes?: string;
  };
}

export function exportTimesheetPdf(data: ExportReportData) {
  if (typeof window === 'undefined') return;

  const printWindow = window.open('', '_blank', 'width=850,height=900');
  if (!printWindow) {
    alert('Por favor, autorize pop-ups no seu navegador para exportar o relatório em PDF.');
    return;
  }

  const currentDate =
    data.dateStr ||
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const tableHtml = data.table
    ? `
      <table class="report-table">
        <thead>
          <tr>
            ${data.table.headers.map((h) => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${data.table.rows
            .map(
              (row) => `
            <tr>
              ${row.map((cell, idx) => `<td class="${idx === 0 ? 'font-bold' : ''}">${cell}</td>`).join('')}
            </tr>`
            )
            .join('')}
        </tbody>
      </table>
    `
    : '';

  const itemsHtml = data.items
    .map(
      (item) => `
      <div class="metric-card">
        <div class="metric-label">${item.label}</div>
        <div class="metric-value">${item.value}</div>
      </div>
    `
    )
    .join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${data.title} - CalculaHoras</title>
      <style>
        @page { size: A4 portrait; margin: 15mm; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1c1917;
          background: #ffffff;
          padding: 30px;
          line-height: 1.5;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e7e5e4;
          padding-bottom: 20px;
          margin-bottom: 25px;
        }
        .brand {
          font-size: 24px;
          font-weight: 800;
          color: #059669;
          letter-spacing: -0.5px;
        }
        .brand span { color: #1c1917; }
        .report-title {
          font-size: 20px;
          font-weight: 700;
          color: #1c1917;
          margin-bottom: 4px;
        }
        .report-date {
          font-size: 13px;
          color: #78716c;
          text-transform: capitalize;
        }
        .grid-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-bottom: 25px;
        }
        .metric-card {
          background: #f5f5f4;
          border: 1px solid #e7e5e4;
          border-radius: 8px;
          padding: 12px 14px;
        }
        .metric-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #78716c;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .metric-value {
          font-size: 18px;
          font-weight: 700;
          color: #1c1917;
        }
        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 25px;
        }
        .report-table th {
          background: #059669;
          color: white;
          text-align: left;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 10px 12px;
        }
        .report-table td {
          padding: 10px 12px;
          font-size: 13px;
          border-bottom: 1px solid #e7e5e4;
        }
        .report-table tr:nth-child(even) {
          background: #fafaf9;
        }
        .font-bold { font-weight: 600; }
        .summary-box {
          background: #ecfdf5;
          border: 1.5px solid #a7f3d0;
          border-radius: 10px;
          padding: 20px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .summary-title {
          font-size: 14px;
          font-weight: 600;
          color: #047857;
        }
        .summary-total {
          font-size: 28px;
          font-weight: 800;
          color: #047857;
          letter-spacing: -0.5px;
        }
        .summary-decimal {
          font-size: 13px;
          color: #065f46;
          margin-top: 2px;
        }
        .footer {
          margin-top: 40px;
          padding-top: 15px;
          border-top: 1px solid #e7e5e4;
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #a8a29e;
        }
        .print-btn-bar {
          background: #1c1917;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .print-btn {
          background: #059669;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }
        .print-btn:hover { background: #047857; }
        @media print {
          .print-btn-bar { display: none !important; }
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="print-btn-bar">
        <span>Visualização para Impressão e Salvar em PDF</span>
        <button class="print-btn" onclick="window.print()">Salvar como PDF / Imprimir</button>
      </div>

      <div class="header">
        <div>
          <div class="brand">Calcula<span>Horas</span></div>
          <p style="font-size: 12px; color: #78716c;">Espelho de ponto e cálculo oficial de jornada de trabalho (CLT)</p>
        </div>
        <div style="text-align: right;">
          <h1 class="report-title">${data.title}</h1>
          <p class="report-date">${currentDate}</p>
        </div>
      </div>

      ${itemsHtml ? `<div class="grid-metrics">${itemsHtml}</div>` : ''}

      ${tableHtml}

      <div class="summary-box">
        <div>
          <div class="summary-title">${data.summary.totalLabel}</div>
          ${data.summary.notes ? `<p style="font-size: 12px; color: #047857; margin-top: 4px;">${data.summary.notes}</p>` : ''}
        </div>
        <div style="text-align: right;">
          <div class="summary-total">${data.summary.totalValue}</div>
          ${data.summary.decimalValue ? `<div class="summary-decimal">${data.summary.decimalValue}</div>` : ''}
        </div>
      </div>

      <div class="footer">
        <span>Gerado com CalculaHoras — 100% gratuito, sem cadastro e em conformidade com a CLT</span>
        <span>Art. 71 e Art. 59 da Consolidação das Leis do Trabalho</span>
      </div>

      <script>
        window.addEventListener('load', () => {
          setTimeout(() => { window.print(); }, 400);
        });
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

export function copySummaryToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    return Promise.resolve(false);
  }
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => false
  );
}
