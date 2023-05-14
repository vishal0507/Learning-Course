$(document).ready(function()
{
    var myArray=[];
    $.ajax({
        type:"Get",
        url:"https://dummy.restapiexample.com/api/v1/create",
        success:function(response)
        {
            myArray=response;
            createData(response);
        }
    });


    function createData(data)
    {
        var table=document.getElementById("addDatas");
        for(var i=0;i<DataTransfer.length;i++)
        {
            var row=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].employee_name}</td>
                <td>${data[i].employee_salary}</td>
                <td>${data[i].employee_age}</td>
            </tr> `
            table.innerHTML+=row;
        }
    }  
    
});

