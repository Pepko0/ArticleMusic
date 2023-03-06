{
    const welcome = () => {
        console.log("Witam wszytskie osoby które tutaj zaglądają :P");
    };
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const article__themeName = document.querySelector(".js-button__themeName");
        body.classList.toggle("body__otherColor");
        article__themeName.innerText = body.classList.contains("body__otherColor") ? "szare" : "białe";
        
    };
    
    const init = () => {
        const buttonChangeColor = document.querySelector(".js-button");
        buttonChangeColor.addEventListener("click", toggleBackground );
    
        welcome();
    };

    init();
}
