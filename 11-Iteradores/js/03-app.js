// fizz buzz

// multiplo de 3 fizz
// multiplo de 5 buzz
// multiplo de 15 fizz buzz

for ( let i = 0; i <= 100; i++ ){
    if(i % 15 === 0){
        console.log(`${i} FIZZ BUZZ!!!`)
    }else if (i % 3 === 0){
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }
}