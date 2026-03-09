// ── Cursor
const cur=document.getElementById("cur"),ring=document.getElementById("cur-ring");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;});
document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("mouseenter",()=>ring.classList.add("expand"));
  el.addEventListener("mouseleave",()=>ring.classList.remove("expand"));
});
(function loop(){
  cur.style.cssText=`left:${mx-4}px;top:${my-4}px`;
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  ring.style.cssText=`left:${rx-17}px;top:${ry-17}px`;
  requestAnimationFrame(loop);
})();

// ── Nav scroll
const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>nav.classList.toggle("sc",scrollY>60));

// ── Particles
const pc=document.getElementById("ptcl");
for(let i=0;i<28;i++){
  const p=document.createElement("div");
  p.className="ptcl";
  const sz=Math.random()*2+1;
  p.style.cssText=`left:${Math.random()*100}%;width:${sz}px;height:${sz}px;--d:${7+Math.random()*10}s;--dl:${Math.random()*15}s;--dx:${(Math.random()-.5)*180}px;`;
  pc.appendChild(p);
}

// ── Scroll reveal + skill bars
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("in");
      e.target.querySelectorAll(".sk-bar").forEach(b=>b.classList.add("go"));
    }
  });
},{threshold:.1});
document.querySelectorAll(".r").forEach(el=>obs.observe(el));

// ── Send Mail
function sendMail(){
  const name=document.getElementById("cName").value.trim();
  const email=document.getElementById("cEmail").value.trim();
  const msg=document.getElementById("cMsg").value.trim();
  if(!name||!msg){alert("Please fill in your name and message.");return;}
  const sub=encodeURIComponent("Portfolio Inquiry from "+name);
  const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\nMessage:\n"+msg);
  window.location.href="mailto:ruzaitahamedzainudeen@gmail.com?subject="+sub+"&body="+body;
  const s=document.getElementById("sendStatus");
  s.style.display="block";
  setTimeout(()=>s.style.display="none",4000);
}