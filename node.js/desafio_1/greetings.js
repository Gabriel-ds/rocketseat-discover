const myModules = require("./flags")

console.log(`Oi ${myModules("--name")}. ${myModules("--greeting")}`)