function analyzePrompt() {

    const prompt = document.getElementById("prompt").value.toLowerCase().trim();

    const risk = document.getElementById("risk");
    const bar = document.getElementById("progressBar");
    const percentage = document.getElementById("percentage");
    const tips=document.getElementById("tipsText");
    const reason = document.getElementById("reason");

    // Reset classes
    risk.className = "";

    if (prompt === "") {
        risk.innerHTML = "⚠ Please enter a prompt.";
        reason.innerHTML = "The input field cannot be empty.";
        risk.classList.add("medium");
        return;
    }

    // High Risk Keywords
    const harmful = [
        "hack",
        "password",
        "credit card",
        "bank account",
        "bomb",
        "kill",
        "murder",
        "attack",
        "malware",
        "virus",
        "phishing",
        "steal",
        "drug",
        "weapon",
        "explosive",
        "ddos",
        "ransomware",
        "terror",
        "exploit"
    ];

    // Medium Risk Keywords
    const sensitive = [
        "bypass",
        "cheat",
        "fake",
        "pirated",
        "spam",
        "tracking",
        "crack",
        "proxy",
        "vpn",
        "scrape",
        "automation",
        "deepfake"
    ];

    let foundHigh = harmful.find(word => prompt.includes(word));
    let foundMedium = sensitive.find(word => prompt.includes(word));

    if (foundHigh) {

        risk.innerHTML = "🔴 HIGH RISK";
        risk.classList.add("high");
        tips.innerHTML = "🚫 Never request passwords, hacking techniques, personal information, or illegal activities from an AI system.";
        bar.style.width="90%";
        bar.style.background="red";
        percentage.innerHTML="90% Risk";

        reason.innerHTML =
            "This prompt contains potentially harmful or dangerous content (" +
            "<b>" + foundHigh + "</b>). " +
            "It may involve cyber abuse, violence, illegal activities, or requests for sensitive information.";

    }

    else if (foundMedium) {

        risk.innerHTML = "🟡 MEDIUM RISK";
        risk.classList.add("medium");
        tips.innerHTML="⚠ Review sensitive prompts carefully before submitting them to an AI.";
        bar.style.width="55%";
        bar.style.background="orange";
        percentage.innerHTML="55% Risk";
        reason.innerHTML =
            "This prompt contains potentially sensitive content (" +
            "<b>" + foundMedium + "</b>). " +
            "It may require additional review before being processed by an AI system.";

    }

    else {

        risk.innerHTML = "🟢 SAFE";
        risk.classList.add("safe");
        tips.innerHTML = "✅ Your prompt appears safe. Continue using AI responsibly.";
        bar.style.width="10%";
        bar.style.background="limegreen";
        percentage.innerHTML="10% Risk";

        reason.innerHTML =
            "No harmful or sensitive keywords were detected. " +
            "The prompt appears suitable for normal AI interaction.";

    

     saveHistory(prompt);

}

    

    function saveHistory(prompt){

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift(prompt);

    history = history.slice(0,5);

    localStorage.setItem("history", JSON.stringify(history));

    showHistory();
}

function showHistory(){

    const history = JSON.parse(localStorage.getItem("history")) || [];

    const list = document.getElementById("historyList");

    list.innerHTML = "";

    history.forEach(item=>{
        list.innerHTML += `<li>${item}</li>`;
    });

}

showHistory();

    

}

function saveHistory(prompt){

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift(prompt);

    history = history.slice(0,5);

    localStorage.setItem("history", JSON.stringify(history));

    showHistory();

}

function showHistory(){

    const history = JSON.parse(localStorage.getItem("history")) || [];

    const list = document.getElementById("historyList");

    list.innerHTML = "";

    history.forEach(item=>{

        list.innerHTML += `<li>${item}</li>`;

    });

}

showHistory();