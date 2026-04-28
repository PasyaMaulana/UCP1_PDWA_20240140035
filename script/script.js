var members = [
    { nama: "Pasya Achmadinedja Maulana", email: "pasya@mail.com", minat: "Web Development" },
];

function tampilkanTabel() {
    var tbody = document.getElementById("isi-tabel");
    if (tbody == null) return;

    tbody.innerHTML = "";
    for (var i = 0; i < members.length; i++) {
        tbody.innerHTML += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + members[i].nama + "</td>" +
            "<td>" + members[i].email + "</td>" +
            "<td>" + members[i].minat + "</td>" +
            "</tr>";
    }
}

function submitForm() {
    var nama  = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var minat = document.getElementById("minat").value;

    if (nama == "" || email == "" || minat == "") {
        alert("Harap isi semua field!");
        return;
    }

    members.push({ nama: nama, email: email, minat: minat });

    document.getElementById("res-nama").innerText  = nama;
    document.getElementById("res-email").innerText = email;
    document.getElementById("res-minat").innerText = minat;
    document.getElementById("result-box").style.display = "block";

    document.getElementById("nama").value  = "";
    document.getElementById("email").value = "";
    document.getElementById("minat").value = "";
}

var daftarGambar = [
    "./img/foto1.png",
    "./img/foto2.png",
    "./img/foto3.png"
];
var indexGambar = 0;

function gantiGambar() {
    indexGambar++;
    if (indexGambar >= daftarGambar.length) {
        indexGambar = 0;
    }
    document.getElementById("gambar-utama").src = daftarGambar[indexGambar];
}

function infoGambar() {
    alert("Ini adalah foto kegiatan Tech Community. Gambar ke-" + (indexGambar + 1));
}

function putarAudio() {
    var audio = document.getElementById("audio-ku");
    audio.play();
}

function stopAudio() {
    var audio = document.getElementById("audio-ku");
    audio.pause();
    audio.currentTime = 0;
}

window.onload = function() {
    tampilkanTabel();

    var gambar = document.getElementById("gambar-utama");
    if (gambar != null) {
        gambar.src = daftarGambar[0];
    }
};