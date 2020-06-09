import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    "&.MuiFormControlLabel-root": {
      marginTop: 16,
      marginRight: 0,
      marginLeft: 0,
    }
  },
}));
