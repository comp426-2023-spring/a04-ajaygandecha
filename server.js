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


/**
 * /app/rps/play/ route - JSON input
 */
app.get("/app/rps/play", (req, res) => {
    res.send(JSON.stringify(rpsls.rps(req.body["shot"])));
})

/**
 * /app/rps/play/ route - Query input
 */
app.get("/app/rps/play", (req, res) => {
    res.send(JSON.stringify(rpsls.rps(req.query["shot"])));
})

/**
 * /app/rps/play/ route - Direct URL input
 */
app.get("/app/rps/play/:shot", (req, res) => {
    res.send(JSON.stringify(rpsls.rps(req.params["shot"])));
})


/**
 * /app/rpsls/play/ route - JSON input
 */
app.get("/app/rpsls/play", (req, res) => {
    res.send(JSON.stringify(rpsls.rpsls(req.body["shot"])));
})

/**
 * /app/rpsls/play/ route - Query input
 */
app.get("/app/rpsls/play", (req, res) => {
    res.send(JSON.stringify(rpsls.rpsls(req.query["shot"])));
})

/**
 * /app/rpsls/play/ route - Direct URL input
 */
app.get("/app/rpsls/play/:shot", (req, res) => {
    res.send(JSON.stringify(rpsls.rpsls(req.params["shot"])));
})

/**
 * Undefined endpoints
 */
app.get("*", (_, res) => {
    res.send("404 NOT FOUND");
})
