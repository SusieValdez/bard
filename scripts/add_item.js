import fs from "fs";

const ITEM = process.env.ITEM;
const FILENAME = "items.json";

const oldData = JSON.parse(fs.readFileSync(FILENAME));
const data = [
  {
    item: ITEM,
    timestamp: new Date().toISOString(),
  },
  ...oldData,
];
fs.writeFileSync(FILENAME, JSON.stringify(data, null, 2));
