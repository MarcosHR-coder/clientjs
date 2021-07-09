const { Socket } = require('net');
const os = require('os');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const socket = new Socket();

let platform = os.platform();
let real_platform = "";

if (platform == "darwin"){
    real_platform = "MacOS";
} else if (platform == "win32") {
    real_platform = "Windows";
}

socket.connect({ host: '192.168.1.132', port: 8000 });
socket.setEncoding('utf-8');
// socket.write("Hola");

socket.write(real_platform + " (" + platform + ")");

readline.on("line", (line) => {
    socket.write(line);
})

socket.on("data", (data) => {
    console.log("Server: " + data);
})