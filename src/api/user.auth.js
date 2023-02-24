import axios from 'axios';

const registerUser = async (name,email,user_name,password,phone,eth_address) => {
  try {
    const response = await axios.post(
      'https://skillup-api.vercel.app/user/register',{
        name,
        email,
        user_name,
        password,
        phone,
        eth_address
      },{
        headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        },
      }
    );
    
    return response;
  } catch (error) {
        return {
          error:true,
          message:error.message
        }
  }
}

const loginUser = async (name,email,password) => {
    try {
        
        const response = await axios.post(
            'https://skillup-api.vercel.app/user/login',{
                email,
                name,
                password
            },{
            headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    },
            }
        )

        return response;
    } catch (error) {
      console.log(error)
        return {
          error:true,
          message:error.message
        }
    }
}

export {registerUser,loginUser};