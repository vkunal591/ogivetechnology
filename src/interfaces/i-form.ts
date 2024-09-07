export interface ICareerForm {
    createdAt: string;
    _id: string;
    name: string;
    email: string;
    phone: string;
    resume: string;
    role: string;
    coverLatter: string;
}

export interface IContactForm {
    _id: string;
    createdAt: string
    name: string;
    email: string;
    phone: string;
    subject: string;
    desc: string;
}