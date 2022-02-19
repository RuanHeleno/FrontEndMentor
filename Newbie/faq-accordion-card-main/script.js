const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');
const Q5 = document.getElementById('Q5');

function showResponse() {
    if(Q1.style.fontWeight == 'bold') {
        Q1.style.fontWeight = 400;
        document.querySelectorAll('#Q1 span')[0].style.display = 'none';
        document.querySelectorAll('#Q1 img')[0].style.transform = 'scale(1, 1)';
    } else {
        Q1.style.fontWeight = 'bold';
        document.querySelectorAll('#Q1 span')[0].style.display = 'block';
        document.querySelectorAll('#Q1 span')[0].style.fontWeight = 400;
        document.querySelectorAll('#Q1 img')[0].style.transform = 'scale(-1, -1)';
        console.log(document.querySelectorAll('#Q1 img'));
    }
}

function showResponse2() {
    if(Q2.style.fontWeight == 'bold') {
        Q2.style.fontWeight = 400;
        document.querySelectorAll('#Q2 span')[0].style.display = 'none';
        document.querySelectorAll('#Q2 img')[0].style.transform = 'scale(1, 1)';
    } else {
        Q2.style.fontWeight = 'bold';
        document.querySelectorAll('#Q2 span')[0].style.display = 'block';
        document.querySelectorAll('#Q2 span')[0].style.fontWeight = 400;
        document.querySelectorAll('#Q2 img')[0].style.transform = 'scale(-1, -1)';
        console.log(document.querySelectorAll('#Q2 img'));
    }
}

function showResponse3() {
    if(Q3.style.fontWeight == 'bold') {
        Q3.style.fontWeight = 400;
        document.querySelectorAll('#Q3 span')[0].style.display = 'none';
        document.querySelectorAll('#Q3 img')[0].style.transform = 'scale(1, 1)';
    } else {
        Q3.style.fontWeight = 'bold';
        document.querySelectorAll('#Q3 span')[0].style.display = 'block';
        document.querySelectorAll('#Q3 span')[0].style.fontWeight = 400;
        document.querySelectorAll('#Q3 img')[0].style.transform = 'scale(-1, -1)';
        console.log(document.querySelectorAll('#Q3 img'));
    }
}

function showResponse4() {
    if(Q4.style.fontWeight == 'bold') {
        Q4.style.fontWeight = 400;
        document.querySelectorAll('#Q4 span')[0].style.display = 'none';
        document.querySelectorAll('#Q4 img')[0].style.transform = 'scale(1, 1)';
    } else {
        Q4.style.fontWeight = 'bold';
        document.querySelectorAll('#Q4 span')[0].style.display = 'block';
        document.querySelectorAll('#Q4 span')[0].style.fontWeight = 400;
        document.querySelectorAll('#Q4 img')[0].style.transform = 'scale(-1, -1)';
        console.log(document.querySelectorAll('#Q4 img'));
    }
}

function showResponse5() {
    if(Q5.style.fontWeight == 'bold') {
        Q5.style.fontWeight = 400;
        document.querySelectorAll('#Q5 span')[0].style.display = 'none';
        document.querySelectorAll('#Q5 img')[0].style.transform = 'scale(1, 1)';
    } else {
        Q5.style.fontWeight = 'bold';
        document.querySelectorAll('#Q5 span')[0].style.display = 'block';
        document.querySelectorAll('#Q5 span')[0].style.fontWeight = 400;
        document.querySelectorAll('#Q5 img')[0].style.transform = 'scale(-1, -1)';
        console.log(document.querySelectorAll('#Q5 img'));
    }
}