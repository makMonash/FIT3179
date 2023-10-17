var vg_5 = "ganttchart.vg";
vegaEmbed("#gantt", vg_5)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

vegaEmbed("#selectedHeatMap", "Nahmap.vg")
  .then(function (result) {
    // Access the Vega view instance as result.view
  })
  .catch(console.error);

document.addEventListener("DOMContentLoaded", function () {
  const heatSelector = document.getElementById("HeatSelector");
  const selectedChart = document.getElementById("selectedHeatMap");

  const initialSelectedValue = "nahmap";
  heatSelector.dispatchEvent(new Event("change"));
  updateChartDescription(initialSelectedValue);
  heatSelector.addEventListener("change", function () {
    const selectedValue = heatSelector.value;
    let vgFilePath;

    switch (selectedValue) {
      case "africahmap":
        vgFilePath = "Africahmap.vg";
        break;
      case "asiahmap":
        vgFilePath = "Asiahmap.vg";
        break;
      case "sahmap":
        vgFilePath = "SAhmap.vg";
        break;
      case "nahmap":
        vgFilePath = "NAhmap.vg";
        break;
      case "eurhmap":
        vgFilePath = "Europehmap.vg";
        break;
      default:
        vgFilePath = "NAhmap.vg";
    }

    if (vgFilePath) {
      vegaEmbed(selectedChart, vgFilePath)
        .then(function (result) {
          // Access the Vega view instance as result.view
        })
        .catch(console.error);
    } else {
      selectedChart.innerHTML = "Select a chart to display.";
    }
    updateChartDescription(initialSelectedValue);
  });

  function updateChartDescription(selectedValue) {
    switch (selectedValue) {
      case "africahmap":
        vgFilePath = "Africahmap.vg";
        break;
      case "asiahmap":
        vgFilePath = "Asiahmap.vg";
        break;
      case "sahmap":
        vgFilePath = "SAhmap.vg";
        break;
      case "nahmap":
        vgFilePath = "NAhmap.vg";
        break;
      case "eurhmap":
        vgFilePath = "Europehmap.vg";
        break;
      default:
        vgFilePath = "NAhmap.vg";
    }
  }
  // Inside your switch statement
  console.log("vgFilePath:", vgFilePath);
});
vegaEmbed("#selectedChart", "barchart1.vg")
  .then(function (result) {
    // Access the Vega view instance as result.view
  })
  .catch(console.error);
document.addEventListener("DOMContentLoaded", function () {


  const chartSelector = document.getElementById("chartSelector");
  const selectedChart = document.getElementById("selectedChart");
  const chartDescription = document.getElementById("chart-desc");

  chartSelector.value = "bar1";
  chartSelector.dispatchEvent(new Event("change"));

  chartSelector.addEventListener("change", function () {
    const selectedValue = chartSelector.value;
    let vgFilePath;

    switch (selectedValue) {
      case "bar1":
        vgFilePath = "barchart1.vg";
        chartDescription.textContent =
          "Now, let's turn our gaze to the paramount metro systems, ranked by annual ridership. This ranking offers a glimpse into cities with the most bustling metro networks, complemented by insights into their respective regions.";
        break;
      case "bar2":
        vgFilePath = "barchart2.vg";
        chartDescription.textContent =
          "Lets traverse the globe to showcase the longest metro systems based on kilometers of track. This segment invites you to compare the five most extensive metro networks globally and their associated regions.";
        break;
      case "bar3":
        vgFilePath = "barchart3.vg";
        chartDescription.textContent =
          "Our focus sharpens on the number of stations within metro systems, presenting the top five networks with the most station counts and offering a snapshot of their respective regions.";
        break;
      default:
        vgFilePath = null;
        chartDescription.textContent = "Select a chart to display.";
    }

    if (vgFilePath) {
      vegaEmbed(selectedChart, vgFilePath)
        .then(function (result) {
          // Access the Vega view instance as result.view
        })
        .catch(console.error);
    } else {
      selectedChart.innerHTML = "Select a chart to display.";
    }
    chartDescription.style.fontFamily = "Times New Roman, sans-serif";
    chartDescription.style.fontSize = "18px";
    chartDescription.style.fontStyle = "normal";
  });
});

var vg_1 = "Mapass2.vg";
vegaEmbed("#map", vg_1)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_7 = "donutchart.vg";

vegaEmbed("#donut", vg_7)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);