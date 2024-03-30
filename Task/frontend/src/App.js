// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     gender: '',
//     textarea: '',
//     country: ''
//   });

//   useEffect(() => {
//     fetchFormData();
//   }, []);

//   const fetchFormData = async () => {
//     try {
//       const response = await axios.get('/api/multipledata');
//       const data = response.data;
//       if (Array.isArray(data) && data.length > 0) {
//         // Set formData to the last element of the array
//         setFormData(data[data.length - 1]);
//       } else {
//         // Set formData with default values if data is empty or not an array
//         setFormData({
//           name: '',
//           email: '',
//           mobile: '',
//           gender: '',
//           textarea: '',
//           country: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching form data:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/adddata', formData);
//       console.log(response.data); // Log the response from the server
//       fetchFormData();
//       setFormData({
//         name: '',
//         email: '',
//         mobile: '',
//         gender: '',
//         textarea: '',
//         country: ''
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Data Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               name: e.target.value
//             }))}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               email: e.target.value
//             }))}
//           />
//         </div>
//         <div>
//           <label htmlFor="mobile">Mobile:</label>
//           <input
//             type="text"
//             id="mobile"
//             name="mobile"
//             value={formData.mobile}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               mobile: e.target.value
//             }))}
//           />
//         </div>
//         <div>
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               gender: e.target.value
//             }))}
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="textarea">Textarea:</label>
//           <textarea
//             id="textarea"
//             name="textarea"
//             value={formData.textarea}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               textarea: e.target.value
//             }))}
//           />
//         </div>
//         <div>
//           <label htmlFor="country">Country:</label>
//           <input
//             type="text"
//             id="country"
//             name="country"
//             value={formData.country}
//             onChange={(e) => setFormData(prevState => ({
//               ...prevState,
//               country: e.target.value
//             }))}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Container } from '@mui/material';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    textarea: '',
    country: ''
  });

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await axios.get('/api/multipledata');
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        // Set formData to the last element of the array
        setFormData(data[data.length - 1]);
      } else {
        // Set formData with default values if data is empty or not an array
        setFormData({
          name: '',
          email: '',
          mobile: '',
          gender: '',
          textarea: '',
          country: ''
        });
      }
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/adddata', formData);
      console.log(response.data); // Log the response from the server
      fetchFormData();
      setFormData({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        textarea: '',
        country: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
      <h1 style={{textAlign:"center"}}>Data Form</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={(e) => setFormData(prevState => ({
                ...prevState,
                name: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prevState => ({
                ...prevState,
                email: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="mobile"
              label="Mobile"
              variant="outlined"
              type="text"
              value={formData.mobile}
              onChange={(e) => setFormData(prevState => ({
                ...prevState,
                mobile: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="gender-label">Gender</InputLabel>
              
              <Select
                labelId="gender-label"
                id="gender"
                value={formData.gender}
                onChange={(e) => setFormData(prevState => ({
                  ...prevState,
                  gender: e.target.value
                }))}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Textarea"
              value={formData.textarea}
              onChange={(e) => setFormData(prevState => ({
                ...prevState,
                textarea: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="country"
              label="Country"
              variant="outlined"
              type="text"
              value={formData.country}
              onChange={(e) => setFormData(prevState => ({
                ...prevState,
                country: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12} style={{textAlign:"center"}}>
            <Button variant="contained" type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
      </Container>
    </div>
  );
}

export default App;
