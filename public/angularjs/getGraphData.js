var getGraphData = angular.module('getGraphData', []);
//var Chart = require('src/chart.js')

getGraphData.controller('getGraphData', function($scope, $http){
	$http({
		method : "GET",
		url : '/getMonthlyCouponCount',
		}).then(function(response) {
		  var realTimeData = response.data;
      var arrayLength = realTimeData.length;
      var monthLabels = []
      var monthCount = []
      for (var i = 0; i < arrayLength; i++) {
          monthLabels.push(realTimeData[i]["month"]);
          monthCount.push(realTimeData[i]["count"]);
      }
			var ctx = document.getElementById("lineChart");
			var myChart = new Chart(ctx, {
			    type: 'line',
			    data: {
			        labels : monthLabels,
				    datasets: [
  				    {
  				    	label:"Coupon Count by Month",
  				        fillColor : "rgba(172,194,132,0.4)",
  				        backgroundColor: "rgba(255,99,132,0.2)",
  						strokeColor : "#ACC26D",
  						pointColor : "#fff",
  						pointStrokeColor : "#9DB86D",
  						data : monthCount
  				    },
  				    // {
  				    // 	label:" The second dataset",
  				    //     fillColor : "rgba(172,194,132,0.4)",
  				    //     backgroundColor: "rgba(255,99,132,0.2)",
  						// strokeColor : "#ACC26D",
  						// pointColor : "#fff",
  						// pointStrokeColor : "#9DB86D",
  						// data : [100,130,150,170,190,220]
  				    // }
				    ]
			    }
			});
		 }, function() {
	});





$http({
		method : "GET",
		url : '/getCategoryCount',
		}).then(function(response) {
      var realTimeData = response.data;
      var arrayLength = realTimeData.length;
      var categoryLabels = []
      var categoryCount = []
      for (var i = 0; i < arrayLength; i++) {
          categoryLabels.push(realTimeData[i]["category"]);
          categoryCount.push(realTimeData[i]["count"]);
      }

      var ctx3 = document.getElementById("donutChart");
      var myDoughnutChart = new Chart(ctx3, {
          type: 'doughnut',
          data: {
              labels: categoryLabels,
                   datasets: [
                       {
                           data: categoryCount,
                           backgroundColor: [
                               "#FF6384",
                               "#36A2EB",
                               "#FFCE56",
                               "#CD5C5C",
                               "#F08080",
                               "#FA8072",
                               "#E9967A",
                               "#FFA07A",
                               "#00FF00",
                               "#800080",
                               "#000080",
                               "#008080",
                               "#FF0000"
                           ],
                           hoverBackgroundColor: [
                               "#FF6384",
                               "#36A2EB",
                               "#FFCE56",
                               "#CD5C5C",
                               "#F08080",
                               "#FA8072",
                               "#E9967A",
                               "#FFA07A",
                               "#00FF00",
                               "#800080",
                               "#000080",
                               "#008080",
                               "#FF0000"
                           ]
                       }]
               }
      });
    }, function() {
 });







 $http({
 		method : "GET",
 		url : '/getWeekDayCouponCount',
 		}).then(function(response) {
       var realTimeData = response.data;
       console.log(realTimeData);
       var dayCount = []
       dayCount.push(realTimeData[0].mon);
       dayCount.push(realTimeData[0].tue);
       dayCount.push(realTimeData[0].wed);
       dayCount.push(realTimeData[0].thu);
       dayCount.push(realTimeData[0].fri);
       dayCount.push(realTimeData[0].sat);
       dayCount.push(realTimeData[0].sun);
       var ctx4 = document.getElementById("barChart");
       var myBarChart = new Chart(ctx4, {
           type: 'bar',
           data: {
               labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
               datasets: [
                   {
                       label: "Coupon Availability by day of week",
                       backgroundColor: "rgba(179,181,198,0.2)",
                       borderColor: "rgba(255,99,132,1)",
                       borderWidth: 1,
                       hoverBackgroundColor: "rgba(255,99,132,0.4)",
                       hoverBorderColor: "rgba(255,99,132,1)",
                       data: dayCount,
                   },
                  //  {
                  //      label: "My Second dataset",
                  //      backgroundColor: "rgba(255,99,132,0.2)",
                  //      borderColor: "rgba(255,99,132,1)",
                  //      borderWidth: 1,
                  //      hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  //      hoverBorderColor: "rgba(255,99,132,1)",
                  //      data: [12, 52, 65, 45, 67, 32, 12],
                  //  }
               ]
           }
       });
     }, function() {
  });


});
//});
