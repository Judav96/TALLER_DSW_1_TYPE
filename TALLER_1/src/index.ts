import { series } from "./data.js";
import { Serie } from "./models/series.js";

// Obtener elementos del DOM
var seriesTableBody = document.getElementById("series-table-body")!;
var averageElement = document.getElementById("average-seasons")!;
var detailElement = document.getElementById("series-detail")!;

function renderSeries(seriesList: Serie[]): void {
  seriesTableBody.innerHTML = "";

  for (var i = 0; i < seriesList.length; i++) {
    var s = seriesList[i];

    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" + s.id + "</td>" +
      "<td><a href='#' id='link-" + s.id + "'>" + s.name + "</a></td>" +
      "<td>" + s.channel + "</td>" +
      "<td>" + s.seasons + "</td>";

    seriesTableBody.appendChild(row);

    (function(serie) {
      var link = document.getElementById("link-" + serie.id)!;
      link.onclick = function() {
        showDetail(serie);
        return false; 
      };
    })(s);
  }
}

function showDetail(serie: Serie): void {
  detailElement.innerHTML =
    "<div class='card' style='width: 100%;'>" +
    "<img src='" + serie.image + "' class='card-img-top' alt='" + serie.name + "'>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>" + serie.name + "</h5>" +
    "<p class='card-text'>" + serie.description + "</p>" +
    "<a href='" + serie.link + "' target='_blank'>Ver más</a>" +
    "</div></div>";
}

function getAverageSeasons(seriesList: Serie[]): number {
  var total = 0;
  for (var i = 0; i < seriesList.length; i++) {
    total += seriesList[i].seasons;
  }
  return total / seriesList.length;
}

renderSeries(series);
averageElement.textContent = getAverageSeasons(series).toFixed(2);
