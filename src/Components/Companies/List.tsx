import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Company from '../../Models/Company';
import {preventDefault} from '../../Common/Utility';
import CompanyForm from '../Shared/Forms/ValidatedForm';

import Title from '../Shared/Title';
import CompanyStyles from '../../Themes/CompaniesTheme';

  interface ListProps {
    data: Array<Company>
  }

  export default function List({data}: ListProps) {
    const classes = CompanyStyles();
    let emptyTable =<></>;

    if(!data || !data.length) {
      emptyTable = <TableRow>
                    <TableCell colSpan={9}>nothin' to see here!</TableCell>
                  </TableRow>
    } 

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
          <TableBody data-testid="companiesBody">

            {data && data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.accountNumber}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell align="right">{row.dateCreatedUTC.toString()}</TableCell>

             </TableRow>
            ))}
            {emptyTable}

          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link className={classes.seeMore} href="#" onClick={preventDefault}>
            See more companies
          </Link>
        </div>
        <div>
          <CompanyForm />
        </div>
      </React.Fragment>
    );
  }