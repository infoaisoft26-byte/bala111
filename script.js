(function ($) {
    "use strict";

    var roundSeconds = 12;
    var remainingTime = roundSeconds;
    var roundNumber = 1;
    var selectedId = null;
    var locked = false;

    var choices = [
        { id: "bullet", name: "Bullet", image: "assets/images/bullet121.gif" },
        { id: "butterfly", name: "Butterfly", image: "assets/images/butterfly2121.gif" },
        { id: "cat", name: "Cat", image: "assets/images/cat1212.gif" },
        { id: "lamp", name: "Lamp", image: "assets/images/dipak1231.gif" },
        { id: "football", name: "Football", image: "assets/images/football111.gif" },
        { id: "horse", name: "Horse", image: "assets/images/horse1.gif" },
        { id: "pigeon", name: "Pigeon", image: "assets/images/kabutar123.gif" },
        { id: "kite", name: "Kite", image: "assets/images/kitework123.gif" },
        { id: "rabbit", name: "Rabbit", image: "assets/images/rabit132.gif" },
        { id: "rose", name: "Rose", image: "assets/images/rose132.gif" },
        { id: "tiger", name: "Tiger", image: "assets/images/tiger11.gif" },
        { id: "umbrella", name: "Umbrella", image: "assets/images/umbrela11.gif" }
    ];

    function renderCards() {
        var grid = $("#gameGrid");
        grid.empty();

        $.each(choices, function (_, choice) {
            var card = $("<button>", {
                type: "button",
                class: "game-card",
                "data-id": choice.id,
                "aria-label": "Select " + choice.name
            });

            card.append($("<img>", {
                src: choice.image,
                alt: choice.name
            }));
            card.append($("<span>").text(choice.name));
            card.on("click", function () {
                selectChoice(choice);
            });
            grid.append(card);
        });
    }

    function selectChoice(choice) {
        if (locked) {
            window.showGameAlert("Round closed. Please wait.", "error");
            return;
        }

        selectedId = choice.id;
        $(".game-card").removeClass("selected");
        $('.game-card[data-id="' + choice.id + '"]').addClass("selected");
        $("#selectedName").text(choice.name);
        $("#statusText").text(choice.name + " selected");
        window.showGameAlert(choice.name + " selected", "success");
    }

    function updateTimer() {
        var progress = (remainingTime / roundSeconds) * 100;
        $("#timerValue").text("00:" + String(remainingTime).padStart(2, "0"));
        $("#timerRing").css("--progress", progress + "%");
    }

    function tick() {
        if (locked) {
            return;
        }

        remainingTime -= 1;
        updateTimer();

        if (remainingTime <= 0) {
            finishRound();
        }
    }

    function finishRound() {
        locked = true;

        var winner = choices[Math.floor(Math.random() * choices.length)];
        var winnerCard = $('.game-card[data-id="' + winner.id + '"]');

        winnerCard.addClass("winner");
        $("#resultName").text(winner.name);
        $("#statusText").text("Round completed");

        if (selectedId === winner.id) {
            window.showGameAlert("You won! Result: " + winner.name, "success");
        } else {
            window.showGameAlert("Result: " + winner.name, "error");
        }

        window.setTimeout(startNextRound, 3500);
    }

    function startNextRound() {
        roundNumber += 1;
        remainingTime = roundSeconds;
        selectedId = null;
        locked = false;

        $(".game-card").removeClass("selected winner");
        $("#roundNumber").text("#" + roundNumber);
        $("#selectedName").text("Not selected");
        $("#resultName").text("Waiting...");
        $("#statusText").text("Select one card");
        updateTimer();
    }

    $(function () {
        renderCards();
        updateTimer();
        window.setInterval(tick, 1000);
    });
}(jQuery));

