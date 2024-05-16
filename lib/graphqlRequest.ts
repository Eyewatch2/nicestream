import { STABLES } from "@/stables";

interface GraphQLError {
    message: string;
    locations?: { line: number; column: number }[];
    path?: string[];
    extensions?: Record<string, any>;
}

export default async function graphqlRequest(query: { query: string }) {
    const url = `${STABLES.BASE_URL}/graphql`;
    const headers = { 'Content-Type': 'application/json' };

    try {
        const res = await fetch(url, {
            headers,
            method: 'POST',
            body: JSON.stringify(query)
        });

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const text = await res.text();
        if (!text) {
            throw new Error("Response body is empty");
        }

        let resJson: { data?: any; errors?: GraphQLError[] };
        try {
            resJson = JSON.parse(text);
        } catch (error) {
            if (error instanceof SyntaxError) {
                throw new Error(`Error parsing JSON response: ${error.message}`);
            } else {
                throw error;
            }
        }

        if (resJson.errors) {
            throw new Error(`GraphQL errors: ${resJson.errors.map((e: GraphQLError) => e.message).join(', ')}`);
        }

        return resJson;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in graphqlRequest:', error.message);
        } else {
            console.error('Unexpected error in graphqlRequest:', error);
        }
        throw error;
    }
}
