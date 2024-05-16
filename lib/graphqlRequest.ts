export default async function graphqlRequest(query: { query: string }) {
    const url = `${process.env.WORDPRESS_API_URL}/graphql`;
    
    const headers: { 'Content-Type': string } = { 'Content-Type': 'application/json' };


    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });
    
    const resJson = await res.json();
    return resJson;

}