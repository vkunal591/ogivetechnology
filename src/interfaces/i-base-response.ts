

export interface IBaseReponse<T> {
    code: string | number;
    data: T;
    message: string;
    status: boolean;
}

// export interface IBaseReponse2<T> {
//     message: string;
//     status: boolean;
//     details: T;
//     code: string;
//     page: IPageDetails;
//     approve: boolean;
//     reject: boolean;
// }