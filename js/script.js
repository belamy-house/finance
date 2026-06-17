function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString([], {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
}

updateClock();

setInterval(updateClock, 1000);