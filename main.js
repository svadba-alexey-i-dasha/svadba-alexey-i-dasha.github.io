

document.addEventListener('DOMContentLoaded', () => {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    for (let elm of elements) {
        observer.observe(elm);
    }
    function time() {
        const today = new Date();
        const timeDiff = (timeend - today) / 1000; // time difference in seconds
    
        const tsec = Math.floor(timeDiff % 60);
        const tmin = Math.floor(timeDiff / 60 % 60);
        const thour = Math.floor(timeDiff / 60 / 60 % 24);
        const tday = Math.floor(timeDiff / 60 / 60 / 24);
    
        document.getElementById("day").innerHTML = +tday;
        document.getElementById("hour").innerHTML = +thour;
        document.getElementById("minut").innerHTML = +tmin;
        document.getElementById("second").innerHTML = +tsec;
    
        window.setTimeout(time, 1000);
    }
    
    
    const timeend = new Date(2024, 6 - 1, 22, 13, 0, 0);
    
    time()
  });