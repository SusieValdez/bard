import fetch from "node-fetch";

import config from "../config.js";

const usage = () =>
  console.log("Usage: node ./cli/bard.js TITLE URL DESCRIPTION");

if (process.argv.length != 5) {
  usage();
  process.exit();
}

const [title, link, description] = process.argv.slice(2);

const body = {
  event_type: "add_item",
  client_payload: { title, link, description },
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
