document.getElementById('menu').onclick = function(e) {
  if (document.getElementById('mmenu').style.display === 'block') {
    document.getElementById('mmenu').style.display = 'none';
    document.getElementById('menucolor').style.color = "#14a96d";
  }
  else {
    document.getElementById('mmenu').style.display = 'block';
    document.getElementById('menucolor').style.color = "#6FEEBB";
  }
};





window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    const navUl = document.querySelector('.left-nav');
    let logo = document.querySelector(".logo img");
    if(this.scrollY <= 10){
    nav.className = 'disk'; 
    navUl.className='left-nav'; 
    logo.src = "imges/T-Valley-W.png";
   
  } 
  else {
    nav.classList.add('scroll');
    navUl.classList.add('scroll-left-nav'); 
    navUl.style.color="#1f194c";
    logo.src = "imges/cropped-TaibahV_logo2-2.png";
    
   
   
  }
};



/*$(function () { 
  $(window).scroll(function () {
     if ($(this).scrollTop() > 1000) { 
         $('.logo img').attr('src','imges/T-Valley-W.png');
      }
     if($(this).scrollTop() < 1000) { 
         $('.logo img').attr('src','imges/cropped-TaibahV_logo2-2.png');
     }
  })
});*/







const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     // currentlyActiveAccordionItemHeader.nextElementSibling.style.background="red"
      
    
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      //accordionItemBody.style.background="red"
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));