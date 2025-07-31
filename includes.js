const friends = ['Balam', 'Kalam', 'Salam',  'Gelam' , 'Pailam'];
console.log(friends.includes('Gelam'));

console.log(friends.includes('gelam'));

if(friends.includes('Gelam')){
    console.log('Party');
}
else{
    console.log('No food. We are fasting');
}

//----------------->

if(friends.includes('sailam')){
    console.log('Party');
}
else{
    console.log('No food. We are fasting');
}