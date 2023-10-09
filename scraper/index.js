import puppeteer from "puppeteer";
import fs from "fs";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
});

const page = await browser.newPage();

const data = [];

for (let i = 1; i <= 7; i++) {
  await page.goto(
    "https://data.cdc.gov/browse?category=Vaccinations&page=" + i,
  );

  const links = await page.$$eval(".browse2-result-name a", (links) =>
    links.map((link) => link.href),
  );

  const titles = await page.$$eval(".browse2-result-name", (titles) =>
    titles.map((title) => title.textContent.trim()),
  );

  const descriptions = await page.$$eval(
    ".browse2-result-description.collapsible-content div",
    (descriptions) =>
      descriptions.map((description) => description.textContent),
  );

  for (let i = 0; i < links.length; i++) {
    data.push({
      title: titles[i],
      description: descriptions[i],
      link: links[i],
      category: "health",
      tags: ["api"],
    });
  }
}

// save to a json file
fs.writeFileSync("data8.json", JSON.stringify(data));

await browser.close();

// console scrapping

var listContainer = document.querySelector(".collection-results-list__list");

var data = [];
function scrapData() {
  let tempData = [];
  listContainer.children.forEach((child) => {
    const title = child.querySelector(
      ".collection-results-item__title",
    ).innerHTML;
    const description = child.querySelector(
      ".collection-results-item__desc",
    ).innerHTML;
    const link =
      "https://search.earthdata.nasa.gov/search/granules?" +
      "p=" +
      child
        .querySelector(".collection-results-item__link")
        .getAttribute("data-testid")
        .replace("collection-result-item_", "");

    const newData = {
      title,
      description,
      link,
      category: "Agriculture",
      tags: ["api"],
    };
    tempData.push(newData);
  });

  console.log(tempData);
  const lastTitle = data.length != 0 ? data[data.length - 1].title : null;
  if (lastTitle == null) {
    data.push(...tempData);
    listContainer.lastChild.scrollIntoView();
  }
  let shouldPush = false;

  tempData.forEach((tdata) => {
    if (shouldPush) data.push(tdata);

    if (tdata.title == lastTitle) shouldPush = true;
  });
  tempData = [];
  listContainer.lastChild.scrollIntoView();
}

var interval = setInterval(() => {
  scrapData();

  if (data.length == 391) clearInterval(interval);
}, 2000);
