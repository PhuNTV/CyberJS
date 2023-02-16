function doiTien() {
    const donGiaUSD = 23570;
    var soUSD = Number(document.getElementById("soUSD").value);

    if (soUSD <= 0) {
        alert("Nhập số USD > 0");
    } else {
        var tienViet = soUSD * donGiaUSD;
    }

    document.getElementById("txtQuyDoi").innerHTML = "Tiền Việt: " + new Intl.NumberFormat('vn-VN').format(tienViet);
}

document.getElementById("btnQuyDoi").onclick = doiTien;