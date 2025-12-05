
// let fetch_Api=async()=>
//     {
//         const res=await fetch("https://jsonplaceholder.typicode.com/users");
//         const data=await res.json();
//         console.log(data);
//     }
//     fetch_Api();




let api = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await result.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

api();
