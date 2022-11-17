import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

 const player = new Player(iframe);

    player.on('timeupdate',Throttle( playTime,1000) );

    function playTime({seconds}){   
    localStorage.setItem("timeupdate",JSON.stringify(seconds));
};
    player.setCurrentTime(JSON.parse(localStorage.getItem('timeupdate')));

