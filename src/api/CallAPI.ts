import api from './configs/axiosConfigs';

const CallAPI = {
    fetchCalls: async (clientId: string) => {
        const response = await api.request({
            url: `/calldetails/${clientId}`,
            method: 'GET',
        });
        return response;
    },


}

export default CallAPI

