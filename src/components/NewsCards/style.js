import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    border: "5px solid transparent",
    borderImage: "linear-gradient(to right, #e6e6e6, #00f,#f00,#11f) 1",
    borderColor: "#e6e6e6",
    borderRadius: 0,
    color: "white",
    "&:hover": {
      border: "5px solid transparent",
      borderImage: "linear-gradient(to right, #e6e6e6,#11f,#41f) 1",
    },
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
