const btnDay = document.getElementById('btnDay');
const btnWeek = document.getElementById('btnWeek');
const btnMonth = document.getElementById('btnMonth');

const workDay = document.getElementById('work-daily');
const workWeek = document.getElementById('work-weekly');
const workMonth = document.getElementById('work-monthly');
const playDay = document.getElementById('play-daily');
const playWeek = document.getElementById('play-weekly');
const playMonth = document.getElementById('play-monthly');
const studyDay = document.getElementById('study-daily');
const studyWeek = document.getElementById('study-weekly');
const studyMonth = document.getElementById('study-monthly');
const exerciseDay = document.getElementById('exercise-daily');
const exerciseWeek = document.getElementById('exercise-weekly');
const exerciseMonth = document.getElementById('exercise-monthly');
const socialDay = document.getElementById('social-daily');
const socialWeek = document.getElementById('social-weekly');
const socialMonth = document.getElementById('social-monthly');
const selfCareDay = document.getElementById('selfCare-daily');
const selfCareWeek = document.getElementById('selfCare-weekly');
const selfCareMonth = document.getElementById('selfCare-monthly');

const changeInfos = (name) => {
    if(name === 'Daily') {
        btnDay.classList.add('bttn-selected');
        btnWeek.classList.remove('bttn-selected');
        btnMonth.classList.remove('bttn-selected');

        workDay.style.display = "block";
        workWeek.style.display = "none";
        workMonth.style.display = "none";
        playDay.style.display = "block";
        playWeek.style.display = "none";
        playMonth.style.display = "none";
        studyDay.style.display = "block";
        studyWeek.style.display = "none";
        studyMonth.style.display = "none";
        exerciseDay.style.display = "block";
        exerciseWeek.style.display = "none";
        exerciseMonth.style.display = "none";
        socialDay.style.display = "block";
        socialWeek.style.display = "none";
        socialMonth.style.display = "none";
        selfCareDay.style.display = "block";
        selfCareWeek.style.display = "none";
        selfCareMonth.style.display = "none";
    } else if(name === 'Weekly') {
        btnDay.classList.remove('bttn-selected');
        btnWeek.classList.add('bttn-selected');
        btnMonth.classList.remove('bttn-selected');

        workDay.style.display = "none";
        workWeek.style.display = "block";
        workMonth.style.display = "none";
        playDay.style.display = "none";
        playWeek.style.display = "block";
        playMonth.style.display = "none";
        studyDay.style.display = "none";
        studyWeek.style.display = "block";
        studyMonth.style.display = "none";
        exerciseDay.style.display = "none";
        exerciseWeek.style.display = "block";
        exerciseMonth.style.display = "none";
        socialDay.style.display = "none";
        socialWeek.style.display = "block";
        socialMonth.style.display = "none";
        selfCareDay.style.display = "none";
        selfCareWeek.style.display = "block";
        selfCareMonth.style.display = "none";
    }  else if(name === 'Monthly') {
        btnDay.classList.remove('bttn-selected');
        btnWeek.classList.remove('bttn-selected');
        btnMonth.classList.add('bttn-selected');
        
        workDay.style.display = "none";
        workWeek.style.display = "none";
        workMonth.style.display = "block";
        playDay.style.display = "none";
        playWeek.style.display = "none";
        playMonth.style.display = "block";
        studyDay.style.display = "none";
        studyWeek.style.display = "none";
        studyMonth.style.display = "block";
        exerciseDay.style.display = "none";
        exerciseWeek.style.display = "none";
        exerciseMonth.style.display = "block";
        socialDay.style.display = "none";
        socialWeek.style.display = "none";
        socialMonth.style.display = "block";
        selfCareDay.style.display = "none";
        selfCareWeek.style.display = "none";
        selfCareMonth.style.display = "block";
    }
};