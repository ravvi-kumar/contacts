import { getContacts } from '$lib/data';

export async function load() {
	const contacts = await getContacts();
	return { contacts };
}
