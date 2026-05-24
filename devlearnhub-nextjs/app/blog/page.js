export default function Blog(){
const data=['Frontend Roadmap','Angular Signals','React Hooks','RxJS Guide']
return <div style={{padding:'40px'}}><h1>Developer Blogs</h1>{data.map(i=><div key={i} style={{margin:'20px 0',padding:'20px',background:'#111827'}}>{i}</div>)}</div>
}