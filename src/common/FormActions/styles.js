import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
  button: {
    minWidth: 120,
    "&:not(last-child)": {
      marginLeft: theme.spacing(2),
    },
  },
}));
