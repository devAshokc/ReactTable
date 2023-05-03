import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom';

export function Home() {
    const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
//   const navigate = useNavigate();
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
  });
    const navigate = useNavigate();
    return <>
        <div className='home-sd'>
            <AppBar className='navbar' position="relative">
                <Toolbar>
                    <Typography onClick={() => navigate('/')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Table<span className="logo-F">Filter</span>ing
                    </Typography>
                    <Button onClick={() => navigate('Table/Filtering')} color="inherit">FilteringTable</Button>
                    <Button onClick={() => navigate('Table/PaginationTable')} color="inherit">PaginationTable</Button>
                    <Button onClick={() => navigate('Table/SortingTable')} color="inherit">SortingTable</Button>
                </Toolbar>
            </AppBar>
            <div className='intro-container' >
            <div style={{textAlign:"center"}}>
      <h4>BasicTable</h4> 
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
    </div>
        </div>
    </>
}