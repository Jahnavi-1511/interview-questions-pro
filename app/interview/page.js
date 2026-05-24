export default function Interview(){
const data=['Angular Questions','React Questions','JavaScript Questions','.NET Questions']
return <div style={{padding:'40px'}}><h1>Interview Questions</h1>{data.map(i=><div key={i} style={{margin:'20px 0',padding:'20px',background:'#111827'}}>{i}</div>)}</div>
}