(function () {
    "use strict";

    window.showGameAlert = function (message, type) {
        var oldToast = document.querySelector(".game-toast");
        var toast;

        if (oldToast) {
            oldToast.remove();
        }

        toast = document.createElement("div");
        toast.className = "game-toast " + (type || "info");
        toast.textContent = message;
        document.body.appendChild(toast);

        window.requestAnimationFrame(function () {
            toast.classList.add("show");
        });

        window.setTimeout(function () {
            toast.classList.remove("show");
            window.setTimeout(function () {
                toast.remove();
            }, 300);
        }, 2400);
    };
}());

