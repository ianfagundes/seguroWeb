import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core"; //lembrar que tem que ter o @ e o core

export const DataTable = ({ data }) => {
  return (
    <React.Fragment>
      <Typography variant="headline" component="h2">
        Filtros
      </Typography>
      <Table selectable={false}>
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.temperatura}</TableCell>
              <TableCell>{item.umidade}</TableCell>
              <TableCell>{item.cliente}</TableCell>
              <TableCell>{item.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default DataTable;
