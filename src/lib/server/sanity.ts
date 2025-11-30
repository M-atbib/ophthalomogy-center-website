import { createClient } from '@sanity/client';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const fallbackProjectId = 'qdrihdi9';
const fallbackDataset = 'production';
const fallbackApiVersion = '2024-10-01';

const projectId = privateEnv.SANITY_PROJECT_ID ?? publicEnv.PUBLIC_SANITY_PROJECT_ID ?? fallbackProjectId;
const dataset = privateEnv.SANITY_DATASET ?? publicEnv.PUBLIC_SANITY_DATASET ?? fallbackDataset;
const apiVersion = privateEnv.SANITY_API_VERSION ?? fallbackApiVersion;
const token = privateEnv.SANITY_API_READ_TOKEN;

if (!projectId || !dataset) {
	throw new Error('Missing Sanity project configuration');
}

export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: !token,
	token,
	perspective: token ? 'previewDrafts' : 'published'
});

export const sanityConfig = {
	projectId,
	dataset,
	apiVersion
};
