
function palabraRamdom(array){
        const ramdom = Math.floor(Math.random()*array.length);
        const valorRamdon = array[ramdom];
        return valorRamdon;
    }

    export default palabraRamdom;