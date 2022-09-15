import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
const InfBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleHome = () => {
    navigate("/");
  };
  const handleFormPatient = () => {
    navigate("/patient");
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Patients"
          onClick={handleHome}
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          onClick={handleFormPatient}
          label="Add Patient"
          icon={<PersonAddAltIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default InfBar;
