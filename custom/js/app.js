const inputs = document.querySelectorAll(".property div input");

function updatePro(){
    const suffix = this.dataset.sizing || "";
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener("change", updatePro));
inputs.forEach(input => input.addEventListener("mousemove", updatePro))