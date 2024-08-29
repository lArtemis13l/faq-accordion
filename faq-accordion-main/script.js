
function revealQuestion1 () {
    const triggerQuestion = document.querySelector('.question-1');
    const imageSwitch = document.querySelectorAll('img')[1];

    if (document.querySelector('.answer-1')) {
        triggerQuestion.removeChild(document.querySelector('.answer-1'));
        imageSwitch.src = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23AD28EB%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.203%2012.203%200%200%200%2015%203.312Zm4.688%2013.124h-3.75v3.75a.938.938%200%200%201-1.876%200v-3.75h-3.75a.938.938%200%200%201%200-1.875h3.75v-3.75a.938.938%200%200%201%201.876%200v3.75h3.75a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E";
    } else {
        const answer = document.createElement("p");
        answer.className = "answer-1";
        answer.textContent = "Frontend Mentor offers realistic coding challenges " +
            "to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. " +
            "It's suitable for all levels and ideal for portfolio building.";
        triggerQuestion.appendChild(answer);
        imageSwitch.src = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23301534%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.2%2012.2%200%200%200%2015%203.312Zm4.688%2013.124h-9.375a.938.938%200%200%201%200-1.875h9.374a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E';
    }
}

function revealQuestion2 () {
    const triggerQuestion = document.querySelector('.question-2');
    const imageSwitch = document.querySelectorAll('img')[2];

    if (document.querySelector('.answer-2')) {
        triggerQuestion.removeChild(document.querySelector('.answer-2'));
        imageSwitch.src = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23AD28EB%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.203%2012.203%200%200%200%2015%203.312Zm4.688%2013.124h-3.75v3.75a.938.938%200%200%201-1.876%200v-3.75h-3.75a.938.938%200%200%201%200-1.875h3.75v-3.75a.938.938%200%200%201%201.876%200v3.75h3.75a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E";
    } else {
        const answer = document.createElement("p");
        answer.className = "answer-2";
        answer.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free" +
            " option providing access to a range of projects suitable for all skill levels.";
        triggerQuestion.appendChild(answer);
        imageSwitch.src = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23301534%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.2%2012.2%200%200%200%2015%203.312Zm4.688%2013.124h-9.375a.938.938%200%200%201%200-1.875h9.374a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E';
    }
}

function revealQuestion3 () {
    const triggerQuestion = document.querySelector('.question-3');
    const imageSwitch = document.querySelectorAll('img')[3];

    if (document.querySelector('.answer-3')) {
        triggerQuestion.removeChild(document.querySelector('.answer-3'));
        imageSwitch.src = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23AD28EB%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.203%2012.203%200%200%200%2015%203.312Zm4.688%2013.124h-3.75v3.75a.938.938%200%200%201-1.876%200v-3.75h-3.75a.938.938%200%200%201%200-1.875h3.75v-3.75a.938.938%200%200%201%201.876%200v3.75h3.75a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E";
    } else {
        const answer = document.createElement("p");
        answer.className = "answer-3";
        answer.textContent = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent" +
            " way to showcase your skills to potential employers!";
        triggerQuestion.appendChild(answer);
        imageSwitch.src = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23301534%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.2%2012.2%200%200%200%2015%203.312Zm4.688%2013.124h-9.375a.938.938%200%200%201%200-1.875h9.374a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E';
    }
}

function revealQuestion4 () {
    const triggerQuestion = document.querySelector('.question-4');
    const imageSwitch = document.querySelectorAll('img')[4];

    if (document.querySelector('.answer-4')) {
        triggerQuestion.removeChild(document.querySelector('.answer-4'));
        imageSwitch.src = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23AD28EB%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.203%2012.203%200%200%200%2015%203.312Zm4.688%2013.124h-3.75v3.75a.938.938%200%200%201-1.876%200v-3.75h-3.75a.938.938%200%200%201%200-1.875h3.75v-3.75a.938.938%200%200%201%201.876%200v3.75h3.75a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E";
    } else {
        const answer = document.createElement("p");
        answer.className = "answer-4";
        answer.textContent = "The best place to get help is inside Frontend Mentor's Discord community. There's a help " +
            "channel where you can ask questions and seek support from other community members.";
        triggerQuestion.appendChild(answer);
        imageSwitch.src = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2231%22%20fill%3D%22none%22%20viewBox%3D%220%200%2030%2031%22%3E%3Cpath%20fill%3D%22%23301534%22%20d%3D%22M15%203.313A12.187%2012.187%200%201%200%2027.188%2015.5%2012.2%2012.2%200%200%200%2015%203.312Zm4.688%2013.124h-9.375a.938.938%200%200%201%200-1.875h9.374a.938.938%200%200%201%200%201.876Z%22%2F%3E%3C%2Fsvg%3E';
    }
}