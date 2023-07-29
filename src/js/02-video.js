import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

playVideo();

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));



function playVideo() {
    if (!localStorage) {
        player.setCurrentTime(0).then(function(seconds) {
    
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    
                    break;

                default:

                    break;
                }
            });
        return;
    };

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    
    }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                
                    break;

                default:

                    break;
            }
        });
}





