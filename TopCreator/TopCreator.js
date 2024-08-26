export const getTopCre =(creators) =>{
    const finalCreators = [];
    const finalResults = creators.reduce((index,currenntvalue)  => {
        (index[currenntvalue.seller]= index[currenntvalue.seller] ||[]).push(currenntvalue); 
        return index;

    },{} );
    Object.entries(finalResults).forEach((items)=>{
        const seller = items[0];
        const total = items[1].map((newItem)=>Number(newItem.price)).reduce((previousValue,currenntvalue)=> previousValue + currenntvalue,0);
finalCreators.push({seller,total});

    });
    return finalCreators;
}