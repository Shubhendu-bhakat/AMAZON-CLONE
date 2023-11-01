const m = new Audio('audio/4.mp3');
m.play();   


const songs = [
    {
        id :'1',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/image1.jpg"
    },
    {
        id :'2',
        songName:'enemy <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster2.jpg"
    },
    {
        id :'3',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster3.jpg"
    },
    {
        id :'4',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster4.jpg"
    },
    {
        id :'5',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster5.jpg"
    },
    {
        id :'6',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster6.jpg"
    },
    {
        id :'7',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster7.jpg"
    },
    {
        id :'8',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster8.jpg"
    },
    {
        id :'9',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster9.jpg"
    },
    {
        id :'10',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster10.jpg"
    },
    {
        id :'11',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster11.jpg"
    },
    {
        id :'12',
        songName:'on My way <br><div class="subtitle">Alan walker</div>',
        poster:"image/poster12.jpg"
    }
]



Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
         e.getElementsByTagName('img')[0].src = songs[i].poster;         
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=> {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click',()=> {
    pop_song.scrollLeft -= 330;
})
let artist_name_left = document.getElementById('artist_name_left');
let artist_name_right = document.getElementById('artist_name_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];
artist_name_left.addEventListener('click',()=>{
    Artist_bx.scrollLeft +=350;
})
artist_name_right.addEventListener('click',()=>{
    Artist_bx.scrollLeft -=350;
})
