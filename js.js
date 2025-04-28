  const products = [
      {
        name: "Lumpia Semarang",
        img: "lumpia.png",
        price: "Rp 14.000/Pcs",
        desc: "Deskripsi barang."
      },
      {
        name: "Kekian Goreng",
        img: "kekian.png",
        price: "Rp 60.000/Box",
        desc: "Deskripsi barang."
      },
      {
        name: "Bakcang",
        img: "bakcan.png",
        price: "Rp 23.000/Pcs",
        desc: "Deskripsi barang."
      },
      {
        name: "Tahu Isi",
        img: "tahu isi.jpg",
        price: "Rp 7.000/Pcs",
        desc: "Deskripsi barang."
      }
    ];

    const productGrid = document.getElementById('productGrid');
    products.forEach(prod => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" />
        <div class="product-info">
          <h3>${prod.name}</h3>
          <p>${prod.price}</p>
        </div>
      `;
      div.addEventListener('click', () => showPopup(prod.name, prod.desc));
      productGrid.appendChild(div);
    });

    function showPopup(title, text) {
      document.getElementById('popupTitle').textContent = title;
      document.getElementById('popupText').textContent = text;
      const whatsappNumber = '6281234567890'; // ganti dengan nomor kamu
  const message = encodeURIComponent(`Halo, saya ingin memesan ${title}`);
  const link = `https://wa.me/${whatsappNumber}?text=${message}`;

  document.getElementById('orderLink').href = link;

      document.getElementById('popupDesc').classList.add('active');
    }

    function closePopup() {
      document.getElementById('popupDesc').classList.remove('active');
    }

    function openWhatsApp() {
      window.open('https://wa.me/6281234567890', '_blank');
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', () => {
      const scrollTopBtn = document.getElementById('scrollTop');
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}
