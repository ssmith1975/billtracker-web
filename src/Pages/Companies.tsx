import {useState, useEffect} from 'react';

import Company from '../Models/Company';
import CompanyService from '../Services/CompanyService';
import List from '../Components/Companies/List';

export default function Companies() {

    const [data, setData] = useState([] as Array<Company>);    

    useEffect(() => {
        let isFetched:Boolean = false; 
        
        const fetchData = async () => {
        var companies= await CompanyService.getCompanies(); ///result.data as Array<Invoice>;
        setData(companies);          
        isFetched = true;

        }; 

        if(!isFetched){
        fetchData();
        }
        
    }, []);

    return (<List data={data} />);
} 
