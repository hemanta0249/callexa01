const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const path = require('path');
// const connectToMongo = require('./db');

// connectToMongo();
const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: true
});

const port = process.env.PORT || 8000; // Use environment variable for port

app.use(express.json());
app.use(cors());

// API routes
app.use('/api/auth', require('./routes/auth'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't match one above, send back index.html.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Socket.io setup
const ETS = new Map();
const STE = new Map();

io.on("connection", (socket) => {
    socket.on("join-room", (data) => {
        const { room } = data;
        socket.join(room, () => {
            io.to(room).emit("user-joined", { id: socket.id });
            io.to(socket.id).emit("joined-room", data);
        });
    });

    socket.on("call-user", (data) => {
        const { to, offer } = data;
        io.to(to).emit('incoming-call', { from: socket.id, offer });
    });

    socket.on("call-accepted", (data) => {
        const { to, ans } = data;
        io.to(to).emit("call-accepted", { from: socket.id, ans });
    });

    socket.on("nego-needed", (data) => {
        const { offer, to } = data;
        io.to(to).emit("nego-needed", { from: socket.id, offer });
    });

    socket.on("nego-done", (data) => {
        const { to, ans } = data;
        io.to(to).emit("nego-final", { from: socket.id, ans });
    });
});

// Start the server
server.listen(port, () => {
    console.log(`running on the port ${port}`);
});
