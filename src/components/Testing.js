import { useState, useEffect } from "react";

    function yoyo(blogs) {
        return (blogs.map(home => <div>{home}</div>));
    }
  export const Testing = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        fetch('http://localhost:9000/testApi')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, [])
    return (
        <div style={{color: "red", fontSize: 100}}>{blogs && (blogs.map(home => <div>{home.api}</div>))}</div> 
    )
}