var getGraphData = angular.module('getGraphData', []);
//var Chart = require('src/chart.js')

getGraphData.controller('getGraphData', function($scope, $http){
	$http({
		method : "GET",
		url : '/getMockGraphData',
		}).then(function(response) {
		  var realTimeData = response.data;
      console.log(realTimeData);
			var ctx = document.getElementById("lineChart");
			var myChart = new Chart(ctx, {
			    type: 'line',
			    data: {
			        labels : ["January","February","March","April","May","June"],
				    datasets: [
				    {
				    	label:" The first dataset",
				        fillColor : "rgba(172,194,132,0.4)",
				        backgroundColor: "rgba(255,99,132,0.2)",
						strokeColor : "#ACC26D",
						pointColor : "#fff",
						pointStrokeColor : "#9DB86D",
						data : realTimeData.data
				    },
				    {
				    	label:" The second dataset",
				        fillColor : "rgba(172,194,132,0.4)",
				        backgroundColor: "rgba(255,99,132,0.2)",
						strokeColor : "#ACC26D",
						pointColor : "#fff",
						pointStrokeColor : "#9DB86D",
						data : [100,130,150,170,190,220]
				    }
				    ]
			    }
			});

			var ctx3 = document.getElementById("donutChart");
			var myDoughnutChart = new Chart(ctx3, {
			    type: 'doughnut',
			    data: {
			        labels: [
			                 "Red",
			                 "Green",
			                 "Yellow"
			             ],
			             datasets: [
			                 {
			                     data: [300, 50, 100],
			                     backgroundColor: [
			                         "#FF6384",
			                         "#36A2EB",
			                         "#FFCE56"
			                     ],
			                     hoverBackgroundColor: [
			                         "#FF6384",
			                         "#36A2EB",
			                         "#FFCE56"
			                     ]
			                 }]
			         }
			});
			var ctx4 = document.getElementById("barChart");
			var myBarChart = new Chart(ctx4, {
			    type: 'bar',
			    data: {
			        labels: ["January", "February", "March", "April", "May", "June", "July"],
			        datasets: [
			            {
			                label: "My First dataset",
			                backgroundColor: "rgba(179,181,198,0.2)",
			                borderColor: "rgba(255,99,132,1)",
			                borderWidth: 1,
			                hoverBackgroundColor: "rgba(255,99,132,0.4)",
			                hoverBorderColor: "rgba(255,99,132,1)",
			                data: [65, 59, 80, 81, 56, 55, 40],
			            },
			            {
			                label: "My Second dataset",
			                backgroundColor: "rgba(255,99,132,0.2)",
			                borderColor: "rgba(255,99,132,1)",
			                borderWidth: 1,
			                hoverBackgroundColor: "rgba(255,99,132,0.4)",
			                hoverBorderColor: "rgba(255,99,132,1)",
			                data: [12, 52, 65, 45, 67, 32, 12],
			            }
			        ]
			    }
			});
		 }, function() {
	});
});
//});
