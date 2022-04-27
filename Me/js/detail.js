document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    var getProductDetailUrl = `http://localhost:8080/api/v1/employees/${id}`;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var element = JSON.parse(xhr.responseText);
          var tableTag = document.querySelector('#product-table');
          tableTag.innerHTML += `<tr>
                                                <td>${element.id}</td>
                                                <td>${element.name}</td>
                                                <td>${element.price}</td>

                                                <td>
                                                    <a href="form.html?id=${element.id}"><i class="fa fa-pencil-square-o"></i></a>                                                      
                                                    <a href="javascript:void(0)"><i class="fa fa-trash" onclick="deleteProduct(${element.id})"></i></a>
                                                </td>
                                            </tr>`;
        } else {
          alert('Không thể load sản phẩm!');
        }
      }
    }
    xhr.open('GET', getProductDetailUrl, false);
    xhr.send();
  })