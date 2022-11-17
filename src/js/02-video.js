import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

    player.on('timeupdate', throttle(playTime, 1000) );

    function playTime({seconds}){   
    localStorage.setItem("timeupdate", JSON.stringify(seconds));
};
    player.setCurrentTime(JSON.parse(localStorage.getItem('timeupdate')));

