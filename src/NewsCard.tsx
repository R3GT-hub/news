type newnewsProps={
newnews:{
    title:string;
    author:string;
    num_comments:number;
    url:string;
}
}
 const newscard=(props:newnewsProps)=>{
    return (
        <div className="newnews">
            
        <div>
            <div>
               <h2>{props.newnews.title}</h2>
            </div>
            <div className="authcom">
             <p>Author: {props.newnews.author}</p>
             <p>Comments: {props.newnews.num_comments}</p>
            </div>
            <div className="link">
            <a className="link_link" href={props.newnews.url}rel="noreferrer" target="_blank">Read More</a>
            </div>
            
        </div>
    </div>
    )
};
export default newscard;