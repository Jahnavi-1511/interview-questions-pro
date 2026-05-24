export default function Tutorials(){
const data=['HTML','CSS','JavaScript','Angular','React','.NET','SQL']
return <div style={{padding:'40px'}}><h1>Tutorials</h1>{data.map(i=><div key={i} style={{margin:'20px 0',padding:'20px',background:'#111827'}}>{i} Tutorial</div>)}</div>
}