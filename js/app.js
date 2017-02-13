    //mot de passe (au moins huit caractères dont au moins une majuscule, un caractère spécial et un chiffre),
    $(document).ready(function(){
    	$("form").on("submit", function(event){
    		event.preventDefault();
    	});
    	var sexe;
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

    	$(".sexe").click(function(){
    		if ($("#feminin").is(':checked')) {
    			sexe = "femme";
    		} else if ($("#masculin").is(':checked')) {
    			sexe = "homme";
    		}
    	});

    	var users = [];
    	$("form").submit(function(event){
    		var name = $("#name").val();
    		var firstName = $("#prenom").val();
    		var log = $("#login").val();
    		var date = $("#date").val();
    		var mail = $("#email").val();
    		var tel = $("#tel").val();
    		var ville = $("#ville").val();
    		var color = $("#color").val();
    		var pass = $("#password").val();
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
    			sexe:sexe,
    		}
    		users.push(obj);
    		console.log(users);
    		localStorage.setItem("users", JSON.stringify(users));
    		var user = localStorage.getItem("users");
    		var parseUser = JSON.parse(user);
    		for (var i=0 ; i<parseUser.length; i++){
    			console.log(parseUser[i]);
    			$("#app").append(parseUser[i] + "<br />");
    		}
    	});

    });	