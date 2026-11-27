// O link real fica em .env.local (não vai para o GitHub) e na Vercel.
// O modelo do nome da variável está em .env.example.

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export async function enviarInscricao(dados, curso) {
  if (!ENDPOINT) {
    throw new Error("Falha ao enviar a inscrição.");
  }

  const titulo = curso?.titulo ?? "";

  const resposta = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...dados,
      curso: titulo,
      _subject: `Nova inscrição: ${titulo || "Uniube Coders"}`,
    }),
  });

  if (!resposta.ok) {
    throw new Error("Falha ao enviar a inscrição.");
  }

  return resposta.json();
}
