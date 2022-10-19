let container = document.createElement("div")
container.setAttribute("class","conatiner")

let span = document.createElement("span")
span.innerHTML = 10

container.append(span);

document.body.append(container);

let countdown = 10;
setTimeout(()=>{
    countdown = countdown-1
    span.innerHTML = countdown
    setTimeout(()=>{
        countdown = countdown-1
        span.innerHTML = countdown
        setTimeout(()=>{
            countdown = countdown-1
            span.innerHTML = countdown
            setTimeout(()=>{
                countdown = countdown-1
                span.innerHTML = countdown
                setTimeout(()=>{
                    countdown = countdown-1
                    span.innerHTML = countdown
                    setTimeout(()=>{
                        countdown = countdown-1
                        span.innerHTML = countdown
                        setTimeout(()=>{
                            countdown = countdown-1
                            span.innerHTML = countdown
                            setTimeout(()=>{
                                countdown = countdown-1
                                span.innerHTML = countdown
                                setTimeout(()=>{
                                    countdown = countdown-1
                                    span.innerHTML = countdown
                                    setTimeout(()=>{
                                        countdown = countdown-1
                                        span.innerHTML = `<img src="https://img.freepik.com/free-vector/15th-august-happy-independence-day-india_1017-20000.jpg?w=900&t=st=1666181644~exp=1666182244~hmac=68d25df3911edb9c3ec2f6cd4535e4be0e50a79afee5422133f80476dde4e24c" alt="HAPPY INDEPENDENCE DAY"></img>`
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)