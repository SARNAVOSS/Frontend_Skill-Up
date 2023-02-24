import axios from 'axios';

const registerCompany = async (name,email,company,password,phone) => {
  try {
    const response = await axios.post(
      'https://skillup-api.vercel.app/company/register',{
        name,
        email,
        company,
        password,
        phone,
      }
    );
    
    return response;
  } catch (error) {
    return error;
  }
}

const loginCompany = async (email,phone,password) => {
    try {
        
        const response = await axios.post(
            'https://skillup-api.vercel.app/company/login',{
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

export {registerCompany,loginCompany};