    //mot de passe (au moins huit caractères dont au moins une majuscule, un caractère spécial et un chiffre),
    $(document).ready(function(){
    	$("form").on("submit", function(event){
    		event.preventDefault();
    	});
    	function amicale(){
    		console.log("Salut");
    	};
    	amicale();
    	function validatePhone(txtPhone) {
    		var a = $("#tel").val();
    		console.log(a);
    		var filter = /^[0-9-+]+$/;
    		if (filter.test(a)) {
    			return true;
    		}
    		else{
    			return false;
    		}
    	}

    	$('#tel').blur(function(e) {
    		if (validatePhone('tel')) {
    			$('#spnPhoneStatus').html('Valid');
    			$('#spnPhoneStatus').css('color', 'green');
    		}
    		else {
    			$('#spnPhoneStatus').html('Invalid');
    			$('#spnPhoneStatus').css('color', 'red');
    		}
    		validatePhone("#txtPhone");
    	});
    	$("input[type=password]").blur(function(){
    		var pwd = $(this).val();
            //check taille passsword
            if ( pwd.length < 8){
            	$("#length").removeClass("valid").addClass("invalid");
            }
            else{
            	$("#length").removeClass("invalid").addClass("valid");
            }
            //check majuscule password
            if ( pwd.match(/[A-Z]/)) {
            	$("#capital").removeClass("invalid").addClass("valid");
            }
            else{
            	$("#capital").removeClass("valid").addClass("invalid");
            }
            //check number password
            if ( pwd.match(/\d/)) {
            	$("#number").removeClass("invalid").addClass("valid");
            }
            else{
            	$("#number").removeClass("valid").addClass("invalid");
            }
            //check special caracter password
            if (pwd.match(/[!@#$%\^&*(){}[\]<>?/|\-]/)) {
            	$("#special").removeClass("invalid").addClass("valid");
            }
            else{
            	$("#special").removeClass("valid").addClass("invalid");

            }
        });
    	var users = [];
    	$("form").submit(function(event){
    		var name = $("#nom").val();
    		var firstName = $("#prenom").val();
    		var log = $("#login").val();
    		var date = $("#naissance").val();
    		var mail = $("#mail").val();
    		var tel = $("#textPhone").val();
    		var ville = $("#ville").val();
    		var color = $("#color").val();
    		var pass = $("#pwd").val();
    		var obj = {
    			name:name,
    			firstName:firstName,
    			log:log,
    			date:date,
    			mail:mail,
    			tel:tel,
    			ville:ville,
    			color:color,
    			pass:pass,
    		}
    		users.push(obj);
    		console.log(users);
    		localStorage.setItem("users", JSON.stringify(users));
    		var user = localStorage.getItem("users");
    		var parseUser = JSON.parse(user);
    		for (var i=0 ; i<parseUser.length; i++){
    			console.log(parseUser[i]);
    			//$("#app").append(parseUser[i] + "<br />");
    		}
    	});
        // $.fn.formBackUp = function(){
        //     if(!localStorage){
        //         return false;
        //     }
        //     var forms = this;
        //     var datas = {};
        //     var ls = false;
        //     datas.href = window.location.href;

        //     if(localStorage["formBackUp"]){
        //         ls = JSON.parse(localStorage["formBackUp"]);
        //         if(ls.href == datas.href){
        //             for(var id in ls){
        //                 if(id != "href"){
        //                     $("#" + id).val(ls[id]);
        //                     datas[id] = ls[id];
        //                 }
        //             }
        //         }
        //     }
        //     forms.find ("input.text").keyup(function(e){
        //         datas[$(this).attr("id")] = $(this).val();
        //         localStorage.setItem("formBackUp" , JSON.stringify(datas));
        //     });
        //     forms.submit(function(e){
        //         localStorage.removeItem("formBackUp");
        //     })
        //     console.log(datas)
        // }
        // $("form").formBackUp();
    });	