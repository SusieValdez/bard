import fetch from "node-fetch";

import config from "../config.js";

const item = process.argv[2];
if (item === undefined) {
  console.log("Usage: node ./cli/bard.js URL");
  process.exit();
}

const body = {
  event_type: "add_item",
  client_payload: { item },
};

await fetch("https://api.github.com/repos/SusieHatter/bard/dispatches", {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Basic ${Buffer.from(
      `SusieHatter:${config.githubPersonalAccessToken}`
    ).toString("base64")}`,
  },
});
