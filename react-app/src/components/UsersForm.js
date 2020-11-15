import React, {  } from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import useForm from "./useForm";
import * as actions from "../actions/todoApi";
import { useToasts } from "react-toast-notifications";



const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})


const initialFieldValues = {
    id: '',
}

const UsersForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)


    const handleLogIn = e => {
        e.preventDefault()

        const onSuccess = () => {
            addToast("LogIn successfully", { appearance: 'success' })
        }

        props.fetchId(values.id, onSuccess)
    }

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleLogIn}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="id"
                        variant="outlined"
                        label="ID"
                        value={values.id}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            LogIn
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}


const mapStateToProps = state => ({
    tasksList: state.todoApi.list
})

const mapActionToProps = {
    fetchId :actions.fetchId,
    createTask: actions.createTask
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UsersForm));

