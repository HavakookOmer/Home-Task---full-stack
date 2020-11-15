import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'; 
import * as  actions from "../actions/todoApi";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import UsersForm from "./UsersForm";



const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Tasks = ({ classes, ...props }) => {

    // useEffect(() => {
    //     console.log(props)
    //     props.fetchId(props.id)
    // }, [])//componentDidMount
    
    //toast msg.
    const { addToast } = useToasts()

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <UsersForm />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell>task</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.tasksList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record[index].id}</TableCell>
                                            <TableCell>{record[index].taskContent}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )
}

const mapStateToProps = state => ({
    tasksList: state.todoApi.list
})


const mapActionToProps = {
    fetchId: actions.fetchId
}

export default connect(mapStateToProps , mapActionToProps)(withStyles(styles)(Tasks));
