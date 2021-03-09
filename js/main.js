var tinhTien = function () {
    var uberX = document.querySelector('#uberX').checked;
    var uberSUV = document.querySelector('#uberSUV').checked;
    var uberBlack = document.querySelector('#uberBlack').checked;




    // console.log(uberX);
    // console.log(uberSUV);
    // console.log(uberBlack);

    var kmDT, km120, km21, time;

    if (uberX) {
        kmDT = 8000;
        km120 = 12000;
        km21 = 10000;
        time = 2000;
    }
    if (uberSUV) {
        kmDT = 9000;
        km120 = 14000;
        km21 = 12000;
        time = 3000;
    }
    if (uberBlack) {
        kmDT = 10000;
        km120 = 16000;
        km21 = 14000;
        time = 4000;
    }

    var soKM = +document.querySelector('#soKM').value;

    var thoiGianCho = +document.querySelector('#thoiGianCho').value;

    // console.log(kmDT);
    // console.log(km120);
    // console.log(km21);
    // console.log(time);

    // console.log(soKM);
    // console.log(typeof (soKM));
    // console.log(thoiGianCho);
    // console.log(typeof (thoiGianCho));

    var tongTien;

    if (soKM <= 1) {
        tongTien = kmDT;
    } else if (soKM <= 20) {
        tongTien = kmDT + (soKM - 1) * km120;
    } else {
        tongTien = kmDT + 19 * km120 + (soKM - 20) * km21;
    }

    tongTien += thoiGianCho * time;

    var thongSoTruyenRa = [tongTien, soKM, thoiGianCho, kmDT, km120, km21, time];


    return thongSoTruyenRa;
}

var btnTT = document.querySelector('#btnTT');

btnTT.onclick = function () {
    var tongTien = tinhTien()[0];

    document.querySelector('#thanhTien').innerHTML = tongTien + ' Vnd';

}

var btnInHD = document.querySelector('#btnInHD');

btnInHD.onclick = function () {
    var tongTien = tinhTien()[0],
    soKM = tinhTien()[1],
    thoiGianCho = tinhTien()[2],
    kmDT= tinhTien()[3],
    km120= tinhTien()[4],
    km21= tinhTien()[5],
    time= tinhTien()[6];

    document.querySelector('#tongTien').innerHTML = tongTien + ' Vnd';

    console.log(time)
    switch (time) {
        case 2000:
            document.querySelector('#loaiXe').innerHTML ='Uber X';
            break;
        case 3000:
            document.querySelector('#loaiXe').innerHTML ='Uber Suv';
            break;
        case 4000:
            document.querySelector('#loaiXe').innerHTML ='Uber Black';
            break;
    }

    document.querySelector('#kmDTDonGia').innerHTML = kmDT + '';
    document.querySelector('#km20DonGia').innerHTML = km120 + '';
    document.querySelector('#km21DonGia').innerHTML = km21 + '';
    document.querySelector('#timeDonGia').innerHTML = time + '';

    document.querySelector('#timeSoLuong').innerHTML = thoiGianCho;
    document.querySelector('#timeThanhTien').innerHTML = thoiGianCho*time + '';



    if (soKM <= 1) {
        document.querySelector('#kmDTSoLuong').innerHTML = soKM;
        document.querySelector('#kmDTThanhTien').innerHTML = kmDT + '';
        document.querySelector('#km20SoLuong').innerHTML = 0;
        document.querySelector('#km20ThanhTien').innerHTML = 0;
        document.querySelector('#km21SoLuong').innerHTML = 0;
        document.querySelector('#km21ThanhTien').innerHTML = 0;

    } else if (soKM <= 20) {
        document.querySelector('#kmDTSoLuong').innerHTML = 1;
        document.querySelector('#kmDTThanhTien').innerHTML = kmDT + '';
        document.querySelector('#km20SoLuong').innerHTML = soKM-1;
        document.querySelector('#km20ThanhTien').innerHTML = (soKM-1)*km120 + '';
        document.querySelector('#km21SoLuong').innerHTML = 0;
        document.querySelector('#km21ThanhTien').innerHTML = 0;
    } else {
        document.querySelector('#kmDTSoLuong').innerHTML = 1;
        document.querySelector('#kmDTThanhTien').innerHTML = kmDT + '';
        document.querySelector('#km20SoLuong').innerHTML = 19;
        document.querySelector('#km20ThanhTien').innerHTML = 19*km120 + '';
        document.querySelector('#km21SoLuong').innerHTML = soKM-20;
        document.querySelector('#km21ThanhTien').innerHTML = (soKM-20)*km21 + '';
    }


}

