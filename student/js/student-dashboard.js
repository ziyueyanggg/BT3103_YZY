var db = firebase.initializeApp({databaseURL: "https://helloworld-29198.firebaseio.com/"}).database();
var TasksRef = db.ref("yystest5");
var app = new Vue({
    el: "#app",
    data: {
      newTaskName: "",
      newTaskDate: "",
      Tasks:[
          {name: "bt", date: "1"},
          {name: "ST", date: "2"}
      ]
    },
    firebase: {
      TasksFB: TasksRef.limitToLast(10)
    },
    methods: {
      addTask: function() {
        if (this.newTaskName) {
          TasksRef.push({ name: this.newTaskName, date: this.newTaskDate });
          this.newTaskName = "";
          this.newTaskDate = "";
        }
      }
    }
});


$(document).ready(function() {
	
	// 	DELETE BUTTONS BUTTONS
	$(".close").click(function() {
		$(this)
			.parent()
			.hide();
	});

	// 	ON CLICKING EVENT
	$(".event").click(function() {
		$(".timeline")
			.find(".previous")
			.removeClass("previous");

		// IF ITS ALREADY ACTIVE, REMOVE IT
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#selected").text("");
			$(".timeline")
				.find(".previous")
				.removeClass("previous");

			$("#style").html(
				"<style>.timeline-wrapper::after {		width:calc(" +
					0 +
					"px);z-index:0;	}</style>"
			);
		} else {
			$(".timeline")
				.find(".active")
				.removeClass("active");
			$(this).addClass("active");

			$("#style").html(
				"<style>.timeline-wrapper::after {		width:calc(" +
					$(this).position().left +
					"px + 90px);z-index:0;	}</style>"
			);

			// MARK ALL PREVIOUS EVENTS
			$(this)
				.prevAll(".event")
				.addClass("previous");

			$("#selected").text(
				$(".timeline")
					.find(".active")
					.find("h2")
					.text()
			);
		}
	});
});