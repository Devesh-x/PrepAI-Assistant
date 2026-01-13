require("dotenv").config({ override: true });
console.log("JWT_SECRET present:", !!process.env.JWT_SECRET);
if (process.env.JWT_SECRET) console.log("JWT_SECRET length:", process.env.JWT_SECRET.length);
