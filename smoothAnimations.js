scroll = () => {
    document.querySelectorAll("#o .ac").forEach(box => {
        const brt = box.getBoundingClientRect().top - 200;
        const x = Math.min(window.innerWidth * 0.2 - 200, -brt * 3);
        box.style.transform = `translateX(${x}px)`;
        if (x < -200) box.querySelector(".tl").style.transform = `translateX(${box.getBoundingClientRect().width / 1.8}px)`;
        else box.querySelector(".tl").style.transform = "translateX(-80px)";
    });
};
document.onscroll = scroll;
scroll();