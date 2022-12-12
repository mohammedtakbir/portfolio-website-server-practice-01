const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//* middleware
app.use(cors());
app.use(express.json());

const projectsDetails = require('./data/projects-details.json');

app.get('/', (req, res) => {
    res.send('portfolio web sever is running')
});

app.get('/projects-details/:id', (req, res) => {
    const id = req.params.id;
    const details = projectsDetails.find(project => project.id === id);
    res.send(details);
})

app.listen(port, () => {
    console.log(`portfolio web sever is running on ${port}`)
})