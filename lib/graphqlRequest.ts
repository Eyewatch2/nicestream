import { STABLES } from "@/stables";

export default async function graphqlRequest(query: { query: string }) {
    const url = `${STABLES.BASE_URL}graphql`; // Usa la ruta reescrita en lugar de la URL completa

    const headers: { 'Content-Type': string } = { 'Content-Type': 'application/json' };

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    if (!res.ok) {
        // Manejo de errores si la respuesta no es ok (opcional)
        console.error(`Error: ${res.statusText}`);
        throw new Error(`Error: ${res.statusText}`);
    }

    const resJson = await res.json();
    return resJson;
}
