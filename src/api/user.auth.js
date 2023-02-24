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
      }
    );
    
    return response;
  } catch (error) {
    return error;
  }
}

const loginUser = async (email,phone,password) => {
    try {
        
        const response = await axios.post(
            'https://skillup-api.vercel.app/user/login',{
                email,
                phone,
                password
            }
        )

        return response;
    } catch (error) {
        return error
    }
}

export {registerUser,loginUser};