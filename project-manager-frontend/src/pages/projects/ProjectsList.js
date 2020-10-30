import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Base from '../../components/Base';
import { isAuthenticated } from '../../user/apiCalls';
import { getAllProjects } from './helper/projectApiCalls';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
});

const columns = [
    { id: 'logo', label: '#', minWidth: 170 },
    { id: 'name', label: 'Projects', minWidth: 100 },
    { id: 'endDate', label: 'Due Date', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 }
  ];
  function createData(name,endDate,status) {
    return { name,endDate,status };
  }
  
//   const rows = [];
    
const ProjectList = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState([]);
    const {user,token} = isAuthenticated();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    useEffect(() => {
        preLoad();
    },[]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const preLoad = () => {
        getAllProjects(user._id, token).then(data => {
            setProjects(data.data)
        })
    }
    return (
        <Base title="project List">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell>
                                        {row.id}
                                    </TableCell>
                                     <TableCell>
                                        {row.name}
                                    </TableCell>
                                     <TableCell>
                                        {row.endDate}
                                    </TableCell>
                                     <TableCell>
                                        {row.status}
                                    </TableCell>
                                </TableRow>
                            );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination  
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={projects.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}>
                </TablePagination>
            </Paper>
        </Base>
    )
}


export default ProjectList;