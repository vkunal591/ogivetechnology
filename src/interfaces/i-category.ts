export interface ICategoryPayload {
    title: string,
    desc: string
}

export interface ICategoryResponse {
    _id: string;
    title: string;
    desc: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}