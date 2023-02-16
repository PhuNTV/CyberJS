function hinhChuNhat() {
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);

    if (chieuDai <= 0 || chieuRong <= 0) {
        alert("Mời nhập lại giá trị");
    } else {
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
    }

    document.getElementById("txtSP").innerHTML = "Chu Vi: " + chuVi + " , Diện Tích: " + dienTich;
}

document.getElementById("btnSP").onclick = hinhChuNhat;