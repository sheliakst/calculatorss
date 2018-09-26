


$(document).ready(function () {

    let insertval = "";
    let stringvalue = [];





    $(".btn").on("click", function () {
        //timh tou kathe click
        var clickvalue = $(this).html()
        //synolikh timh
        insertval += $(this).html();

        if (clickvalue === "C") {

            $(".form-control").attr("value", "Output");
            insertval = "";

        } else if (insertval.charAt(0) === "0") {

            insertval = insertval.slice(1);
        }


        else if (clickvalue === "=") {


        }

        else if (clickvalue === "+" || clickvalue === "-" || clickvalue === "x" || clickvalue === "/") {

            stringvalue = insertval.split("")
            console.log(stringvalue);


            //thelw na dw an yparxei ksana h praksh 


        }


        else {
            $(".form-control").attr("value", insertval);
        };


    });




});