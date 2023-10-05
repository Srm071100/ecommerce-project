import { useFormik } from "formik";
import React ,{ useState } from "react";
import {Typography,Alert,Link,Grid,Box,Paper,Avatar,Button ,CssBaseline,TextField,FormControlLabel,Checkbox} from '@mui/material';
import { LoadingButton } from "@mui/lab";
import { Textarea,FormControl ,FormLabel } from "@mui/joy";
const ContactUsPage = (props) => {

  const [isSuccess,setIsSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values)
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      },2000)
    },
  });
  return (
      <>
        <div className="contact_section layout_padding">
          <div className="container">
              <h1 className="contact_text">Contact Us</h1>
          </div>
        </div>
        <div className="contact_section_2 layout_padding">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 padding_0">
                    <div className="mail_section">
                      <Box component="form" onSubmit={formik.handleSubmit}  sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          name="firstName"
                          autoComplete="firstname"
                          autoFocus
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lastname"
                          autoFocus
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                          helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="message"
                          label="Message"
                          name="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.message && Boolean(formik.errors.message)}
                          helperText={formik.touched.message && formik.errors.message}
                        />  
                        
                        <LoadingButton 
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          loading={isLoading}
                        >
                          Submit
                        </LoadingButton >

                        {isSuccess && <Alert severity="success">Your Query succesfully!</Alert>}
                      </Box>
                    </div>
                </div>
                <div className="col-md-6 padding_0">
                    <div className="map-responsive">
                      <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Smt.+Chandaben+Mohanbhai+Patel+Institute+of+Computer+Applications22.599555579599418,72.820434508827" width="600" height="508" frameborder="0" style={{border:0, width: "100%"}} allowfullscreen></iframe>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </>
  );
};

export default ContactUsPage;