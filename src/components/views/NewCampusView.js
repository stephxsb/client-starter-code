// NewStudentView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display the new student page.
// ================================================== */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@mui/material/TextField'
import LargeTextField from '../css/LargeTextField'


const useStyles = makeStyles(() => ({
  formContainer: {  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none',
  }, 
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginTop: '-10px',
    marginBottom: '10px',
    textAlign: 'left',
  },
  
}));

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  // validation function checks if valid input
  const validate = (fields) => {
    let newErrors = {};
    if (!fields.name) newErrors.name = "Name is required.";
    if (!fields.address) newErrors.address = "Address is required.";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //gathers field values for validation
    const formData = {
      name: e.target.name.value,
      address: e.target.address.value,
      description: e.target.description.value,
      imageURL: e.target.imageURL.value,
    };

    //validates field values
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
 //if errors no submision
      setErrors(validationErrors);
    } else {
      // clear errors- allow submission
      setErrors({});
      handleSubmit(e);
    }
  };

  return (
    <div>
      <h1>New Campus</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography
              style={{
                fontWeight: 'bold',
                fontFamily: 'Courier, sans-serif',
                fontSize: '20px',
                color: '#11153e',
              }}
            >
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
            <input type="text" name="name" onChange={handleChange} />
            {errors.name && <div className={classes.errorText}>{errors.name}</div>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input type="text" name="address" onChange={handleChange} />
            {errors.address && <div className={classes.errorText}>{errors.address}</div>}
            <br />
            <br />

            <LargeTextField name="description" onChange={handleChange} />
          <br />
          <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageURL" onChange={handleChange} />
            <br />
            <br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCampusView;
