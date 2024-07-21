

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["College Student", "Aspiring Front-End Developer","Research Assistant"],
        typeSpeed: 100,
        backSpeed: 100, 
        backDelay: 1000,
        loop: true
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const resumeUpload = document.getElementById('resumeUpload');
    const uploadBtn = document.getElementById('uploadBtn');
    const resumeLink = document.getElementById('resumeLink');

    function uploadResume() {
        const file = resumeUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const dataUrl = event.target.result;
                const blob = new Blob([new Uint8Array(dataUrl)], { type: file.type });
                const url = URL.createObjectURL(blob);
                resumeLink.href = url;
                resumeLink.style.display = 'block';
                uploadBtn.disabled = true;
            };
            reader.readAsArrayBuffer(file);
        }
    }

    uploadBtn.addEventListener('click', uploadResume);
});
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section !== targetSection) {
                    section.classList.remove("active");
                }
            });

            targetSection.classList.add("active");

            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".radial-bar");

    bars.forEach(function (bar) {
        const percentage = parseInt(bar.querySelector(".percentage").textContent);
        const circumference = 251.2; 

        const paths = bar.querySelectorAll(".path");
        paths.forEach(function (path) {
            const dashOffset = circumference * (1 - percentage / 100);
            path.style.strokeDasharray = `${circumference}`;
            path.style.strokeDashoffset = `${dashOffset}`;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
});
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
  
        navbarLinks.forEach(nav => nav.classList.remove('active'));
        
       
        this.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    const removeActiveClasses = () => {
      navLinks.forEach(link => link.classList.remove('active'));
    };
  
   
    const setActiveLink = (sectionId) => {
      removeActiveClasses();
      const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };
  
   
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.matches('[data-target]')) {
        e.preventDefault();
        const targetId = target.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        setActiveLink(targetId);
      }
    });
  
    window.addEventListener('popstate', () => {
      const hash = window.location.hash.slice(1);
      setActiveLink(hash);
    });
  
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      setActiveLink(initialHash);
    }
  
   
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, {
      threshold: 0.5 
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const goBackBtn = document.getElementById('go-back-btn');
  
  
    const removeActiveClasses = () => {
      navLinks.forEach(link => link.classList.remove('active'));
    };
  
   
    const setActiveLink = (sectionId) => {
      removeActiveClasses();
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };
  
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.matches('[data-target]')) {
        e.preventDefault();
        const targetId = target.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        setActiveLink(targetId);
        localStorage.setItem('lastSection', targetId); 
      }
    });
  
  
    window.addEventListener('popstate', () => {
      const hash = window.location.hash.slice(1);
      setActiveLink(hash);
    });
  
   
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      setActiveLink(initialHash);
    }
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          localStorage.setItem('lastSection', entry.target.id); // Store the last section
        }
      });
    }, {
      threshold: 0.5 
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    
    document.getElementById('linkedin-link').addEventListener('click', () => {
      goBackBtn.style.display = 'block';
      localStorage.setItem('fromExternal', true);
    });
  
    document.getElementById('whatsapp-link').addEventListener('click', () => {
      goBackBtn.style.display = 'block';
      localStorage.setItem('fromExternal', true);
    });
  
    goBackBtn.addEventListener('click', () => {
      const lastSection = localStorage.getItem('lastSection');
      if (lastSection) {
        document.getElementById(lastSection).scrollIntoView({ behavior: 'smooth' });
        setActiveLink(lastSection);
      }
      goBackBtn.style.display = 'none';
      localStorage.removeItem('fromExternal');
    });
  
   
    if (localStorage.getItem('fromExternal')) {
      goBackBtn.style.display = 'block';
      const lastSection = localStorage.getItem('lastSection');
      if (lastSection) {
        setActiveLink(lastSection);
      }
    }
  });
  