var Bucky = {
    printFirstName: function(){
        console.log("My name is Bucky");
        console.log(this === Bucky);
    } 
};

Bucky.printFirstName();

// The default calling context in global
function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this === global);
}

doSomethingWorthless();