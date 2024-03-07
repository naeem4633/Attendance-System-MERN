const express = require('express');
const app = express();

// Define routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', ()=>{
    console.log('get');
})