const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question1

const cat = {
    complain: function () {
      console.log("Meow!");
    },
  };

  cat.complain();

 //Question2

  let heading = document.querySelector("h3");
 heading.innerHTML = "Updated heading";

 //Question3

 heading.style.fontSize = "2em";

 //Question4

 heading.className = "subheading";

 //Question5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question7

function randomFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }

}

randomFunction(cats);

//Question8
//did not understand.


