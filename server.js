#!/usr/bin/env node
import "./lib/rpsls.js"
import express from "express"
import minimist from "minimist"
import rpsls from "./lib/rpsls.js";

// Create express app
const app = express();

// Set default port to 5000
let args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Use JSON and URLEnconded parameters
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Begin Listening
app.listen(port);

/** 
 * /app route
 * Sends 200 code when API is called
*/
app.get("/app", (_, res) => {
    res.send("200 OK");
})

/**
 * /app/rps/ route 
 */
app.get("/app/rps", (_, res) => {
    res.send(JSON.stringify(rpsls.rpsDefault()));
})

/**
 * /app/rpsls/ route
 */
app.get("/app/rpsls", (_, res) => {
    res.send(JSON.stringify(rpsls.rpslsDefault()));
})

