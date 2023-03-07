function SendMail(){

    var params = {

        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        phone : document.getElementById("phone").value ,
        message : document.getElementById("message").value ,

    };

    const ServiceID = "service_oskskxe" ;
    const TemplateID = "template_hta0tb2" ;

    emailjs.send(ServiceID,TemplateID,params)
    .then(
        res =>{

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value  = "";
            document.getElementById("message").value  = "";
            console.log(res);
            alert("Your message has been sent");
        }
    )

    .catch(err=>console.log(er));
}

