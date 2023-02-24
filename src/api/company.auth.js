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

const loginCompany = async (email,phone,password) => {
    try {
        
        const response = await axios.post(
            'https://skillup-api.vercel.app/company/login',{
                email,
                phone,
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
        return {
          error:true,
          message:error.message
        }
    }
}

export {registerCompany,loginCompany};