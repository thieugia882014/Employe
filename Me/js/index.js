// chờ cây DOM được dựng thành công thì mới xử lý tiếp. 
document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest(); // gọi grab
    // xử lý kết quả trả về.
    xhr.onreadystatechange = function () {
        // khi trạng thái request đã kết thúc và status là thành công.
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr.responseText); // dữ liệu định dạng chuỗi có format kiểu json.
            var data = JSON.parse(xhr.responseText); // chuyển từ chuỗi sang object json.
            var tableTag = document.querySelector('#product-table');
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                tableTag.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.price}</td>
                                            <td>
                                                <a href="form.html?id=${element.id}"><i class="fa fa-pencil-square-o"></i></a>
                                                <a href="detail.html?id=${element.id}"><i class="fa fa-info-circle"></i></a>
                                                <a href="javascript:void(0)"><i class="fa fa-trash" onclick="deleteProduct(${element.id})"></i></a>
                                            </td>
                                        </tr>`;
            }
        }
    };
    xhr.open('GET', 'http://localhost:8080/api/v1/employees', false); // gửi đi đâu, theo cách nào.
    xhr.send(); // phóng xe đi.    
})

function deleteProduct(id) {

    if (id === undefined || id === null) {
        return;
    }
    if (confirm('Are you sure?')) {
        var xhr = new XMLHttpRequest(); // gọi grab
        // xử lý kết quả trả về.
        xhr.onreadystatechange = function () {
            // khi trạng thái request đã kết thúc và status là thành công.
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert('Success');
                window.location.href = 'index.html';
            }
        };
        xhr.open('DELETE', 'http://localhost:8080/api/v1/employees/' + id, false); // gửi đi đâu, theo cách nào.
        xhr.send(); // phóng xe đi. 
    }
}