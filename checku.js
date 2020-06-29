$(document).ready( function () {
    var roomHash = id = location.hash.substring(1,7);
    const drone = new ScaleDrone('X18ygXr6Q3ApqSVw'); // 
    const roomName = 'observable-' + roomHash;
    console.log('update' + roomName);
    const configuration = {
      iceServers: [{
        urls: 'stun:stun.l.google.com:19302'
      }]
    };
    let room;
    let pc;
    function onSuccess() {};
    function onError(error) {
      console.error(error);
    };
    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      room = drone.subscribe(roomName);
      room.on('open', error => {
        if (error) {
          onError(error);
        }
      });
      room.on('members', members => {
        console.log("key 3 update");
        console.log('MEMBERS', members);
        document.getElementById("con").innerHTML = members.length;
      });
    });
});
