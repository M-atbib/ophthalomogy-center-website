import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

type ContactValues = {
	reason: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	email: string;
	message: string;
};

function asTrimmedString(value: FormDataEntryValue | null): string {
	return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isIsoDate(value: string): boolean {
	// Expect browser date input format (YYYY-MM-DD)
	return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();

		// Simple bot trap: keep this field hidden in the UI.
		const honeypot = asTrimmedString(formData.get('company'));
		if (honeypot) {
			return { success: true };
		}

		const values: ContactValues = {
			reason: asTrimmedString(formData.get('contact-reason')),
			firstName: asTrimmedString(formData.get('first-name')),
			lastName: asTrimmedString(formData.get('last-name')),
			birthDate: asTrimmedString(formData.get('birth-date')),
			email: asTrimmedString(formData.get('email')),
			message: asTrimmedString(formData.get('message'))
		};

		const errors: Partial<Record<keyof ContactValues, string>> = {};

		if (!values.reason) errors.reason = 'Veuillez sélectionner un motif.';
		if (!values.firstName) errors.firstName = 'Veuillez renseigner votre prénom.';
		if (!values.lastName) errors.lastName = 'Veuillez renseigner votre nom.';
		if (!values.birthDate) errors.birthDate = 'Veuillez renseigner une date de naissance.';
		if (values.birthDate && !isIsoDate(values.birthDate)) errors.birthDate = 'Date invalide.';
		if (!values.email) errors.email = 'Veuillez renseigner votre adresse e-mail.';
		if (values.email && !isValidEmail(values.email)) errors.email = "Format d'e-mail invalide.";
		if (!values.message) errors.message = 'Veuillez écrire un message.';
		if (values.message && values.message.length > 5000) errors.message = 'Message trop long.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { success: false, errors, values });
		}

		const webhookUrl = env.EXCEL_WEBHOOK_URL;
		if (!webhookUrl) {
			return fail(500, {
				success: false,
				message: 'Configuration manquante côté serveur (EXCEL_WEBHOOK_URL).'
			});
		}

		const payload = {
			...values,
			submittedAt: new Date().toISOString()
		};

		let response: Response;
		try {
			response = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload)
			});
		} catch {
			return fail(502, {
				success: false,
				message: "Impossible d'envoyer votre demande pour le moment. Réessayez plus tard."
			});
		}

		if (!response.ok) {
			return fail(502, {
				success: false,
				message: "Erreur lors de l'envoi. Réessayez plus tard."
			});
		}

		return { success: true };
	}
};

