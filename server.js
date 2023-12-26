// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello, welcome to Tigersheet!');
// });

// app.get('/api/get-records', async (req, res) => {
//   const sheetId = req.query.sheet_id;

//   if (!sheetId) {
//     return res.status(400).json({ error: 'Missing sheet_id parameter' });
//   }

//   try {
//     // Use sheetId in the API call
//     const response = await axios.get(`https://riktam.tigersheet.com/api/sheet-api/get-records/${sheetId}`, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



    

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, welcome to Tigersheet!');
});

// app.get('/api/get-records/:sheet_id', async (req, res) => {
//   const sheetId = req.params.sheet_id;
//   const apiKey = 'C9B53439FA03FB946C93E9AC9963070B221EC0E3CD66399A';
//   if (!sheetId) {
//     return res.status(400).json({ error: 'Missing sheet_id parameter' });
//   }

//   try {
//     // Use sheetId in the API call
//   const response = await axios({
//     method: 'POST',
//     url:`https://riktam.tigersheet.com/api/sheet-api/get-records/`,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       'Authorization': `Bearer ${apiKey}`,
//     },
//     data: {
//       sheet_id: sheetId
//     }
//   });
//     console.log(response.data, 'response');
//     res.json(response.data);
    
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.get('/sendpostrequest', async (req, res) => {
  try {
    const url = 'https://riktam.tigersheet.com/api/sheet-api/get-records';
    const headers = {
      'Authorization': 'C9B53439FA03FB946C93E9AC9963070B221EC0E3CD66399A',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };  
    const payload = {
      'sheet_id': '78425244',
  
    };
    const response = await axios.post(url, payload, { headers });
    console.log('Response from Tigersheet', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in post request:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
