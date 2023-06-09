 var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "image/team-1.jpg",
    head1: "Walter White",
    head2: "Chief Executive Officer",
    para:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut ipsa . Ipsum exercitationem is the  iure minima enim corporis  et voluptate."
},

{
    imgsrc: "image/team-2.jpg",
    head1: "Sarah Jhonson",
    head2: "Product Managerr",
    para:"Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."
},
{
    imgsrc: "image/team-3.jpg",
    head1: "William Anderson",
    head2: "CTO",
    para:"Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut aspernatur Voluptates enim aut molestiae modi."
},
{
    imgsrc: "image/team-4.jpg",
    head1: "Amanda Jepson",
    head2: "Accountant",
    para:"Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut  id the possimus ipsum officia.deserunt amet "

}]
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    var imagediv = document.createElement("div");
    div4.appendChild(imagediv);
    imagediv.classList.add("imagediv");

    var image=document.createElement("img");
    image.classList.add("image");
    imagediv.appendChild(image);
    image.src = element.imgsrc;

    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.head1;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.head2;

    var para1 = document.createElement("p");
    div5.appendChild(para1);
    para1.innerHTML = element.para;



})