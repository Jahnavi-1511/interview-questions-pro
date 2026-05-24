import Link from 'next/link'
export default function Home(){
return (
<main style={{padding:'40px'}}>
<h1 style={{fontSize:'60px'}}>DevLearnHub</h1>
<p>Developer tutorials, interview prep and remote jobs.</p>
<div style={{display:'flex',gap:'20px',marginTop:'20px'}}>
<Link href="/tutorials">Tutorials</Link>
<Link href="/interview">Interview</Link>
<Link href="/jobs">Jobs</Link>
<Link href="/blog">Blog</Link>
</div>
</main>
)}