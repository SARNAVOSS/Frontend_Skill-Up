import axios from "axios";

const getCertificates = async () => {
    try {
        
        const res = await axios.get('https://skillup-api.vercel.app/certificate/get/all',{
            headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'authorization' : "Bearer " + localStorage.getItem("accessToken")
                    },
        }
        )

        // console.log(res)
        return res;
        
    } catch (error) {
        return{
            error:true,
            message:error.message
        }
        
    }
}

export {getCertificates};