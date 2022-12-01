import React from 'react';
import Link from '@material-ui/core/Link';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import Invoice from '../../Models/Invoice';
// import InvoiceService from '../../Services/InvoiceService';
import {preventDefault} from '../../Common/Utility';
import Title from '../Shared/Title';
import PaymentsStyles from '../../Themes/PaymentsTheme';

export default function Payments() {
  const classes = PaymentsStyles();

  //const [data, setData] = useState([] as Array<Invoice>);
  //  useEffect(() => {
    // const fetchData = async () => {
 
    //   var invoices= await InvoiceService.getInvoices(); ///result.data as Array<Invoice>;
    //   setData(invoices);
    // };
  
    // fetchData();
 //  }, []);

  return (
    <React.Fragment>
      <Title>Recent Invoices</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Billing Period</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Amount Paid</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell>Date Paid</TableCell>
            <TableCell>Amount Due</TableCell>
            <TableCell>Confirmation Number</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Company ID</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
              <TableCell colSpan={9}>nothin' to see here!</TableCell>
        </TableRow>
          {/* {data && data.map((row) => (
            <TableRow key={row.invoiceID as number}>
              <TableCell>{row.billingPeriod}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.amountPaid}</TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell align="right">{row.datePaid}</TableCell>
            
              <TableCell>{row.amountDue}</TableCell>
              <TableCell>{row.confirmationNumber}</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>{row.companyID}</TableCell>
           </TableRow>
          ))} */}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link className={classes.seeMore} href="#" onClick={preventDefault}>
          See more invoices
        </Link>
      </div>
    </React.Fragment>
  );
}