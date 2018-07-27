import { withStyles } from "@material-ui/core/styles";
import { TableCell } from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#ebeeee",
        color: "#1C5168",
        fontSize: 22,
        textAlign: "center"
    },
    body: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1C5168"
    }
}))(TableCell);

export default CustomTableCell;
