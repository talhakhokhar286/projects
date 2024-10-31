// Function to update the time and date on the status bar
function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);

    timeElement.innerText = time;
    dateElement.innerText = date;
}

// Open app function
function openApp(appName) {
    switch (appName) {
        case 'app1':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1266-15398&node-type=frame&t=skunzZIv6NsJK3Ky-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1266%3A15398&show-proto-sidebar=1');
            break;
        case 'app2':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1383-7603&node-type=canvas&t=VUqn7Jd4UQn1jAM9-1&scaling=scale-down&content-scaling=fixed&page-id=1593%3A3067&starting-point-node-id=1383%3A8254&hotspot-hints=0');
            break;
        case 'app3':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1515-80&node-type=frame&t=VRRXCTUZ6RCrX6Uu-1&scaling=contain&content-scaling=fixed&page-id=1662%3A3158&starting-point-node-id=1515%3A80');
            break;
        case 'app4':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1662-4851&node-type=canvas&t=5t0nPw5QT9kKFBxE-1&scaling=contain&content-scaling=fixed&page-id=1662%3A3159');
            break;
        case 'app5':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1696-3076&node-type=canvas&t=3gGsm8LSWzwKdjm6-1&scaling=contain&content-scaling=fixed&page-id=1662%3A3160');
            break;
        case 'app6':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1417-2989&node-type=frame&t=OjFrQIc9sE6sMXeO-1&scaling=contain&content-scaling=fixed&page-id=1403%3A8820&starting-point-node-id=1417%3A2989');
            break;
        case 'app7':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1417-2989&node-type=frame&t=OjFrQIc9sE6sMXeO-1&scaling=contain&content-scaling=fixed&page-id=1403%3A8820&starting-point-node-id=1417%3A2989');
            break;
        case 'app8':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1811-42976&node-type=canvas&t=LlqzMhaFtuGyNvce-1&scaling=contain&content-scaling=fixed&page-id=1811%3A42807&starting-point-node-id=1811%3A42976');
            break;
        case 'app9':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1765-28069&node-type=canvas&t=WVKzMftJkhwX4lsv-1&scaling=contain&content-scaling=fixed&page-id=1763%3A413&starting-point-node-id=1765%3A28069');
            break;
        case 'app10':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1808-30623&node-type=canvas&t=tIaR8BzlbgQuUpUi-1&scaling=min-zoom&content-scaling=fixed&page-id=1808%3A30601');
            break; 
        case 'app11':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1811-32545&node-type=canvas&t=Ouwp5QvYX7zJ1urp-1&scaling=min-zoom&content-scaling=fixed&page-id=1811%3A31438');
            break;
        case 'app12':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1811-38350&node-type=canvas&t=AubO01Ph7j4WJJxo-1&scaling=min-zoom&content-scaling=fixed&page-id=1811%3A38345');
            break;
        case 'app13':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1826-1739&node-type=canvas&t=n7GtQN1f60sZoRNU-1&scaling=contain&content-scaling=fixed&page-id=1826%3A1734');
            break;
        case 'app14':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1824-126&node-type=canvas&t=q5dnaqKDYyDQc0Bt-1&scaling=contain&content-scaling=fixed&page-id=1824%3A125');
            break;
        case 'app15':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1824-593&node-type=canvas&t=Jc1hDJ6nBna5hIXJ-1&scaling=min-zoom&content-scaling=fixed&page-id=1824%3A220');
            break;
        case 'app16':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1828-1857&node-type=canvas&t=EgibYfUPofk1FCVy-1&scaling=min-zoom&content-scaling=fixed&page-id=1828%3A1856');
            break;
        case 'app17':
            window.open('https://www.figma.com/proto/JuFZL4lqO4myEcAUjmYpuY/My-Projects?node-id=1828-2361&node-type=canvas&t=eSnBC65qONbKpjqy-1&scaling=contain&content-scaling=fixed&page-id=1828%3A2360');
            break;   
        default:
            alert('App not found');
            break;
    }
}

// Call updateTime function every second
setInterval(updateTime, 1000);
updateTime();
