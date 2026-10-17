/** Only facts approved for public display belong in this record. */
export type ProfessionalEvent = {
	date: string;
	title: string;
	institution?: string;
	detail?: string;
};

export type Qualification = {
	title: string;
	institution?: string;
	date?: string;
};

export type MedicalActivity = {
	label: string;
	href: string;
};

export type DoctorProfile = {
	name: string;
	profession: string;
	location: string;
	shortBio?: string;
	fullBio?: string;
	approach?: string;
	timeline: ProfessionalEvent[];
	degrees: Qualification[];
	training: Qualification[];
	activities: MedicalActivity[];
};

// Optional sections stay hidden until Dr Amal Alouan approves their content.
export const doctorProfile: DoctorProfile = {
	name: 'Dr Amal Alouan',
	profession: 'Ophtalmologue',
	location: 'Salé',
	timeline: [],
	degrees: [],
	training: [],
	activities: []
};
