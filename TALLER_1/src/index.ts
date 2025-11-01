import { series } from "./data.js";
import { Serie } from "./models/serie.js";

const tbody = document.getElementById("series-table-body")!;
const averageElm = document.getElementById("average-seasons")!;

function renderSeries(series: Serie[]): void {
  series.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tbody.appendChild(row);
  });
}

function getAverageSeasons(series: Serie[]): number {
  const total = series.reduce((sum, s) => sum + s.seasons, 0);
  return total / series.length;
}

renderSeries(series);
averageElm.textContent = getAverageSeasons(series).toFixed(2);
