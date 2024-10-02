const express = require("express");
const connectToMongo = require('./db');
const { Server } = require("socket.io");
const cors = require('cors');
const path = require('path');

connectToMongo();

const app = express();
const io = new Server();

const port = process.env.PORT || 8000; // Use environment variable for port

app.use(express.json());
app.use(cors());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../build')));

// API routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send("hello world");
})

// The "catchall" handler: for any request that doesn't match one above, send back index.html.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// Socket.io setup
const server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

const ETS = new Map();
const STE = new Map();

io.on("connection", (socket) =>{
    socket.on("join-room", (data)=>{
        console.log(data);
        const {room} = data;
        console.log(room);
        // ETS.set(email, socket.id);
        // STE.set(socket.id, email);
        io.to(room).emit("user-joined", {id: socket.id});
        socket.join(room);
        io.to(socket.id).emit("joined-room", data);
    })

    socket.on("call-user", (data)=>{
        const {to, offer} = data;
        io.to(to).emit('incoming-call', {from: socket.id, offer});
    })

    socket.on("call-accepted", (data)=>{
        const {to, ans} = data;
        io.to(to).emit("call-accepted", {from: socket.id, ans});
    })

    socket.on("nego-needed", (data)=>{
        const {offer, to} = data;
        io.to(to).emit("nego-needed", {from: socket.id, offer})
    })

    socket.on("nego-done", (data)=>{
        const {to, ans} = data;
        io.to(to).emit("nego-final", {from: socket.id, ans});
    })
})

io.attach(server);