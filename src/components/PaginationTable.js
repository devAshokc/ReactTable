import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./table.css";
export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
  usePagination);
  const {pageIndex} = state
 
  return (
    <>
    <AppBar className="navbar" position="relative">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            className="logo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Table<span className="logo-F">Filter</span>ing
          </Typography>
          <Button onClick={() => navigate("/Table/Filtering")} color="inherit">
            FilteringTable
          </Button>
          <Button
            onClick={() => navigate("/Table/PaginationTable")}
            color="inherit"
          >
            PaginationTable
          </Button>
          <Button
            onClick={() => navigate("/Table/SortingTable")}
            color="inherit"
          >
            SortingTable
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{textAlign:"center"}}>
      <h4 >PaginationTable</h4> 
      <Button variant="Text" onClick={() => navigate(-1)}>Back</Button>
      </div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div style={{display:"flex", gap: 2, justifyContent:"center", marginTop:"30px"}}>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <span></span>
        <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>⏮️ Previous</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>⏭️ Next</button>
        <button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </>
  );
};
