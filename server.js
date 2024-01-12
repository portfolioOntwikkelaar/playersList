import express from 'express';
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.get('/users', (req, res) => {
  const users = [
    {id:1, name: 'Aaron Fraser'},
    {id:2, name: 'James Pfeffer'},
    {id:3, name: 'Richard Damico'},
    {id:4, name: 'Olivia Thompson'},
    {id:5, name: 'William Taylor'},
    {id:6, name: 'Charlotte Jackson'},
    {id:7, name: 'Willow Smith'},
  ];

  res.send(`
  <h1 class="text-2xl font-bold my-4">Players</h1>
  <ul>
    ${users.map((user) => `<li>${user.name}</li>`).join('')}
  </ul>
  `)
});

app.listen(3000, () => {
  console.log('Server on 3000');
})