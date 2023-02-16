function tinhTrungBinh() {
    var so1 = Number(document.getElementById("soThuNhat").value);
    var so2 = Number(document.getElementById("soThuHai").value);
    var so3 = Number(document.getElementById("soThuBa").value);
    var so4 = Number(document.getElementById("soThuBon").value);
    var so5 = Number(document.getElementById("soThuNam").value);

    var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    document.getElementById("txtTrungBinh").innerHTML = "Điểm trung bình: " + trungBinh;
}

document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;