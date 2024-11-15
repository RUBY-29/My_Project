const apikey = '33f1320e283d41f1b39d42750be3ad86';
const blogcontainer = document.getElementById("blog-container");

async function fetchRandomNews()
{
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-10-15&sortBy=publishedAt&apiKey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;

    }
    catch(error){
        console.error("error fetching random news",error);
        return[];
    }
}

function  displayBlogs(articles){
    blogcontainer.innerHTML="";
    articles.forEach((article)=>{
        const BlogCard = document.createElement("div");
        BlogCard.classList.add("blog-card");
        const img =document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
       const truncatedtitle = article.title.length>30? article.title.slice(0,30)+"....." : article.title;
       title.textContent = truncatedtitle;
        const description = document.createElement("p");
        description.textContent = article.description;
        BlogCard.appendChild(img);
        BlogCard.appendChild(title);
        BlogCard.appendChild(description);
        blogcontainer.appendChild(BlogCard);
    });
}

(async ()=>{
    try{
       const articles =  await fetchRandomNews();
       displayBlogs(articles);
    }
    catch(error){
        console.error("error fetching random news",error);
    }
})();