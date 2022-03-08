// controllers/chat
const chat = (io) => {
    // console.log("live chat ---> ", io.opts);
    io.on("connection", (socket) => {
        console.log("socket id", socket.id);

        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    });
  };

  export default chat;