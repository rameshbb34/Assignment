import React from 'react';
import { Component } from 'react/';
import Card from './Card';

class Data extends Component {

    render() {
const style={width:"18rem"}
const style2={display:"inline"}
        const posts=this.props.postData;
const list=posts.map((post)=>{
return <Card style={style} title={post.title} selftext_html={post.selftext_html} url={post.url} score={post.score}></Card>
});
        return <div>
           <li style={style2}> {list}</li>
            </div>
    }
}
export default Data;