// Fetch API

const summary = "https://api.covid19api.com/summary";
const dailyTotal =
  "https://api.covid19api.com/total/dayone/country/ethiopia/status/confirmed";

fetch(dailyTotal)
  .then((response) => response.json())
  .then((data) => {
    const c = data[0].Cases;
    const d = data[0].Date;

    const c2 = data[10].Cases;
    const d2 = data[10].Date;

    const c3 = data[20].Cases;
    const d3 = data[20].Date;

    const c4 = data[30].Cases;
    const d4 = data[30].Date;

    const c5 = data[40].Cases;
    const d5 = data[40].Date;

    const c6 = data[50].Cases;
    const d6 = data[50].Date;

    const c7 = data[60].Cases;
    const d7 = data[60].Date;

    const c8 = data[70].Cases;
    const d8 = data[70].Date;

    const c9 = data[80].Cases;
    const d9 = data[80].Date;

    const c10 = data[90].Cases;
    const d10 = data[90].Date;

    const c11 = data[100].Cases;
    const d11 = data[100].Date;

    const c12 = data[110].Cases;
    const d12 = data[110].Date;

    const c13 = data[120].Cases;
    const d13 = data[120].Date;

    const c14 = data[130].Cases;
    const d14 = data[130].Date;

    const c15 = data[140].Cases;
    const d15 = data[140].Date;

    const c16 = data[150].Cases;
    const d16 = data[150].Date;

    const c17 = data[160].Cases;
    const d17 = data[160].Date;

    const c18 = data[170].Cases;
    const d18 = data[170].Date;

    const c19 = data[180].Cases;
    const d19 = data[180].Date;

    const c20 = data[190].Cases;
    const d20 = data[190].Date;

    const c21 = data[200].Cases;
    const d21 = data[200].Date;

    const c22 = data[250].Cases;
    const d22 = data[250].Date;

    const c23 = data[270].Cases;
    const d23 = data[270].Date;

    // Second Chart Values

    const c24 = data[323].Cases;
    const d24 = data[323].Date;

    const c25 = data[353].Cases;
    const d25 = data[353].Date;

    const c26 = data[383].Cases;
    const d26 = data[383].Date;

    const c27 = data[413].Cases;
    const d27 = data[413].Date;

    const c28 = data[443].Cases;
    const d28 = data[443].Date;

    const c29 = data[473].Cases;
    const d29 = data[473].Date;

    const c30 = data[503].Cases;
    const d30 = data[503].Date;

    const c31 = data[533].Cases;
    const d31 = data[533].Date;

    const c32 = data[563].Cases;
    const d32 = data[563].Date;

    const c33 = data[593].Cases;
    const d33 = data[593].Date;

    const c34 = data[623].Cases;
    const d34 = data[623].Date;

    const c35 = data[653].Cases;
    const d35 = data[653].Date;
    console.log(c);

    // Third Chart Values

    const c36 = data[1024].Cases;
    const d36 = data[1024].Date;

    const c37 = data[1030].Cases;
    const d37 = data[1030].Date;

    const c38 = data[1036].Cases;
    const d38 = data[1036].Date;

    const c39 = data[1042].Cases;
    const d39 = data[1042].Date;

    const c40 = data[1048].Cases;
    const d40 = data[1048].Date;

    const c41 = data[1054].Cases;
    const d41 = data[1054].Date;

    const c42 = data[1060].Cases;
    const d42 = data[1060].Date;

    const c43 = data[1066].Cases;
    const d43 = data[1066].Date;

    const c44 = data[1072].Cases;
    const d44 = data[1072].Date;

    const c45 = data[1082].Cases;
    const d45 = data[1082].Date;

    const c46 = data[1091].Cases;
    const d46 = data[1091].Date;

    console.log(data);

    // Graphs Bar Chart

    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Confirmed Cases In 2020",
      },
      subtitle: {
        text: "Cases",
      },
      xAxis: {
        categories: [
          d,
          d2,
          d3,
          d4,
          d5,
          d6,
          d7,
          d8,
          d9,
          d10,
          d11,
          d12,
          d13,
          d14,
          d15,
          d16,
          d17,
          d18,
          d19,
          d20,
          d21,
          d22,
          d23,
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Cases",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:1f} Cases</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Confirmed Cases",
          data: [
            c,
            c2,
            c3,
            c4,
            c5,
            c6,
            c7,
            c8,
            c9,
            c10,
            c11,
            c12,
            c13,
            c14,
            c15,
            c16,
            c17,
            c18,
            c19,
            c20,
            c21,
            c22,
            c23,
          ],
        },
      ],
    });

    // Graph Chart Clone

    Highcharts.chart("containerC", {
      chart: {
        type: "column",
      },
      title: {
        text: "Confirmed Cases In 2021",
      },
      subtitle: {
        text: "Cases",
      },
      xAxis: {
        categories: [
          d24,
          d25,
          d26,
          d27,
          d28,
          d29,
          d30,
          d31,
          d32,
          d33,
          d34,
          d35,
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Cases",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:1f} Cases</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Confirmed Cases",
          data: [c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35],
        },
      ],
    });

    // Graph Second Clone 2
    Highcharts.chart("containerx", {
      chart: {
        type: "column",
      },
      title: {
        text: "Confirmed Cases In 2023",
      },
      subtitle: {
        text: "Cases",
      },
      xAxis: {
        categories: [d36, d37, d38, d39, d40, d41, d42, d43, d44, d45, d46],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Cases",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:1f} Cases</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Confirmed Cases",
          data: [c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46],
        },
      ],
    });
  })

  .catch((error) => console.error(error));

fetch(summary)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // Page 1
    const country = document.getElementById("count");
    const nCases = document.getElementById("nCases");
    const tCases = document.getElementById("tCases");
    const nDeaths = document.getElementById("nDeaths");
    const tDeaths = document.getElementById("tDeaths");

    // Page 2
    const country2 = document.getElementById("count2");
    const nCases2 = document.getElementById("nCases2");
    const tCases2 = document.getElementById("tCases2");
    const nDeaths2 = document.getElementById("nDeaths2");
    const tDeaths2 = document.getElementById("tDeaths2");

    // Page 3
    const country3 = document.getElementById("count3");
    const nCases3 = document.getElementById("nCases3");
    const tCases3 = document.getElementById("tCases3");
    const nDeaths3 = document.getElementById("nDeaths3");
    const tDeaths3 = document.getElementById("tDeaths3");

    // Page 4
    const country4 = document.getElementById("count4");
    const nCases4 = document.getElementById("nCases4");
    const tCases4 = document.getElementById("tCases4");
    const nDeaths4 = document.getElementById("nDeaths4");
    const tDeaths4 = document.getElementById("tDeaths4");

    // Page 5
    const country5 = document.getElementById("count5");
    const nCases5 = document.getElementById("nCases5");
    const tCases5 = document.getElementById("tCases5");
    const nDeaths5 = document.getElementById("nDeaths5");
    const tDeaths5 = document.getElementById("tDeaths5");

    // const countriesMain = data.Countries;

    // Pag Variables
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const oneMain = document.getElementById("oneMain");

    //GLOBAL DATA
    // VARIABLE DECLARATION

    // List
    const list = data.Global;

    // Newly Confirmed
    const newConfirmed = list.NewConfirmed;
    const newConfirmedString = newConfirmed.toLocaleString("en-US");

    // Newly Recovered
    const newRecovered = list.NewRecovered;
    const newRecoveredString = newRecovered.toLocaleString("en-US");

    // New Deaths
    const newDeaths = list.NewDeaths;
    const newDeathsString = newDeaths.toLocaleString("en-US");

    // Total Confirmed
    const totalConfirmed = list.TotalConfirmed;
    const totalConfirmedString = totalConfirmed.toLocaleString("en-US");

    // Total Death
    const totalDeath = list.TotalDeaths;
    const totalDeathString = totalDeath.toLocaleString("en-US");

    // Total Recovered
    const totalRecovered = list.TotalRecovered;
    const totalRecoveredString = totalRecovered.toLocaleString("en-US");

    // DISPLAYING DATA TO HTML

    // New Recovered

    document.getElementById("totalRecovered").innerHTML = totalRecoveredString;

    // Total & New confirmed

    document.getElementById("totConfirmed").innerHTML = totalConfirmedString;
    document.getElementById("newConfirmed").innerHTML =
      newConfirmedString + " new confirmed";

    // Total & New deaths

    document.getElementById("totDeaths").innerHTML = totalDeathString;
    document.getElementById("newDeaths").innerHTML =
      newDeathsString + " new deaths";

    // ETHIOPIA DATA
    // Variable Declaration

    const list2 = data.Countries[57];
    console.log(data);

    // ET New Recovered

    const etNewRec = list2.NewRecovered;
    const etNewRecStr = etNewRec.toLocaleString("en-US");

    // New Death

    const etNewDeath = list2.NewDeaths;
    const etNewDeathStr = etNewDeath.toLocaleString("en-US");

    // Total Death

    const etTotalDeath = list2.TotalDeaths;
    const etTotalDeathStr = etTotalDeath.toLocaleString("en-US");

    // New Confirmed

    const etNewConfirmed = list2.NewConfirmed;
    const etNewConfirmedStr = etNewConfirmed.toLocaleString("en-US");

    // Total Confirmed

    const etTotConfirmed = list2.TotalConfirmed;
    const etTotConfirmedStr = etTotConfirmed.toLocaleString("en-US");

    // DISPLAYING DATA TO HTML

    // ET New Recovered

    document.getElementById("etRec").innerHTML = etNewRecStr;

    // ET Total Confirmed

    document.getElementById("etTotCon").innerHTML = etTotConfirmedStr;

    // ET New Confirmed

    document.getElementById("etNewCon").innerHTML =
      etNewConfirmedStr + " new cases";

    // ET Total Deaths

    document.getElementById("totConDeath").innerHTML = etTotalDeathStr;

    // ET New Deaths

    document.getElementById("newConDeath").innerHTML =
      etNewDeathStr + " new deaths";

    // Pagination
    let pagFunction = (x, y) => {
      for (i = x; i < y; i++) {
        const countries = data.Countries[i];

        const e1 = document.createElement("p");
        e1.textContent = countries.Country;
        country.append(e1);

        const e2 = document.createElement("p");
        e2.textContent = countries.NewConfirmed;
        nCases.append(e2);

        const e3 = document.createElement("p");
        e3.textContent = countries.TotalConfirmed;
        tCases.append(e3);

        const e4 = document.createElement("p");
        e4.textContent = countries.NewDeaths;
        nDeaths.append(e4);

        const e5 = document.createElement("p");
        e5.textContent = countries.TotalDeaths;
        tDeaths.append(e5);
      }
    };

    pagFunction(0, 39);

    let SecondPagFunction = (x, y) => {
      for (i = x; i < y; i++) {
        const countries = data.Countries[i];

        const e1 = document.createElement("p");
        e1.textContent = countries.Country;
        country2.append(e1);

        const e2 = document.createElement("p");
        e2.textContent = countries.NewConfirmed;
        nCases2.append(e2);

        const e3 = document.createElement("p");
        e3.textContent = countries.TotalConfirmed;
        tCases2.append(e3);

        const e4 = document.createElement("p");
        e4.textContent = countries.NewDeaths;
        nDeaths2.append(e4);

        const e5 = document.createElement("p");
        e5.textContent = countries.TotalDeaths;
        tDeaths2.append(e5);
      }
    };

    SecondPagFunction(40, 79);

    let ThirdPagFunction = (x, y) => {
      for (i = x; i < y; i++) {
        const countries = data.Countries[i];

        const e1 = document.createElement("p");
        e1.textContent = countries.Country;
        country3.append(e1);

        const e2 = document.createElement("p");
        e2.textContent = countries.NewConfirmed;
        nCases3.append(e2);

        const e3 = document.createElement("p");
        e3.textContent = countries.TotalConfirmed;
        tCases3.append(e3);

        const e4 = document.createElement("p");
        e4.textContent = countries.NewDeaths;
        nDeaths3.append(e4);

        const e5 = document.createElement("p");
        e5.textContent = countries.TotalDeaths;
        tDeaths3.append(e5);
      }
    };

    ThirdPagFunction(80, 119);

    let FourthPagFunction = (x, y) => {
      for (i = x; i < y; i++) {
        const countries = data.Countries[i];

        const e1 = document.createElement("p");
        e1.textContent = countries.Country;
        country4.append(e1);

        const e2 = document.createElement("p");
        e2.textContent = countries.NewConfirmed;
        nCases4.append(e2);

        const e3 = document.createElement("p");
        e3.textContent = countries.TotalConfirmed;
        tCases4.append(e3);

        const e4 = document.createElement("p");
        e4.textContent = countries.NewDeaths;
        nDeaths4.append(e4);

        const e5 = document.createElement("p");
        e5.textContent = countries.TotalDeaths;
        tDeaths4.append(e5);
      }
    };

    FourthPagFunction(120, 159);

    let FifthPagFunction = (x, y) => {
      for (i = x; i < y; i++) {
        const countries = data.Countries[i];

        const e1 = document.createElement("p");
        e1.textContent = countries.Country;
        country5.append(e1);

        const e2 = document.createElement("p");
        e2.textContent = countries.NewConfirmed;
        nCases5.append(e2);

        const e3 = document.createElement("p");
        e3.textContent = countries.TotalConfirmed;
        tCases5.append(e3);

        const e4 = document.createElement("p");
        e4.textContent = countries.NewDeaths;
        nDeaths5.append(e4);

        const e5 = document.createElement("p");
        e5.textContent = countries.TotalDeaths;
        tDeaths5.append(e5);
      }
    };

    FifthPagFunction(160, 197);

    console.log(data);

    const pageBtns = document.querySelectorAll(".page-btn");
    const pages = document.querySelectorAll(".page");

    function showPage(pageNum) {
      pages.forEach((page) => {
        if (page.dataset.page == pageNum) {
          page.classList.remove("hidden");
          page.classList.add("flex");
        } else {
          page.classList.add("hidden");
          page.classList.remove("flex");
        }
      });
    }

    function handlePageClick(e) {
      const pageNum = e.target.dataset.page;
      showPage(pageNum);
    }

    pageBtns.forEach((btn) => {
      btn.addEventListener("click", handlePageClick);
    });

    // Show the first page by default
    showPage(1);

    // Graph 2 Confirmed Cases

    Highcharts.chart("container2", {
      chart: {
        type: "line",
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25,
        },
      },
      title: {
        text: "",
      },
      subtitle: {
        text: "World Wide Data about Covid 19",
      },
      xAxis: {
        categories: [
          "New Confirmed",
          "New Deaths",
          "New Recovered",
          "Total Confirmed",
          "Total Recovered",
          "Total Deaths",
        ],
        title: {
          text: "",
        },
      },
      yAxis: {
        title: {
          margin: 20,
          text: "Amount",
        },
      },
      tooltip: {
        headerFormat: " {point.x}</b><br>",
      },
      plotOptions: {
        series: {
          depth: 25,
          colorByPoint: true,
        },
      },
      series: [
        {
          data: [
            newConfirmed,
            newDeaths,
            newRecovered,
            totalConfirmed,
            totalRecovered,
            totalDeath,
          ],
          name: "",
          showInLegend: false,
        },
      ],
    });
  })

  .catch((error) => console.error(error));

// Toggle between Ethiopia and global buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("text1");
const div2 = document.getElementById("text2");

const div3 = document.getElementById("container");
const div4 = document.getElementById("containerC");

button1.addEventListener("click", () => {
  div1.classList.add("flex");
  div1.classList.remove("hidden");
  button1.classList.add("animate-pulse");
  button2.classList.remove("animate-pulse");
  div2.classList.add("hidden");
  div2.classList.remove("flex");
});

button2.addEventListener("click", () => {
  div1.classList.remove("flex");
  div1.classList.add("hidden");
  button2.classList.add("animate-pulse");
  button1.classList.remove("animate-pulse");
  div2.classList.remove("hidden");
  div2.classList.add("flex");
});

// Show on Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
