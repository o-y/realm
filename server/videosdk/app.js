// This is carbon copy of https://github.com/videosdk-live/videosdk-rtc-api-server-examples/tree/main/nodejs
// but should work fine for the purpose of a demo.

const VIDEOSDK_API_ENDPOINT = "https://api.videosdk.live"
const VIDEOSDK_API_KEY = "8681eba5-88cb-415a-9890-4b4eb237c929"
const VIDEOSDK_SECRET_KEY = "977a06869ab76e43cac85893f494c5b8b3406710db5709a8d833532a94ef3e11"

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { default: fetch } = require("node-fetch");
const jwt = require("jsonwebtoken");

const PORT = 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Video SDK Server live!");
});

app.get("/get-token", (req, res) => {
  const API_KEY = VIDEOSDK_API_KEY;
  const SECRET_KEY = VIDEOSDK_SECRET_KEY;

  const options = { expiresIn: "30m", algorithm: "HS256" };

  const payload = {
    apikey: API_KEY,
    permissions: ["allow_join", "allow_mod"], // also accepts "ask_join"
  };

  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
});

app.post("/create-meeting/", (req, res) => {
  const { token, region } = req.body;
  const url = `${VIDEOSDK_API_ENDPOINT}/api/meetings`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
    body: JSON.stringify({ region }),
  };

  fetch(url, options)
      .then((response) => response.json())
      .then((result) => res.json(result)) // result will contain meetingId
      .catch((error) => console.error("error", error));
});

app.post("/validate-meeting/:meetingId", (req, res) => {
  const token = req.body.token;
  const meetingId = req.params.meetingId;

  const url = `${VIDEOSDK_API_ENDPOINT}/api/meetings/${meetingId}`;

  const options = {
    method: "POST",
    headers: { Authorization: token },
  };

  fetch(url, options)
      .then((response) => response.json())
      .then((result) => res.json(result)) // result will contain meetingId
      .catch((error) => console.error("error", error));
});

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});