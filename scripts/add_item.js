import fs from "fs";

const TITLE = process.env.TITLE;
const LINK = process.env.LINK;
const FILENAME = "items.json";

const oldData = JSON.parse(fs.readFileSync(FILENAME));
const data = [
  {
    title: TITLE,
    link: LINK,
    timestamp: new Date().toISOString(),
  },
  ...oldData,
];
fs.writeFileSync(FILENAME, JSON.stringify(data, null, 2));
