// //==========Closure exercise
// // ========== Counter1
// function counter(){
//     var count = 0;
//     var actuallyCount = function(){
//         count++;
//         return count;
//     }
//     return actuallyCount;
// }

// var count1 = counter()
// var count2 = counter()

// console.log(count1())
// console.log(count1())
// console.log(count2())
// console.log(count2())
// console.log(count1())

// // ========== Counter2
// function counter2(num){
//     var count = num;
//     var actuallyCount = function(){
//         count++;
//     }
//     return actuallyCount;
// }

// var count1 = counter2(4)

// console.log(count1())
// console.log(count1())

// // ========== Counter3 with prototypes
// var counter3 = function (num){
    //     this.num = num;
    // }
    // counter3.prototype.increment = function(){
        //     return this.num +1;
        // }
        // counter3.prototype.decrement = function(){
            //     return this.num -1;
            // }
            // var count = new counter3(3)
            // console.log(count.increment())
            // console.log(count.decrement())
            
            // // ========== Counter3 with Closure
            function counter4(num){
                return {
                    increment: function(){return num+1},
                    decrement: function(){return num-1}
                } 
            }
            var count = counter4(4);
            console.log(count.increment());
            console.log(count.decrement());
            //         return count;