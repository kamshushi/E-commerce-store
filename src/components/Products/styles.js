import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
  console.log(theme);
  return {
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
  };
});
