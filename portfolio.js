const items = [
  {type:'image', src:'assets/images/p1.jpg', cat:'wedding'},
  {type:'image', src:'assets/images/p2.jpg', cat:'prewedding'},
  {type:'image', src:'assets/images/p3.jpg', cat:'maternity'},
  {type:'video', src:'https://www.youtube.com/embed/VIDEO_ID', cat:'wedding'},
];

const gallery = document.getElementById('gallery');

function loadGallery(filter='all'){
  gallery.innerHTML='';
  items.filter(i=>filter==='all'||i.cat===filter)
  .forEach(i=>{
    const wrap=document.createElement('div');
    if(i.type==='image'){
      wrap.innerHTML=`<img src="${i.src}" onclick="openLightbox('${i.src}')">`;
    } else {
      wrap.innerHTML=`<iframe src="${i.src}" allowfullscreen></iframe>`;
    }
    gallery.appendChild(wrap);
  });
}

function filterGallery(cat){loadGallery(cat)}
loadGallery();

const lb=document.createElement('div');
lb.id='lightbox';
lb.innerHTML='<span onclick="closeLightbox()">×</span><img>';
document.body.appendChild(lb);

function openLightbox(src){
  lb.style.display='flex';
  lb.querySelector('img').src=src;
}
function closeLightbox(){lb.style.display='none';}
