const count = (n) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const isBy3 = index % 3 === 0;
        const isBy5 = index % 5 === 0;
        

        if (isBy3 && isBy5) {

            console.log(i + " by both");
            
            } else if (isBy5) {
            
            console.log(i + " by 5");
            
            } else if (isBy3) {
            
            console.log(i + " by 3");
            
            } else {
            
            console.log(i);
    }
}

}
count(15); 