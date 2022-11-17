import React, {useState,useEffect,MouseEvent} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Company from '../../Models/Company';
import CompanyService from '../../Services/CompanyService';

function preventDefault(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    event.preventDefault();
  }
  
  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
      color: '#484'
    },
  }));
  
  export default function CompanyList() {
    const classes = useStyles();
  
   const [data, setData] = useState([] as Array<Company>);
    useEffect(() => {
      const fetchData = async () => {
   
        var companies= await CompanyService.getCompanies(); ///result.data as Array<Invoice>;
        setData(companies);
      };
    
      fetchData();
    }, []);
  
    return (
      <React.Fragment>
        <Title>Companies</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Url</TableCell>
              <TableCell >Account Number</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date Created</TableCell>  
            </TableRow>
          </TableHead>
          <TableBody>
          {/* <TableRow>
                <TableCell colSpan={9}>nothin' to see here!</TableCell>
          </TableRow> */}
            {data && data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.accountNumber}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell align="right">{row.dateCreatedUTC.toString()}</TableCell>

             </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link className={classes.seeMore} href="#" onClick={preventDefault}>
            See more companies
          </Link>
        </div>
      </React.Fragment>
    );
  }