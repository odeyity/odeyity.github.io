let opinions_label = document.getElementById("opinions_label")
let popup = document.getElementById("popup")
let chars = 0

function updateCount() {
    let chars = opinions.value.length
    opinions_label.innerHTML = "Opinions: (" + chars + "/500)";
}