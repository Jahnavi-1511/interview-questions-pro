export default function Jobs(){
const data=['AI/ML Engineer','SecOps Engineer','Frontend Freelance Developer','Angular Developer']
return <div style={{padding:'40px'}}><h1>Remote Jobs</h1>{data.map(i=><div key={i} style={{margin:'20px 0',padding:'20px',background:'#111827'}}><h2>{i}</h2><a href="https://refer.micro1.ai/referral/jobs?referralCode=1ce306d0-dc19-40e4-83be-dc9ad825b08f&utm_source=referral&utm_medium=share&utm_campaign=job_referral" target="_blank">Apply Now</a></div>)}</div>
}