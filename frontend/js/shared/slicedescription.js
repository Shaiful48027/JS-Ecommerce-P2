export const sliceDes = (description)=>{
    const result2 = description.length > 20 ? description.slice(0, 70) + "...." : description;
    return result2;
}