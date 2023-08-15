
// barba.init({
//   transitions: [{
//     name: 'fade-transition',
//     async leave(data) {
//       const done = this.async();
//       await gsap.to('.extension', { width:"100%", duration: 0.5 });
//       done();
//     },
//     async enter(data) {

//       await gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
 
//     }
//   }]
// });

  const states=[0,0,0]
  document.querySelector('.menu').addEventListener('click',()=>{
    alert("click")
  })
  document.querySelector('.about').addEventListener("click",()=>{
    window.location.href="about.html"
  })
  document.querySelectorAll('.collaspable').forEach(el=>{
    el.style.display="none"
  });
  document.querySelectorAll('.regulist div').forEach((el,index)=>{
    el.addEventListener("click",(ev)=>{
     if(!states[index]){
      states[index]=1
      ev.target.children[0].classList.add("active");
      ev.target.children[0].classList.remove("unactive")
      console.log(index)

      if(index==2){
      document.querySelectorAll('.collaspable')[index-1].style.display="block";
      }
      else if(index==4){
        
      document.querySelectorAll('.collaspable')[index-2].style.display="block";
      }
      else{
        document.querySelectorAll('.collaspable')[index].style.display="block";
      }
     
     }
     else{
      states[index]=0;
      ev.target.children[0].classList.add("unactive");
      ev.target.children[0].classList.remove("active")
      if(index==2){
        document.querySelectorAll('.collaspable')[index-1].style.display="none";
        }
        else if(index==4){
          
        document.querySelectorAll('.collaspable')[index-2].style.display="none";
        }
        else{
          document.querySelectorAll('.collaspable')[index].style.display="none";
        }
     }
    })
  })
  const element=document.querySelector('.infoText')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('animate');
        element.classList.remove('notseen') // Add 'animate' class when element is visible
      }
      else{
        element.classList.add('notseen')
        element.classList.remove('animate'); 
      }
    });
  });
   observer.observe(element)
  observer.observe(document.querySelector('.imgDiv'))

 
  const box1=document.querySelector('.shadow1')
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('animate');
        element.classList.remove('notseen') // Add 'animate' class when element is visible
      }
      else{
        element.classList.add('notseen')
        element.classList.remove('animate'); 
      }
    });
  });

  observer2.observe(box1)

