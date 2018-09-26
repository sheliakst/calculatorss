$(document).ready(function () {

    var outputcalc
    var total = "";
    $(".btn").on("click", function () {

        var clickval = $(this).html();

        if (clickval >= 0 && clickval <= 9) {

            total += clickval;
            $(".form-control").attr("value", total);


        } else if (clickval === "C") {

            $(".form-control").attr("value", "Output");
            total = "";

        } else if (clickval == "+" || clickval == "-" || clickval == "/" || clickval == "*") {



            var n = total.length;
            var checklast = total.charAt(n - 1);
            var checkfirst = total.charAt(0);


            if (checklast !== "+" && checklast !== "-" && checklast !== "*" && checklast !== "/" && checkfirst !== "") {
                total += clickval;
                $(".form-control").attr("value", total);
            } else {
                //alert?
            }


        } else if (clickval === "=") {
            var n = total.length;
            var checklast = total.charAt(n - 1);
            console.log(checklast)


            if (checklast === "+" || checklast === "-" || checklast === "*" || checklast === "/") {

                total = total.slice(1, n - 1);
                console.log(total)
                $(".form-control").attr("value", eval(total));

            } else {
                $(".form-control").attr("value", eval(total));



            }

        }





    });
});