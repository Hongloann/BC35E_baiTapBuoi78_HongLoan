
//DOM ID
function getEle(id){
    return document.getElementById(id);
}

// tạo mảng người dùng nhập 
var numArray = [];

//Thêm số vào mảng
getEle("btnArr").onclick = function(){
    var arr = getEle("txtNum1").value*1;
    numArray.push(arr);
    getEle("output1").innerHTML = numArray;
    getEle("output1").style.display = "block";
};


// Bài 1: Tính tổng các số dương trong mảng 

getEle("btnTinhTong").onclick = function(){
    // ĐẦU VÀO 
    var sum = 0;
    for (var i = 0; i < numArray.length; i++ ){

    // XỬ LÝ
    if (numArray[i]>0){
        sum += numArray[i];
        };
    };

    // ĐẦU RA 
    getEle("output2").innerHTML = "Tổng số dương là: " +  sum;
    getEle("output2").style.display = "block";
};


//Bài 2: Đếm có bao nhiêu số dương trong mảng 

getEle("btnDemSo").onclick = function(){
    //ĐẦU VÀO
    var soDuong = 0;
    for (var i = 0; i < numArray.length; i++){
    
    //XỬ LÝ
    if (numArray[i]>0){
        ++soDuong;
    };
    };

    // ĐẦU RA 
    getEle("output3").innerHTML = "Đếm số: " +  soDuong;
    getEle("output3").style.display = "block";
};


// bài 3: Tìm số nhỏ nhất trong mảng 

getEle("btnTimSo").onclick = function(){
    //ĐẦU VÀO 
    var soNhoNhat = numArray[0] ;
    for (var i = 1; i < numArray.length; i++){
        if (numArray[i]<soNhoNhat){
            soNhoNhat = numArray[i];
        };
    };
    getEle("output4").innerHTML = "Số nhỏ nhất là: " + soNhoNhat  ;
    getEle("output4").style.display = "block";
}


// bài 4: Tìm số dương nhỏ nhất trong mảng 
getEle("btnTimSoDuong").onclick = function(){
    // Đầu vào
    var SoDuongNho = [];
    var SNN = SoDuongNho[0];
    for (var i = 0; i < numArray.length; i++){
        if ( numArray[i]>0){
            SoDuongNho.push(numArray[i]);
        }else{
            SNN="không có số dương trong mảng";
        };
    };

    for (var j = 1; j < SoDuongNho.length; j++ ){
        if (SoDuongNho[j]< SNN){
            SNN = SoDuongNho[j]
        };
    };
    getEle("output5").innerHTML = "Số dương nhỏ nhất là: " + SNN ;
    getEle("output5").style.display = "block";
};

// bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

getEle("btnTimSoChan").onclick = function(){
    var soChan = -1;
    for(i=0;i<numArray.length;i++){
        if(numArray[i]%2===0){
            soChan=numArray[i];
        };
    };
    getEle("output6").innerHTML = "Số chẵn cuối cùng là: " + soChan ;
    getEle("output6").style.display = "block";
};


// bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).

function change(a,b){
    var c = numArray[a];
    numArray[a] = numArray[b];
    numArray[b] = c;
}

getEle("btnDoiCho").onclick= function(){
    change(getEle("number1").value*1,getEle("number2").value*1);

    // ĐẦU RA 
    getEle("output7").innerHTML = "Kết quả: " + numArray ;
    getEle("output7").style.display = "block";
}

