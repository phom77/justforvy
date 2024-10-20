const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const nextBtn = document.querySelector('.nextBtn');

yesBtn.addEventListener("click", () => {
    //question.innerHTML = "Ban nãy cậu định chọn buồn đúng không!!";
    document.getElementById("text1").innerHTML = "Ban nãy Vy định chọn buồn đúng không!! <br> <br>";
    gif.src = "https://media.tenor.com/GFye_UPGD_sAAAAC/%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F-chiikawa.gif";
    noBtn.remove();
    yesBtn.remove();
    nextBtn.style.display = 'block';
})

nextBtn.addEventListener("click", ()=> {
    question.innerHTML = 'Không có buồn nữa, tặng Vy nè, vui lên đi nha!!!';
    gif.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/chiikawa/sticker_21.gif?aca172b7d546d3d9c51f3e57204f75f2";
    nextBtn.remove();
})

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})