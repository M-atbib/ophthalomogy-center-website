/** Contact details shown to patients and search engines. Keep these in sync with the verified business listings. */
export const cabinet = {
	name: 'Cabinet du Dr Amal Alouan',
	streetAddress: 'Imm. 67, appt 1, lot Al Andalouss, avenue Abderrahim Bouaabid, Hay Essalam',
	locality: 'Salé',
	country: 'MA',
	phones: [
		{ label: '05 37 810 828', href: 'tel:+212537810828', international: '+212537810828' },
		{ label: '06 66 82 42 47', href: 'tel:+212666824247', international: '+212666824247' }
	],
	email: 'dr.amalalouan@gmail.com'
} as const;

export const cabinetAddress = `${cabinet.streetAddress}, ${cabinet.locality}`;
export const cabinetMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cabinetAddress)}`;
