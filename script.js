
const form = document.querySelector('form');
form.addEventListener('submit', getvalues);
var intervalId=null;
let hours=0
let minutes=0
let seconds=0
function clearvalues() {
    let elems = document.querySelectorAll('.time');
    elems.forEach((val) => {
        val.value = '';
    });
}

function getvalues(e) {
    e.preventDefault();

     hours = document.querySelector('#hr').value;
     minutes = document.querySelector('#m').value;
     seconds = document.querySelector('#s').value;
    
    if (hours === '') hours = 0;
    if (minutes === '') minutes = 0;
    if (seconds === '') seconds = 0;
    if(hours ===0 && minutes===0 && seconds===0)
    {
        alert('Please Enter Some Values')
        return;
    }
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Enter Valid Number');
        return;
    }

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        alert('Enter Values in Valid Range');
        return;
    }

    setvalues(hours, minutes, seconds);
    clearvalues();
    timer(hours, minutes, seconds);
}

function dec(value) {
    return value > 0 ? value - 1 : 59;
}

function timer() {
     intervalId = setInterval(() => {
        seconds = dec(seconds);
        
        if (seconds === 59) {
            minutes = dec(minutes);
        }
        
        if (minutes === 59 && seconds === 59) {
            hours = dec(hours);
        }
        
        setvalues( );

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }
    }, 1000);
}

function setvalues( ) {
    const hr = document.querySelector('#h');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#second');
    hr.textContent = `${hours}h`;
    min.textContent = `${minutes}m`;
    sec.textContent = `${seconds}s`;
}

document.querySelector('#cont').addEventListener('click',startfunc)
document.querySelector('#stop').addEventListener('click',stopfunc)
function stopfunc()
{
    if(intervalId!==null)
    {
        clearInterval(intervalId);
        intervalId=null;
    }
}
function startfunc()
{
    if(intervalId===null)
    {
        timer()
    }
}

