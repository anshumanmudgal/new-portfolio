let circularprogress_arr = document.querySelectorAll('.outer'),
    progressvalue_arr = document.querySelectorAll('.innertext');

for (let i = 0; i < circularprogress_arr.length; i++) {
    helper(circularprogress_arr[i], progressvalue_arr[i]);
}

function helper(circularprogress, progressvalue) {
    const string1 = progressvalue.textContent;

    const string2 = string1[0] + string1[1];

    const end = parseInt(string2);

    let progressStart = 0,
        progressEnd = end,
        speed = 100;


    // console.log(num)
    let progress = setInterval(() => {
        progressStart++;
        progressvalue.textContent = `${progressStart}%`
        circularprogress.style.background = `conic-gradient(rgb(125, 42, 232) ${progressStart * 3.6
            }deg, rgb(237, 237, 237) 0deg)`

        if (progressStart == progressEnd) {
            clearInterval(progress);
        }
        //console.log(progressStart);
    }, speed);
}
