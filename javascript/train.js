var config = {
    apiKey: "AIzaSyBvIzbYe4S5g8Cj4EkhnJIILd2xqaMV25o",
    authDomain: "train-schedule-database-ab1ec.firebaseapp.com",
    databaseURL: "https://train-schedule-database-ab1ec.firebaseio.com",
    projectId: "train-schedule-database-ab1ec",
    storageBucket: "",
    messagingSenderId: "108914745099"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
$("button").on("click", function (e) {
    e.preventDefault()
    console.log($(this).text());
    var TrainName = $("#Input-Train-Name").val().trim();
    console.log(TrainName);
    var Destination = $("#Destination-Input").val().trim();
    console.log(Destination);
    var TrainTime = $("#Time-Input").val().trim();
    console.log(TrainTime);
    var Frequency= $("#Minutes-Input").val().trim();
    console.log(Frequency);
    database.ref().push({
        TrainName:TrainName,
        Destination: Destination,
        TrainTime: TrainTime,
        Frequency: Frequency,
    })
});

database.ref().on("child_added", function (snapshot) {
    console.log(snapshot);
    var Train = snapshot.val().TrainName;
    console.log(Train);
    var Place = snapshot.val().Destination;
    console.log(Place);
    var StartTime = snapshot.val().TrainTime;
    console.log(StartTime);
    var Minutes = snapshot.val().Frequency;
    console.log(Minutes);
    

    // https://momentjs.com
    // https://momentjs.com/docs/#/displaying/fromnow/
    // Time difference between empStartDate and today


    // Data getting is perfect! :) 
    // Now we need to add that data to table
    var newRow=$("<tr>").append(
        $("<td>").text(Train),
        $("<td>").text(Place),
        $("<td>").text(StartTime),
        $("<td>").text(Minutes),
    )

    $('table tbody').append(newRow);

})