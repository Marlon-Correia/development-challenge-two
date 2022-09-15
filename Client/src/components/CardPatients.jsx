import {
  Card,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography,
  Box,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SignUp from "./SignUp";
import axios from "axios";

const BoxFlex = styled(Box)({
  padding: 2,
  display: "flex",
  justifyContent: "space-between",
});

const CardPatients = ({
  name,
  dateBirth,
  email,
  city,
  address,
  id,
  reloadPat,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeletePatient = async () => {
    await axios.delete(
      "https://u5ar522vi8.execute-api.us-east-1.amazonaws.com/dev_v2/patient",
      {
        data: {
          patientId: id,
        },
      }
    );
    reloadPat();
  };

  return (
    <Card sx={{ width: 350, minHeight: 150 }}>
      <BoxFlex>
        <Stack marginLeft={2} spacing={0.5}>
          <Typography fontWeight={700}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </Stack>
        <div>
          <IconButton>
            <EditIcon size={12} onClick={handleClickOpen} />
          </IconButton>
          <IconButton>
            <DeleteIcon size={12} onClick={handleDeletePatient} />
          </IconButton>
        </div>
      </BoxFlex>
      <Divider />
      <Stack
        direction="column"
        gap={1}
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Typography variant="body2" color="text.secondary">
          Endereço: {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data de Nascimento: {dateBirth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cidade: {city}
        </Typography>
      </Stack>
      <SignUp
        open={open}
        close={handleClose}
        name={name}
        dateBirth={dateBirth}
        email={email}
        city={city}
        address={address}
        id={id}
        reloadPat={reloadPat}
      />
    </Card>
  );
};

export default CardPatients;
