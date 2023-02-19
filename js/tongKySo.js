function tongKySo() {
    var so = Number(document.getElementById("nhapSo").value);

    if (so < 10 || so > 99 || Number.isInteger(so) == false) {
        alert("Mời nhập lại số!");
    } else {
        var tong = Math.floor(so / 10) + (so % 10);
    }

    document.getElementById("txtTong").innerHTML = "Tổng Của 2 Chữ Số: " + tong;
}

document.getElementById("btnTong").onclick = tongKySo;