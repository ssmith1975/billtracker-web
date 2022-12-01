import Company from '../Models/Company';
import { API_ENDPOINT } from '../Common/Constants';

const CompanyService = {
    getCompanies:  async (): Promise<Array<Company>>  => {
        console.log(`calling API ${API_ENDPOINT.COMPANY}`);

        const response = await fetch(
           API_ENDPOINT.COMPANY
         );
        return await response.json() as Array<Company>;  
    }  
};

export default CompanyService;