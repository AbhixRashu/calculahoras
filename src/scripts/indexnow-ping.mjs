const KEY = "97e9ecbcd4a44495a8a4c1a0d280d364";
const HOST = "calculahoras.online";

const urls = [
  "https://calculahoras.online/",
  "https://calculahoras.online/horas-trabalhadas",
  "https://calculahoras.online/horas-semanais",
  "https://calculahoras.online/horas-mensais",
  "https://calculahoras.online/horas-extras",
  "https://calculahoras.online/hora-de-saida",
  "https://calculahoras.online/horas-decimais",
  "https://calculahoras.online/conversor-de-horas",
  "https://calculahoras.online/calculadora-de-horas",
  "https://calculahoras.online/calculadora-de-intervalo",
  "https://calculahoras.online/calculadora-de-jornada",
  "https://calculahoras.online/calculadora-de-turno-noturno",
  "https://calculahoras.online/calculadora-de-horas-anuais",
  "https://calculahoras.online/calculadora-horas-e-salario",
  "https://calculahoras.online/calcular-horas-no-excel",
  "https://calculahoras.online/guias",
  "https://calculahoras.online/guias/como-calcular-horas-trabalhadas",
  "https://calculahoras.online/guias/como-calcular-horas-extras",
  "https://calculahoras.online/guias/como-calcular-horas-em-decimal",
  "https://calculahoras.online/guias/como-calcular-hora-de-saida",
  "https://calculahoras.online/guias/como-calcular-horas-semanais",
  "https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho",
  "https://calculahoras.online/guias/como-calcular-turno-noturno",
  "https://calculahoras.online/sobre",
  "https://calculahoras.online/contato",
  "https://calculahoras.online/termos",
  "https://calculahoras.online/privacidade",
];

async function pingIndexNow() {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  console.log(`Status: ${res.status}`);
  if (res.ok) {
    console.log(`${urls.length} URLs submitted to IndexNow`);
  } else {
    console.log("Error:", await res.text());
  }
}

pingIndexNow();
