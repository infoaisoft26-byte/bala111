<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Swim111</title>

    <link rel="stylesheet" href="../../csslinked/bootstrap.min.css">
    <link rel="stylesheet" href="../../csslinked/all.min.css">
    <link rel="stylesheet" href="../../csslinked/font-awesome.min.css">
    <link rel="stylesheet" href="../../app-assets/css/custom/custom.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <main class="game-shell">
        <header class="game-header">
            <div>
                <span class="eyebrow">AI Gaming</span>
                <h1>Swim111</h1>
            </div>
            <div class="round-badge">
                <span>Round</span>
                <strong id="roundNumber">#1</strong>
            </div>
        </header>

        <section class="timer-panel">
            <p>Next result in</p>
            <div class="timer-ring" id="timerRing">
                <strong id="timerValue">00:12</strong>
            </div>
            <p id="statusText">Select one card</p>
        </section>

        <section class="game-grid" id="gameGrid" aria-label="Game choices"></section>

        <section class="info-panel">
            <div>
                <span>Your selection</span>
                <strong id="selectedName">Not selected</strong>
            </div>
            <div>
                <span>Latest result</span>
                <strong id="resultName">Waiting...</strong>
            </div>
        </section>

        <footer class="game-footer">
            Swim111 frontend demo
        </footer>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="./sweet.js"></script>
    <script src="./script.js"></script>
</body>
</html>

