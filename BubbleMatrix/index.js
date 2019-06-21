// DATA
const data = [
  {
    company: "medtronic",
    measure: "coronary stents",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "medtronic",
    measure: "transcatheter valves",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "medtronic",
    measure: "renal denervation",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "medtronic",
    measure: "drug coated balloons",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "medtronic",
    measure: "ivus",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "abbott",
    measure: "coronary stents",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "abbott",
    measure: "transcatheter valves",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "abbott",
    measure: "renal denervation",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "abbott",
    measure: "drug coated balloons",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "abbott",
    measure: "ivus",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "biotronik",
    measure: "coronary stents",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "biotronik",
    measure: "transcatheter valves",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "biotronik",
    measure: "renal denervation",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "biotronik",
    measure: "drug coated balloons",
    value: Math.floor(Math.random() * 100),
  },
  {
    company: "biotronik",
    measure: "ivus",
    value: Math.floor(Math.random() * 100),
  },
];

// UTILS
const getUniq = (data, field) => Array.from(new Set(data.map(d => d[field])));

// RENDER

const nestedData = d3.group(data, d => d.company, d => d.measure);
const companies = getUniq(data, "company");
const measures = getUniq(data, "measure");

const xScale = (data, index) => {
  let band = width / data.length;
  return {
    bandwidth: band,
    left: index && index * band,
    center: index && (index + 1) * band - band / 2,
    right: index && (index + 1) * band,
  };
};

const yScale = (data, index) => {
  let band = height / data.length;
  return {
    bandwidth: band,
    left: index && index * band,
    center: index && (index + 1) * band - band / 2,
    right: index && (index + 1) * band,
  };
};

let container = d3.select(".container");
const width = window.innerWidth;
const height = window.innerHeight;
container
  .append("div")
  .attr("class", "graph-space")
  .attr(
    "style",
    `grid-template-columns: repeat(${measures.length + 1}, 1fr);
      grid-template-rows: repeat(${companies.length + 1}, 1fr)`
  );
// .attr("width", width)
// .attr("height", height);

let graph = container.select(".graph-space");

// const measureRow = graph
//   .selectAll(".measures")
//   .data([null])
//   .enter()
//   .append("div")
//   .attr("class", "measures")
//   .attr("style", `grid-column:0 / ${measures.length}`);

let measureLabels = graph
  .selectAll(".measure-label")
  .data(measures)
  .enter()
  .append("span")
  .attr("class", "measure-label")
  .text(d => d)
  .attr("style", (_, i) => `grid-row: 1 / 2; grid-column:${i + 2} / ${i + 3}`);

// const companyCol = graph
//   .selectAll(".companies")
//   .data([null])
//   .enter()
//   .append("div")
//   .attr("class", "companies");

let companyLabels = graph
  .selectAll(".company-label")
  .data(companies)
  .enter()
  .append("span")
  .attr("class", "company-label")
  .text(d => d)
  .attr("style", (_, i) => `grid-row:${i + 2} / ${i + 3}; grid-column: 1 / 2`);

// let rowWidth = xScale(data).bandwidth;
// let row = graph
//   .selectAll(".row")
//   .data(data.map(d => d))
//   .enter()
//   .append("div")
//   .attr("class", d => d.name)
//   .style("position", "absolute")
//   // .attr("x", (_, i) => xScale(data, i).left)
//   // .attr("y", d => yScale(d.))
//   .attr("width", width);

// const filterRow = (d, row) => d.filter(d.name === row);

// // row
// //   .selectAll(".bubble")
// //   .data(filterRow(data))
// //   .append("circle")
// //   .attr("class", "bubble");
// // .attr("cx", (_, i) => i * 10)
// // .attr("cy", 10)
// // .attr("r", d => d)
// // .attr("fill", "black");
