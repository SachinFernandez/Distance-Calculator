import React, { Component } from "react";
import InputBox from "./InputBox"
import { Typography, Grid, Paper, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: "#474787",
    color: "#fefefe"
  },
  content: {
    maxWidth: 550,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

class Distance extends Component {
    render() {
        const { classes } = this.props
        return(
            <React.Fragment>
                    <main>
                        <div className={classes.container}>
                            <div className={classes.content}>
                                <Typography component="h1" variant="h2" align="center" style={{ color: "#fff" }}>
                                    Distance Calculator
                                </Typography>
                            </div>
                            <Grid container spacing={16}>
                                <Grid item xs={6} style={{ padding: "50px" }}>
                                    <Paper className={classes.paper}>
                                        <InputBox placeholder="Your location" name="source"  />
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "50px" }}>
                                    <Paper className={classes.paper}>
                                        <InputBox placeholder="Enter your destination" />
                                    </Paper>
                                </Grid>
                            </Grid>
                            <div className={classes.button}>
                                <Button variant="contained" color="secondary" style={{ left: "40%", padding: "15px 100px" }}>
                                    Calculate
                            </Button>
                            </div>
                        </div>
                    </main>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Distance);