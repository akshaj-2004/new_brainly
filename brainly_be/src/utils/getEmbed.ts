import type { ContentType } from "../zod/index.js";
import { cohere } from "./cohere.js";

export const getEmbed = async (
    data?: ContentType | string
): Promise<number[]> => {
    if (!data) {
        throw new Error("Invalid data: no content provided");
    }

    let combine: string;
    if (typeof data === "string") {
        combine = data.trim();
    } else {
        if (!data.tags || !Array.isArray(data.tags)) {
            throw new Error("Invalid data: tags must be a string array");
        }

        const tagString = data.tags.join(" ");
        combine = `${data.title ?? ""} ${tagString}`.trim();
    }

    try {
        const embed = await cohere.embed({
            model: "embed-english-v3.0",
            inputType: "search_document",
            embeddingTypes: ["float"],
            texts: [combine],
        });

        const vector = embed.embeddings.float?.[0];
        if (!vector) throw new Error("No embedding vector returned from Cohere");

        return vector;
    } catch (e: any) {
        console.error("Error generating embeddings:", e);
        throw new Error(`Error in getEmbed: ${e.message || e}`);
    }
};
