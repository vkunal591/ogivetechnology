const apiBaseUrl = import.meta.env.VITE_API_BACKEND_BASE_URL;
export const baseUrl = apiBaseUrl || `http://localhost:8000`;

export const loginUrl = `${baseUrl}/api/v1/auth/signin`;
export const createUsers = `${baseUrl}/api/v1/auth/signup`;
export const categoryUrl = `${baseUrl}/api/v1/category`;
export const blogUrl = `${baseUrl}/api/v1/posts`;
export const getblogUrl = `${baseUrl}/api/v1/posts/blog`;


export const getCurrentUserUrl = `${baseUrl}/api/v1/auth/current-user`;
export const getAllUsersUrl = `${baseUrl}/api/v1/auth/getAllUsers`;
export const updateProfileUrl = `${baseUrl}/api/v1/auth/update-profile`;
export const changePasswordUrl = `${baseUrl}/api/v1/auth/change-password`;
export const sendCodeUrl = `${baseUrl}/api/v1/auth/send-verification-email`;
export const verifyUsereUrl = `${baseUrl}/api/v1/auth/verify-user`;



export const uploadFileUrl = `${baseUrl}/api/v1/file/upload`;
export const getSignedFileUrl = `${baseUrl}/api/v1/file/signed-url`;
export const deleteFileByKey = `${baseUrl}/api/v1/file/delete-file`;



export const uploadImageUrl = `${baseUrl}/api/v1/local/upload`;
export const careerUrl = `${baseUrl}/api/v1/career`;
export const contactUrl = `${baseUrl}/api/v1/contact`;
export const subcriberUrl = `${baseUrl}/api/v1/subscriber`;
export const landingPageUrl = `${baseUrl}/api/v1/landingpage`;










