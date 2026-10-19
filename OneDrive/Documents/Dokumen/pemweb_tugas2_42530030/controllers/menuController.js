const daftarMenu = require('../data/menuData');

const tampilkanMenu = (req, res) => {
    const kategori = req.query.kategori;

    let hasilMenu = daftarMenu;

    if (kategori) {
        hasilMenu = daftarMenu.filter(menu =>
            menu.kategori === kategori
        );
    }

    res.render('index', {
        judul: 'Daftar Menu Kedai Senja',
        menu: hasilMenu,
        kategori: kategori
    });
};

const detailMenu = (req, res) => {
    const id = parseInt(req.params.id);

    const menu = daftarMenu.find(item =>
        item.id === id
    );

    if (!menu) {
        return res.status(404).send('Menu tidak ditemukan');
    }

    res.render('detail', {
        judul: 'Detail Menu',
        menu: menu
    });
};

module.exports = {
    tampilkanMenu,
    detailMenu
};