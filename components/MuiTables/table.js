import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Pro, Cons) {
  return { Pro, Cons };
}

const rows = [
  createData(
    "Prevents overloading and ensures that your API remains responsive for all user",
    "May limit the number of requests that legitimate users can make, causing frustration"
  ),
  createData(
    "Reduces the risk of DDoS attacks and other types of abuse	",
    "Requires additional configuration and monitoring to ensure that rate limits are set appropriately"
  ),
  createData(
    "Helps you manage resource consumption and costs by limiting the number of requests per user or per time period	",
    "May impact the performance of your API if rate limiting is not implemented efficiently"
  ),
  createData(
    "Provides more predictable and consistent response times for your API",
    "Can lead to complexity in your API code and increase development time"
  ),
  createData(
    "Can be used to differentiate between different tiers of users, such as free and paid users	",
    "Requires ongoing monitoring and adjustments to ensure that rate limits are appropriate for changing usage patterns"
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pros</StyledTableCell>
            <StyledTableCell align="right">Cons</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Pro}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Cons}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
