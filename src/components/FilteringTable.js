import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { GloblFilter } from "./GloblFilter";
export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );
  const { globalFilter } = state;
  function handleClick(){
    window.location.reload();
  }
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
        <h4 style={{textAlign:"center"}}>FilteringTable ( Global filter / individual column filter )</h4>
      <div style={{display:"flex", gap: 2, justifyContent:"center", marginBottom:"20px"}}>
      <GloblFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <Button variant="Text" onClick={() => navigate(-1)}>Back</Button>
      <Button variant="Text" onClick={handleClick}>Refresh </Button>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
