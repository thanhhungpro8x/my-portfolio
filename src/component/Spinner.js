import CircularProgress from "@mui/material/CircularProgress";
import "./Spinner.css";

const Spinner = ({ spinMode }) => {
  return (
    <div className={spinMode}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Spinner;
