(function loop0() {
    const rand = Math.round(Math.random() * (6 * 1000)) + 1 * 1000;
    const position = Math.floor(Math.random() * 100);
    console.log(`Next fish_0\n- apears in :  ${rand / 1000}sec\n- position :   ${position}% from left`);

    setTimeout(function () {
        console.log("Fish_0 created");
        const fish = document.createElement("div");
        fish.className = "fish";
        fish.style = `--position: ${position}%`
        fish.innerHTML = `<div></div>`;
        document.getElementById("water").appendChild(fish);

        setTimeout(() => {
            document.getElementById("water").removeChild(fish);
        }, 1.3 * 1000);
        loop0();
    }, rand);
}());

(function loop1() {
    const rand = Math.round(Math.random() * (6 * 1000)) + 1 * 1000;
    const position = Math.floor(Math.random() * 100);
    console.log(`Next fish_1\n- apears in :  ${rand / 1000}sec\n- position :   ${position}% from left`);

    setTimeout(function () {
        console.log("Fish_1 created");
        const fish = document.createElement("div");
        fish.className = "fish";
        fish.style = `--position: ${position}%`
        fish.innerHTML = `<div></div>`;
        document.getElementById("water").appendChild(fish);

        setTimeout(() => {
            document.getElementById("water").removeChild(fish);
        }, 1.3 * 1000);
        loop1();
    }, rand);
}());

(function loop2() {
    const rand = Math.round(Math.random() * (6 * 1000)) + 1 * 1000;
    const position = Math.floor(Math.random() * 100);
    console.log(`Next fish_2\n- apears in :  ${rand / 1000}sec\n- position :   ${position}% from left`);

    setTimeout(function () {
        console.log("Fish_2 created");
        const fish = document.createElement("div");
        fish.className = "fish";
        fish.style = `--position: ${position}%`
        fish.innerHTML = `<div></div>`;
        document.getElementById("water").appendChild(fish);

        setTimeout(() => {
            document.getElementById("water").removeChild(fish);
        }, 1.3 * 1000);
        loop2();
    }, rand);
}());