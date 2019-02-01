const challenge1 = n => {
    while (n!=1){
        (n%2 === 0)? n/=2:n=n*3+1;
        console.log(n)
    };
};
challenge1(20)

//challenge2
var palindromic = 9009;
var res =0
function challenge2(){
    for (var i =100; i<1000;i++){
        for (var x=100; x<1000; x++){
            palindromic = i*x;
            //check palindromic
            if (palindromic.toString() === palindromic.toString().split("").reverse().join("")){
                if (res < palindromic){
                    res = palindromic
                }
            }
        }
    };
    console.log(res)
};    
challenge2();

const challenge3 = () =>{
    var num = 2520;
    var i =2;
    var newLocal = true;
    while (newLocal){
        while (i<21) {
            var n = num % i
            if (n % i > 0){
                num += 1;
                i = 2;
                break;
            } else{ 
                i+=1
                if (i==20){
                    console.log(num);
                    newLocal = false;
                };
            };
        };
    };
};

challenge3(); 