function showForm() {
  document.getElementById("show-form").style.display = "block";
  document.getElementById("show-button").style.display = "block";
}

function teamChart() {
  new Chart(document.getElementById("doughnut-chart"), {
    type: "doughnut",
    data: {
      labels: [
        "Manchester City",
        "Manchester United",
        "Liverpool",
        "Leicester City",
        "Wolverhampton Wanderers",
      ],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "#3e95cd",
            "#c45850",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
          ],
          data: [473, 703, 609, 209, 90],
          hoverOffset: 6,
          datalabels: {
            color: "white",
            font: {
                weight: "bold",
              }
          }
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      title: {
        display: true,
        text: "All time matches won by the Top 5 teams",
      },
    },
    plugins: [ChartDataLabels],
  });
}

function playersChart() {
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [
        "Striker",
        "Mid Fielder",
        "Center Back",
        "Right Back",
        "Goal Keeper",
      ],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [160, 290, 100, 105, 70],
          datalabels: {
            color: "white",
            font: {
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
        legend: {
            display: false
         },
      title: {
        display: true,
        text: "Number of Players by Position",
      },
      scales: {
        y: {
            grace: '1%',
        }
      },
    },
    plugins: [ChartDataLabels],
  });
}

function register(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(150px)";
}
function login(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(280px)";
    Indicator.style.transform = "translateX(25px)";
}

document.querySelector(".input-field").addEventListener('click', function(){
  backgroundColor = '#F2F2F2';
});


document.addEventListener("DOMContentLoaded", function () {
  teamChart();
  playersChart();
});
