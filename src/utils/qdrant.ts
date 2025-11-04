import { QdrantClient } from '@qdrant/js-client-rest';
import { getEmbed } from './getEmbed.js';
import { getPayload } from './getPayload.js';
import type { ContentType } from '../zod/index.js';

const QDRANT_URL = process.env.QDRANT_URL || "";
const QDRANT_API = process.env.QDRANT_API || "";

const client = new QdrantClient({
    url: QDRANT_URL,
    apiKey: QDRANT_API,
});

const COLLECTION = "second_brain";

export const createCollection = async () => {
    try {
        const existing = await client.getCollections();
        const exists = existing.collections.some(c => c.name === COLLECTION);

        if (!exists) {
            await client.createCollection(COLLECTION, {
                vectors: {
                    size: 1024,
                    distance: "Cosine",
                },
            });
            console.log("Collection created:", COLLECTION);
        } else {
            console.log("ℹCollection already exists:", COLLECTION);
        }
    } catch (err) {
        console.error("Error creating collection:", err);
    }
};

export const upsert = async (data: ContentType) => {
    try {
        const payload = getPayload(data);
        const embeddings = await getEmbed(data);

        if (!data.id) throw new Error("Content ID is required for upsert.");
        if (!embeddings || embeddings.length !== 1024)
            throw new Error("Invalid embedding length");

        await client.upsert(COLLECTION, {
            wait: true,
            points: [
                {
                    id: data.id,
                    vector: embeddings,
                    payload,
                },
            ],
        });

        console.log("Qdrant upsert successful. ID:", data.id);
        return data.id;
    } catch (e: any) {
        console.error("Error upserting points:", e.message);
        return null;
    }
};

export const search = async (embeddings: number[]) => {
    try {
        const res = await client.search(COLLECTION, {
            vector: embeddings,
            limit: 3,
        });

        return res.map(item => ({
            id: item.id as number,
            score: item.score,
            payload: item.payload,
        }));
    } catch (e: any) {
        console.error("Error searching points:", e.message);
        return [];
    }
};

export const deletePoint = async (contentId: number) => {
    try {
        await client.delete(COLLECTION, { points: [contentId] });
        console.log(" Deleted Qdrant point ID:", contentId);
    } catch (error: any) {
        console.error("Error deleting points:", error.message);
    }
};
