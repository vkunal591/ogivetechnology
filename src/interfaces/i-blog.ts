export interface IBlogResponse {
    _id: string;
    title: string;
    desc: string;
    category: ICategory;
    updatedBy: IUpdatedBy;
    createdAt: string;
    updatedAt: string;
    __v: number
}



export interface ICategory {
    _id: string;
    title: string;
    desc: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number
}

export interface IUpdatedBy {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: 0
}