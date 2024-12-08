export const sliceTitle = (title)=>{
    const result = title.length > 30 ? title.slice(0, 30) + '....' : title;
    return result;
};


export const useParams = () =>{
    const queryParams = window.location.search;
    const parse = new URLSearchParams(queryParams);
    const querys = [...parse];
    const obj = {};

    querys.forEach(query =>{
        obj[query[0]] = query[1];
    });
    return obj;
};