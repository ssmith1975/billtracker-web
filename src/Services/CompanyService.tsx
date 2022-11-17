import axios from 'axios';
import Company from '../Models/Company';
import { API_ROOT_URL } from '../Common/Constants';



const CompanyService = {
    getCompanies:  async () => {
        console.log('calling API /company');
        
        const result = await axios(
           `${API_ROOT_URL}/company`,
        );

        return result.data as Array<Company>;  
    }  
};

export default CompanyService;