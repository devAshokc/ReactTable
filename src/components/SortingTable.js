import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./table.css";
export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({
    columns,
    data,
  }, useSortBy);
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
      <h4>SortingTable {'=>'} Click Heading to (asc / desc)</h4> 
      <Button variant="Text" onClick={() => navigate(-1)}>Back</Button>
      </div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                <span>
                    {column.isSorted ? (column.isSortedDesc ? '⬇️ Desc': '⬆️ Asc') : ''}
                </span>
                </th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
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
      <tfoot>
        {footerGroups.map((footerGruop) => {
          return <tr {...footerGruop.getFooterGroupProps()}>
            {footerGruop.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render("Footer")}</td>
            ))}
          </tr>;
        })}
      </tfoot>
    </table>
    </>
  );
};
