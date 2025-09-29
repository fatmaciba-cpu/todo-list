
document.addEventListener('DOMContentLoaded', () => {
    const Anahtar_Kelime = 'saklanacak_kelime';
    const yapilacak_girdi = document.getElementById('yapilacak_girdi');
    const btn = document.getElementById('btn');
    const yapilacak_listesi = document.getElementById('yapilacak-listesi');

    btn.onclick = () => {
        const eklendim = yapilacak_girdi.value.trim();
        if (!eklendim) {
            alert('Lütfen bir kelime girin!');
            return;
        }
        const li = document.createElement('li');
        li.className = 'flex items-center justify-center text-center border-2 border-cyan-800 bg-cyan-600 text-white rounded-xl p-2 my-1 flex-wrap';
        const yazi = document.createElement('yazi');
        yazi.textContent = eklendim;
        const  düzenlebtn = document.createElement('button');
        düzenlebtn.textContent = 'Düzenle';
        düzenlebtn.className = 'mr-2 px-2 py-1 justify-center bg-cyan-700 text-white rounded hover:bg-sky-800';
        düzenlebtn.onclick = () => {
            const yeniKelime = prompt('Yeni kelimenizi girin:', yazi.textContent);
            if (yeniKelime !== null && yeniKelime.trim() !== '') {
                yazi.textContent = yeniKelime.trim();
            }
        };

        const silbtn = document.createElement('button');
        silbtn.textContent = 'Sil';
        silbtn.className = 'ml-2 px-2 py-1 justify-center bg-cyan-800 text-white rounded hover:bg-sky-800';
        silbtn.onclick = () => {
            yapilacak_listesi.removeChild(li);
        };
        li.appendChild(düzenlebtn);
        li.appendChild(yazi);
        li.appendChild(silbtn);
        yapilacak_listesi.appendChild(li);
        yapilacak_girdi.value = '';
        // alert('Eklendi: ' + eklendim);
    };
});