import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPatients from "./CardPatients";
import { red } from "@mui/material/colors";

const BoxItems = styled(Box)({
  marginTop: "10px",
  padding: 2,
  width: "100%",
  minHeight: "20vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "25px",
});

const AreaUsers = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);
    await axios
      .get(
        "https://u5ar522vi8.execute-api.us-east-1.amazonaws.com/dev_v2/patients"
      )
      .then((res) => setPatients(res.data))
      .catch((error) => console.log(error));
    setLoading(false);
  };
  useEffect(() => {
    getPatients();
  }, []);

  return (
    <main>
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Carregando</h1>
      ) : (
        <div sx={{ width: "100%", height: "100%" }}>
          <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Lista de Pacientes.
            </Typography>
          </Container>
          <Container maxWidth="lg" sx={{ margin: "30px 0" }}>
            <BoxItems>
              {patients.length > 0 ? (
                patients.map((item, index) => (
                  <CardPatients
                    key={index}
                    name={item.name}
                    address={item.address}
                    dateBirth={item.dateBirth}
                    email={item.email}
                    city={item.city}
                    id={item.ID}
                    reloadPat={getPatients}
                  />
                ))
              ) : (
                <h1>Não há pacientes cadastrados</h1>
              )}
            </BoxItems>
          </Container>
        </div>
      )}
    </main>
  );
};

export default AreaUsers;
