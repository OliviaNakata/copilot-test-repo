

function buttonPressed(event){
    const icon = event.currentTarget;
    const listItem = icon.parentElement;
    const listText = listItem.textContent.trim();
    const textArea = listItem.querySelector('.text-area');
     const image = document.querySelector('img');
    let element;

    // 🌟 Save state BEFORE resetting all icons
    const wasExpanded = icon.getAttribute('aria-expanded') === "true";

    // Reset all icons and text areas on the page
    document.querySelectorAll('i').forEach(i => {
        i.style.display = "inline-block";
        i.style.transform = "rotate(0deg)";
        i.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.text-area').forEach(box => box.classList.remove('show'));

    // 🌟 Bug Fix: Use .includes() instead of === because of nested HTML text
    if (listText.includes("Powderpuff")) {
        element = document.querySelector('.powderpuff');
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "powderpuff.jpg";
            if (textArea) textArea.classList.add('show');
        }
    } 
    else if (listText.includes("Revision")) {
        element = document.querySelector('.revision');
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "revision.png";
            if (textArea) textArea.classList.add('show');
        }
    }
    else if (listText.includes("Lunar New Year")) {
        element = document.querySelector('.lunar');
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "lunarnewyear.jpg";
            if (textArea) textArea.classList.add('show');
        }
    }
    else if (listText.includes("Progression")) {
        element = document.querySelector('.progression'); // 🌟 Fixed wrong query selector (.revision)
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "progression.jpg";
            if (textArea) textArea.classList.add('show');
        }
    }
    else if (listText.includes("K-night at BHS")) {
        element = document.querySelector('.kNight');
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "kNight.jpg";
            if (textArea) textArea.classList.add('show');
        }
    }
    else if (listText.includes("HHS")) {
        element = document.querySelector('.hhs');
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
             image.src = "hhs.jpg";
            if (textArea) textArea.classList.add('show');
        }
    }
    else if (listText.includes("Lex K-night at LHS")) {
        element = document.querySelector('.lhs'); // 🌟 Fixed 'icon =' reassignment error
        if (!wasExpanded) {
            icon.setAttribute('aria-expanded', "true");
            icon.style.transform = "rotate(90deg)";
            image.src = "lhs.jpg";
            if (textArea) textArea.classList.add('show');
        }
    }
}