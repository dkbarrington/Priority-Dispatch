if (window.innerWidth >= 1080) {
    document.getElementById('tab-1').classList.add('active');
    document.getElementById('content-1').classList.add('active');
}

const toggleMenu = document.querySelector('#menuButton');



toggleMenu.onclick = function () {
    document.getElementById('megamenuWrapper').classList.toggle('active');
}

const tabGroup = document.querySelectorAll('.tabButton');
const contentGroup = document.querySelectorAll('.contentDiv');

const switchTab = (e) => {
    const target = e.currentTarget;

    //Set content id string
    const contentId = '#content-' + target.id.split('-')[1];

    // first condition allows all content divs to be closed at the same time on mobile
    if (target.classList.contains('mobile') && target.classList.contains('active')) {

        // Clear 'active' class from target
        target.classList.remove('active');

        // Clear 'active' class from target's content div
        document.querySelector(contentId).classList.remove('active');

    } else {
        // Clear 'active' class from all tabs
        Array.from(tabGroup).forEach(function (tab) {
            tab.classList.remove('active');
        });

        // Clear 'active' class from all content divs
        Array.from(contentGroup).forEach(function (div) {
            div.classList.remove('active');
        });

        // Add 'active' class to clicked tab
        target.classList.add('active');

        // Add 'active' class to selected content div
        let targetDiv = document.querySelector(contentId);
        targetDiv.classList.add('active');
    }







}

Array.from(tabGroup).forEach(function (button) {
    button.addEventListener('click', switchTab);
});