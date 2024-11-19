import api from './configs/axiosConfigs';

const UserAPI = {
    signup: async (name: string, email: string, password: string) => {
        const response = await api.request({
            url: '/signup',
            method: 'POST',
            data: {
                name,
                email,
                password
            }
        });
        return response;
    },
    signin: async (email: string, password: string) => {
        const response = await api.request({
            url: '/signin',
            method: 'POST',
            data: {
                email,
                password
            }
        });
        return response
    },
    verifyMe: async () => {
        const response = await api.request({
            url: '/verify-token',
            method: 'GET',
        });
        return response
    },
}

export default UserAPI

