


async function partition(arr, low, high) {
    let BARS = document.getElementsByClassName('bar');


    let pivot = arr[low];
    let i = low;
    setElementColor(low, "yellow")
    for (let j = low + 1; j < high; j++) {
        if (arr[j] <= pivot) {

            i = i + 1;

            [arr[i], arr[j]] = [arr[j], arr[i]];

            if (i !== j)
                await exchangeElements(BARS[i], BARS[j]);
        }
    }

    if (i !== low)
        await exchangeElements(BARS[i], BARS[low]);

    [arr[i], arr[low]] = [arr[low], arr[i]];
    return i;
}


function exchangeElements(element1, element2) {
    return new Promise(resolve => {

        window.requestAnimationFrame(function () {
            setTimeout(() => {

                const clonedElement1 = element1.cloneNode(true);
                const clonedElement2 = element2.cloneNode(true);

                element2.parentNode.replaceChild(clonedElement1, element2);
                element1.parentNode.replaceChild(clonedElement2, element1);
                resolve();
            }, 1 / slider.value * 3000);

        });
    });
}


async function quickSortCaller() {
    await quickSort(GlobalArr, 0, GlobalArr.length);
    await sleep(500);
    setAllElementColor("blue");
}


async function quickSort(arr, low, high) {
    if (low < high) {
        let index = await partition(arr, low, high);
        setElementColor(index, "red");
        await quickSort(arr, low, index);
        await quickSort(arr, index + 1, high);
    }
}
