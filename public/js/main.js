/* SCROLL REVEAL ANIMATION */
function animateScroll(direction) {
    return ScrollReveal({
        origin : direction,
        distance : '80px',
        duration : '1300',
        reset : 'true',
    })
}

/* SCROLL BOTTOM */
srt = animateScroll('bottom')
srt.reveal('.menu', {})
srt.reveal('.banner-top-right', {delay:200})
srt.reveal('.banner-top-left', {delay:300})
srt.reveal('.banner-bottom-right', {delay:400})

// /* SCROLL RIGHT */
srl = animateScroll('right')
srl.reveal('.unsplash', {delay:400})

// /* SCROLL LEFT */
srr = animateScroll('left')
srr.reveal('.our')
srl.reveal('.unsplash', {delay:400})

// COUNT UP NUMBER
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 3200
    })
})
