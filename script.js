document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById('year');
    const slapCounter = document.getElementById('slapCounter');
    let slapCount = parseInt(localStorage.getItem('slapCount') || 0, 10);

    yearElement.textContent = new Date().getFullYear();
    slapCounter.innerText = `Slaps: ${slapCount}`;

    document.getElementById("enterButton").addEventListener("click", () => showSection("main"));
    document.getElementById("discoverButton").addEventListener("click", startLoading);
    document.getElementById("slapButton").addEventListener("click", handleSlap);

    function showSection(sectionId) {
        document.querySelectorAll(".content").forEach(el => el.style.display = "none");
        document.getElementById(sectionId).style.display = "block";
        toggleNav(sectionId !== 'start');
    }

    function toggleNav(show) {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.style.display = show ? "block" : "none";
        });
    }

    function startLoading() {
        showSection("loader");
        const phrases = ["phrase 1", "phrase 2", "phrase 3"];
        let phraseInterval = setInterval(() => {
            document.getElementById("loader-phrases").innerText = getRandomItem(phrases);
        }, 2000);

        setTimeout(() => {
            clearInterval(phraseInterval);
            showSection("result");
            const answers = ["Yes", "Absolutely!", "No doubt!"];
            document.getElementById("answer").innerText = getRandomItem(answers);
        }, 6000);
    }

    function handleSlap() {
        const affirmations = ["You're amazing!", "Keep shining!", "You rock!"];
        const affirmationText = document.getElementById("affirmationText");
        slapCount++;
        localStorage.setItem('slapCount', slapCount);
        slapCounter.innerText = `Slaps: ${slapCount}`;
        affirmationText.innerText = getRandomItem(affirmations);
    }

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Show the home section on initial load
    showSection('start');
});
