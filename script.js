document.body.addEventListener("click", function(event) {
    let firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = event.clientX + "px";
    firework.style.top = event.clientY + "px";
    document.body.appendChild(firework);setTimeout(() => {firework.remove();}, 1000);});
