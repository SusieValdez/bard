import fs from "fs";

const PAYLOAD = JSON.parse(process.env.PAYLOAD);
const FILENAME = "items.json";

const oldData = JSON.parse(fs.readFileSync(FILENAME));
const data = [
  {
    ...PAYLOAD,
    timestamp: new Date().toISOString(),
  },
  ...oldData,
];
fs.writeFileSync(FILENAME, JSON.stringify(data, null, 2));
