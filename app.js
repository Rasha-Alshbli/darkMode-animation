const moonPath = "M15.5 27.9987C15.5 42.9104 28 54.9987 28 54.9987C12.8122 54.9987 0.5 42.9104 0.5 27.9987C0.5 13.087 12.8122 0.998688 28 0.998688C28 0.998688 15.5 13.087 15.5 27.9987Z";

const sunPath = "M55 27C55 41.9117 42.6878 54 27.5 54C12.3122 54 0 41.9117 0 27C0 12.0883 12.3122 0 27.5 0C42.6878 0 55 12.0883 55 27Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

// we need to click on the sun

darkMode.addEventListener('click', () => {
    // we need to use anime.js
    // Here we set up the timeline
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    // add different animations to the timeline
    timeline.add({
        targets : ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    })
    .add({
        targets : '#darkMode',
        rotate: 320 
    }, '-= 350')
    .add({
        targets : "section",
        backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)',
        color : toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)"
    }, '-= 700');
    // everytme xe click on the sun i want this toggle to switch
    if(!toggle) {
        toggle = true;
    }else{
        toggle = false;
    }
});