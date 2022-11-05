let slide = document.querySelectorAll(".slide");
let slideArray =  Array.from(slide);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next")

console.log(next);
console.log(slideArray);


// creating prev next element

function prevnext(){
    // finding the index number of active from slides 
    let activeArray = document.querySelector(".active");
    let activeIndex = slideArray.indexOf(activeArray);
    console.log(activeIndex) ;

    let next, prev;
 

    // previous condition
    if(activeIndex == 0){
        prev = slideArray[slideArray.length - 1]
    }else{
        prev = slideArray[activeIndex - 1];
    }

    //next condition
    if(activeIndex == slideArray.length -1){
        next = slideArray[0]
    }else{
        next = slideArray[activeIndex + 1];
    }


    // let prev = slideArray[slideArray.length - 1];
    // let next = slideArray[activeIndex + 1];

    // let prev = slideArray[activeIndex - 1];
    // let next = slideArray[activeIndex + 1];
    
    // let prev = activeIndex - 1;
    // let next = activeIndex + 1;

    console.log('prev', prev);
    console.log('next', next);

    return [next, prev]

}
prevnext(); 



//sliding elements
function slider(){
    let activeArray = document.querySelector(".active");
    let activeIndex = slideArray.indexOf(activeArray);

    let [next, prev] = prevnext(); // destructure

    slideArray.map((item, index) => {

        if(activeIndex == index){
            item.style.transform = "translateX(0)";   
        }else if(item == prev){
            item.style.transform = "translateX(-100%)";
        }else if(item == next){
            item.style.transform = "translateX(100%)";
        }
        item.addEventListener("transitionend", () => {
            item.classList.remove("smooth")
        })

    });
}
// slider();

// next nutton element
next.addEventListener("click", () => {
    let activeArray = document.querySelector(".active");
    let[next, prev] = prevnext();

    //transition animation
    activeArray.classList.add("smooth");
    next.classList.add("smooth");

    activeArray.classList.remove("active");  // remove index number
    activeArray.style.transform = "translateX(-100%)";

    next.classList.add("active");  //add index number
    next.style.transform = "translateX(0)"; 

    slider();
    console.log(next);
});


// previous button element
prev.addEventListener("click" , () =>{
    let activeArray =  document.querySelector(".active");
    let[next, prev] = prevnext();  // let [prev] = prevnext() sudhu akta dile prblm korbe olta behave korbe , destructuring prblm

    //transition animation
    activeArray.classList.add("smooth");
    prev.classList.add("smooth");

    activeArray.classList.remove("active");  // remove index number
    activeArray.style.transform = "translateX(100%)";

    prev.classList.add("active");
    prev.style.transform = "translateX(0)"; 

    slider();
    console.log(prev);
});