import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiFormControl-root": {
      marginTop: theme.spacing(2),
    }
  },
}));
