import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Field from "./Field";
import axios from "axios";

export default function SigUp({
  open,
  close,
  name,
  dateBirth,
  email,
  city,
  address,
  id,
  reloadPat,
}) {
  const [updateFormValues, setUpdateFormValues] = React.useState({
    name,
    dateBirth,
    email,
    city,
    address,
    patientId: id,
  });

  const handleUpdatePatient = async () => {
    await axios
      .patch(
        "https://u5ar522vi8.execute-api.us-east-1.amazonaws.com/dev_v2/patient",
        updateFormValues
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    reloadPat();
    close();
  };

  return (
    <div maxWidth="10vw">
      <Dialog open={open} onClose={close}>
        <DialogTitle>Cadastre-se</DialogTitle>
        <form>
          <DialogContent>
            <Field
              id="name"
              label="Nome"
              type="text"
              placeholder=""
              value={updateFormValues.name}
              onchange={(e) =>
                setUpdateFormValues({
                  ...updateFormValues,
                  name: e.target.value,
                })
              }
            />
            <Field
              id="email"
              value={updateFormValues.email}
              onchange={(e) =>
                setUpdateFormValues({
                  ...updateFormValues,
                  email: e.target.value,
                })
              }
              label="Endereço de email "
              type="email"
              placeholder=""
            />
            <Field
              id="date"
              value={updateFormValues.dateBirth}
              onchange={(e) =>
                setUpdateFormValues({
                  ...updateFormValues,
                  dateBirth: e.target.value,
                })
              }
              label="Data de Nascimento"
              placeholder="dd/mm/yyyy"
              type="text"
            />

            <Field
              id="text"
              label="Cidade"
              type="text"
              placeholder=""
              value={updateFormValues.city}
              onchange={(e) =>
                setUpdateFormValues({
                  ...updateFormValues,
                  city: e.target.value,
                })
              }
            />
            <Field
              id="address"
              label="Endereço"
              type="text"
              placeholder=""
              value={updateFormValues.address}
              onchange={(e) =>
                setUpdateFormValues({
                  ...updateFormValues,
                  address: e.target.value,
                })
              }
            />
          </DialogContent>
        </form>
        <DialogActions>
          <Button color="error" variant="contained" onClick={close}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleUpdatePatient}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
