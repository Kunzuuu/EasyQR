import React, { useState } from "react";
import { Grid, TextField, Typography, Box } from "@material-ui/core";
import QRCode from 'qrcode.react';
import Navbar from "../components/Navbar";

const QRCodeGenerator = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value.trim());
  };

  const qrCodeValue = message.trim();

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12} xl={6} md={6} sm={12}>
          <Box
            style={{ height: "100vh" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box style={{ padding: 25 }}>
              <Typography
                variant="h1"
                style={{ fontWeight: "bolder", fontSize: 55, marginBottom: 25 }}
              >
                Link your
                <br />
                <strong className="text_image">favorite website.</strong>
              </Typography>
              <TextField
                style={{ marginTop: 15 }}
                variant="outlined"
                label="Website"
                onChange={handleChange}
                placeholder="https://instagram.com/kunzuuu"
                fullWidth
                helperText="Scan the QR code on your right to open the link"
                inputProps={{
                  style: { paddingRight: 40 }
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={6} md={6} sm={12} className="backgroundRight">
          
          <Box
            style={{ height: "100vh" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="borderBox"
          >
            <Box
              onClick={() => {
                const win = window.open();
                win.document.write(
                  '<img src="' +
                    qrCodeValue +
                    '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>'
                );
              }}
              id="makePdf"
              className="hoverCard"
              style={{ backgroundColor: "white", height: "auto", padding: 20 }}
            >
              <h1 style={{ fontWeight: "bolder", fontSize: 35 }}>
                Your URL QR code <br />
                <strong
                  className="text_image"
                  style={{ backgroundPosition: "left" }}
                >
                  is ready.
                </strong>
              </h1>
              <Box align="center">
                <QRCode value={qrCodeValue} size={180} fgColor="#000000" bgColor="#ffffff" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default QRCodeGenerator;