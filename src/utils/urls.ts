// const apiVersion = import.meta.env.VITE_REACT_APP_API_URL;
export const baseUrl = `http://localhost:8000`;

export const loginUrl = `${baseUrl}/api/v1/auth/signin`;
export const createUsers = `${baseUrl}/api/v1/auth/signup`;
export const categoryUrl = `${baseUrl}/api/v1/category`;
export const blogUrl = `${baseUrl}/api/v1/posts`;

export const getCurrentUserUrl = `${baseUrl}/api/v1/auth/current-user`;
export const getAllUsersUrl = `${baseUrl}/api/v1/auth/getAllUsers`;
export const updateProfileUrl = `${baseUrl}/api/v1/auth/update-profile`;
export const changePasswordUrl = `${baseUrl}/api/v1/auth/change-password`;
export const sendCodeUrl = `${baseUrl}/api/v1/auth/send-verification-email`;
export const verifyUsereUrl = `${baseUrl}/api/v1/auth/verify-user`;



export const uploadFileUrl = `${baseUrl}/api/v1/file/upload`;
export const getSignedFileUrl = `${baseUrl}/api/v1/file/signed-url`;
export const deleteFileByKey = `${baseUrl}/api/v1/file/delete-file`;






