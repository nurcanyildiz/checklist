let dailyProject = [
    {
        projectName: 'JavaScript Drum Kit',
        day: 1,
        difficulty: 'Easy',
    },
    {
        projectName: 'CSS + JS Clock',
        day: 2,
        difficulty: 'Easy',
    },
    {
        projectName: 'Playing with CSS Variables and JS',
        day: 3,
        difficulty: 'Easy',
    },
    {
        projectName: 'Array Cardio Day 1',
        day: 4,
        difficulty: 'Easy',
    },
    {
        projectName: 'Flex Panels Image Gallery',
        day: 5,
        difficulty: 'Easy',
    },
    {
        projectName: 'Ajax Type Ahead',
        day: 6,
        difficulty: 'Easy',
    },
    {
        projectName: 'Array Cardio Day 2',
        day: 7,
        difficulty: 'Easy',
    },
    {
        projectName: 'Fun with HTML5 Canvas',
        day: 8,
        difficulty: 'Easy',
    },
    {
        projectName: '14 Must Know Dev Tools Tricks',
        day: 9,
        difficulty: 'Easy',
    },
    {
        projectName: 'Hold Shift to Check Multiple Checkboxes',
        day: 10,
        difficulty: 'Easy',
    },
    {
        projectName: 'Custom HTML5 Video Player',
        day: 11,
        difficulty: 'Normal',
    },
    {
        projectName: 'Key Sequence Detection (KONAMI CODE)',
        day: 12,
        difficulty: 'Normal',
    },
    {
        projectName: 'Slide In on Scroll',
        day: 13,
        difficulty: 'Normal',
    },
    {
        projectName: 'Object and Arrays - Reference VS Copy',
        day: 14,
        difficulty: 'Normal',
    },
    {
        projectName: 'LocalStorage and Event Delegation',
        day: 15,
        difficulty: 'Normal',
    },
    {
        projectName: 'CSS Text Shadow Mouse Move Effect',
        day: 16,
        difficulty: 'Normal',
    },
    {
        projectName: 'Sorting Band Names without articles',
        day: 17,
        difficulty: 'Normal',
    },
    {
        projectName: 'Tally String Times with Reduce',
        day: 18,
        difficulty: 'Normal',
    },
    {
        projectName: 'Unreal Webcam Fun',
        day: 19,
        difficulty: 'Normal',
    },
    {
        projectName: 'Native Speech Recognition',
        day: 20,
        difficulty: 'Normal',
    },
    {
        projectName: 'Geolocation based Speedometer and Compass',
        day: 21,
        difficulty: 'Hard',
    },
    {
        projectName: 'Follow Along Links',
        day: 22,
        difficulty: 'Hard',
    },
    {
        projectName: 'Speech Synthesis',
        day: 23,
        difficulty: 'Hard',
    },

    {
        projectName: 'Sticky Nav',
        day: 24,
        difficulty: 'Hard',
    },

    {
        projectName: 'Event Capture, Propagation, Bubbling and Once',
        day: 25,
        difficulty: 'Hard',
    },
    {
        projectName: 'Stripe Follow Along Dropdown',
        day: 26,
        difficulty: 'Hard',
    },
    {
        projectName: 'Click and Drag to Scroll',
        day: 27,
        difficulty: 'Hard',
    },
    {
        projectName: 'Video Speed Controller UI',
        day: 28,
        difficulty: 'Hard',
    },
    {
        projectName: 'Countdown Clock',
        day: 29,
        difficulty: 'Hard',
    },
    {
        projectName: 'Whack A Mole Game',
        day: 30, difficulty: 'Hard',
    }
];


for (let i = 0; i < dailyProject.length; i++) {
    const body = document.querySelector('.container-body');
    let divTag = document.createElement("div")
    body.append(divTag);
    divTag.classList.add("projectCheckList");
    let input = document.createElement("input");
    divTag.append(input)
    input.type = "checkbox";



    let projectDayTag = document.createElement('p');
    divTag.append(projectDayTag);
    projectDayTag.classList.add('projectDayStyle')
    projectDayTag.innerHTML = dailyProject[i].day;

    let projectNameTag = document.createElement('p');
    divTag.append(projectNameTag);
    projectNameTag.classList.add('projectNameStyle')
    projectNameTag.innerHTML = dailyProject[i].projectName;

    let difficultyLevel = document.createElement('p');
    divTag.append(difficultyLevel);
    difficultyLevel.classList.add('difficultyLevel')
    difficultyLevel.innerHTML = dailyProject[i].difficulty;

    const projectResult = document.createElement('p');
    divTag.append(projectResult);
    projectResult.classList.add('projectResult');



}
;

