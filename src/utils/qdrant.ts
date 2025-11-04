import { QdrantClient } from '@qdrant/js-client-rest';

const QDRANT_URL = process.env.QDRANT_URL || "";
const QDRANT_API = process.env.QDRANT_API || "";

const client = new QdrantClient({
    url: QDRANT_URL,
    apiKey: QDRANT_API,
});

export const createCollection = async () => {
    try {
        await client.createCollection("second_brain", {
            vectors: {
                size: 4096,
                distance: "Cosine",
            },
        });
        console.log("Collection created successfully");
    } catch (err) {
        console.error("Error creating collection:", err);
    }
};




