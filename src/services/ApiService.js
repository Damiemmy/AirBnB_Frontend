import { getAccessToken } from "@/app/lib/action";
const apiService = {
    
    get: async (url) => {
        const token = await getAccessToken()
        console.log("get", url);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": ` Bearer ${token}`
                    },
                }
            );

            const json = await response.json();
            console.log("json", json);

            return json;

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    },

    post: async (url, data) => {
        const token = await getAccessToken()
        console.log("url", url, data);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Authorization": ` Bearer ${token}`
                    },
                    body: (data),
                }
            );

            const json = await response.json();
            console.log("json", json);

            return json;

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    },
    postWithoutToken: async (url, data) => {
       
        console.log("url", url, data);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                 
                    },
                    body: JSON.stringify(data),
                }
            );

            const json = await response.json();
            console.log("json", json);

            return json;

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
};

export default apiService;
