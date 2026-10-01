/* 写真一覧：この配列を編集するとPhotographsに反映されます。
 * 写真は photos フォルダに入れ、srcにファイル名を指定してください。
 */
window.PHOTO_ITEMS = [
  {
    "src": "photos/photo-01.jpg",
    "alt": "大橋茉歩 ポートレート"
  },
  {
    "src": "photos/photo-02.jpg",
    "alt": "大橋茉歩 ポートレート"
  },
  {
    "src": "photos/photo-03.jpg",
    "alt": "大橋茉歩 ポートレート"
  },
  {
    "src": "photos/photo-04.jpg",
    "alt": "大橋茉歩 ポートレート（鏡の前）"
  },
  {
    "src": "photos/photo-05.jpg",
    "alt": "大橋茉歩 ポートレート（階段）"
  },
  {
    "src": "photos/photo-06.jpg",
    "alt": "大橋茉歩 ポートレート（森）"
  },
  {
    "src": "photos/photo-07.jpg",
    "alt": "大橋茉歩 屋外ポートレート"
  },
  {
    "src": "photos/photo-08.jpg",
    "alt": "大橋茉歩 ポートレート"
  },
  {
    "src": "photos/photo-09.jpg",
    "alt": "大橋茉歩 ポートレート"
  },
  {
    "src": "photos/photo-10.jpg",
    "alt": "大橋茉歩 ポートレート（赤いワンピース）"
  },
  {
    "src": "photos/photo-11.jpg",
    "alt": "大橋茉歩 ポートレート（教室）"
  },
  {
    "src": "photos/photo-12.jpg",
    "alt": "大橋茉歩 ポートレート（教室・横顔）"
  }
];
(function(){
  const gallery=document.getElementById('photo-gallery');
  const modals=document.getElementById('photo-modals');
  if(!gallery || !modals || !Array.isArray(window.PHOTO_ITEMS)) return;
  gallery.innerHTML=''; modals.innerHTML='';
  window.PHOTO_ITEMS.forEach(function(item,i){
    const id='photo-modal-'+(i+1);
    const figure=document.createElement('figure');
    const link=document.createElement('a'); link.className='photo-link'; link.href='#'+id; link.setAttribute('aria-label','写真'+(i+1)+'を拡大表示');
    const img=document.createElement('img'); img.src=item.src; img.alt=item.alt||'大橋茉歩 写真'+(i+1); img.loading='lazy';
    link.appendChild(img); figure.appendChild(link); gallery.appendChild(figure);
    const modal=document.createElement('div'); modal.className='photo-modal'; modal.id=id; modal.setAttribute('aria-label','写真'+(i+1)+'の拡大表示');
    const close=document.createElement('a'); close.className='photo-close'; close.href='#photographs'; close.setAttribute('aria-label','閉じる'); close.textContent='×';
    const large=document.createElement('img'); large.src=item.src; large.alt=img.alt;
    modal.append(close,large); modals.appendChild(modal);
  });
})();
