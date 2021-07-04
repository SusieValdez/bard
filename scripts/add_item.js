import fs from "fs";
import request from "request";
import cheerio from "cheerio";

const PAYLOAD = JSON.parse(process.env.PAYLOAD);

const FILENAME = "data/recently-read.json";

request(PAYLOAD.link, (error, response, html) => {
  if (error) {
    console.log(error, html);
    return;
  }

  const $ = cheerio.load(html);

  const description = $(`meta[property="og:description"]`).attr("content");
  const image = $(`meta[property="og:image"]`).attr("content");
  const title = $(`meta[property="og:title"]`).attr("content");

  const oldData = JSON.parse(fs.readFileSync(FILENAME));
  const data = [
    {
      ...PAYLOAD,
      title,
      description,
      image,
      timestamp: new Date().toISOString(),
    },
    ...oldData,
  ];
  fs.writeFileSync(FILENAME, JSON.stringify(data, null, 2));
});
