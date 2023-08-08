barba.init({
    transitions: [{
      name: 'fade-transition',
      async leave(data) {
        const done = this.async();
        await gsap.to('.extension', { width:"100%", duration: 0.5 });
        done();
      },
      async enter(data) {

        await gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
   
      }
    }]
  });


  
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

