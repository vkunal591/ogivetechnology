
export interface ICreateBlog {
    title: string;
    desc: string;
    file: File;
    category: string;
}


export interface IUserResponse {
    _id: string;
    name: string;
    email: string;
    role: number;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IUpdateProfile {
    name:string;
    email:string;
}

export interface IChangePassword 
    {
        oldPassword: string;
        newPassword: string;
    }
