import {
  Container,
  Grid,
  Typography,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  dateBirth: "",
  email: "",
  city: "",
  CEP: "",
  address: "",
};
const FormPatient = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitForm = () => {
    if (
      formValues.city === "" ||
      formValues.CEP === "" ||
      formValues.dateBirth === "" ||
      formValues.email === "" ||
      formValues.name === "" ||
      formValues.address === ""
    ) {
      setErrorMessage("Preencha todos os campos");
    } else {
      axios
        .post(
          "https://u5ar522vi8.execute-api.us-east-1.amazonaws.com/dev/patient",
          formValues
        )
        .then((res) => {
          console.log("Deu certo");
        })
        .catch((error) => console.log(error));
      setFormValues(initialState);
    }
  };

  return (
    <main>
      <div sx={{ width: "100%", height: "100%" }}>
        <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Cadastre-se agora!
          </Typography>
        </Container>
        <Container maxWidth="sm" sx={{ margin: "30px auto" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    value={formValues.name}
                    name="Name"
                    required
                    inputProps={{
                      pattern: ".{8,}",
                      title: "Eight or more characters",
                    }}
                    fullWidth
                    id="Name"
                    label=" Name"
                    onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={formValues.dateBirth}
                    id="Date Birth"
                    label="Date Birth"
                    name="Date Birth"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        dateBirth: e.target.value,
                      })
                    }
                    placeholder="dd/mm/yyyy"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    inputProps={{
                      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                    }}
                    value={formValues.email}
                    label="Email Address"
                    name="email"
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="City"
                    required
                    fullWidth
                    id="City"
                    value={formValues.city}
                    onChange={(e) =>
                      setFormValues({ ...formValues, city: e.target.value })
                    }
                    label=" City"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="CEP"
                    inputProps={{
                      pattern: "[z0-9_]{8}",
                    }}
                    value={formValues.CEP}
                    label="CEP"
                    onChange={(e) =>
                      setFormValues({ ...formValues, CEP: e.target.value })
                    }
                    name="CEP"
                    placeholder="00000-000"
                    autoComplete="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Address"
                    label="Address"
                    value={formValues.address}
                    onChange={(e) =>
                      setFormValues({ ...formValues, address: e.target.value })
                    }
                    inputProps={{
                      pattern: ".{8,}",
                      title: "Eight or more characters",
                    }}
                    type="Address"
                    id="Address"
                    autoComplete="new-Address"
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={handleSubmitForm}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {errorMessage !== "" && (
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </main>
  );
};

export default FormPatient;
