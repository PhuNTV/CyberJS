function tinhLuong() {
    var luongNgay = Number(document.getElementById("luongNgay").value);
    var soNgay = Number(document.getElementById("soNgay").value);

    if (luongNgay <= 0 || soNgay <= 0) {
        alert("Có gì đó sai sai, mời nhập lại lương ngày hoặc số ngày");
    } else {
        var luong = luongNgay * soNgay;
    }

    document.getElementById("txtLuong").innerHTML = "Lương nhận được: " + new Intl.NumberFormat('vn-VN').format(luong);
}

document.getElementById("btnTinhLuong").onclick = tinhLuong;