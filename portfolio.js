let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('about');
let projectsSection = document.getElementById('projects');

function show(section) {
    if (section == 'home' || section == 'about') {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'block';
        projectsSection.style.display = 'none';
    } else {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsSection.style.display = 'block';
    }    
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })
$(document).ready(function(){
    $(".nav .nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('activeTab', $(this).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
        $(".nav").find(".active").removeClass("active");
        $(`[href^=${activeTab}]`).addClass("active")

        
        // $(activeTab).addClass("active");
        // $('#myTab a[href="' + activeTab + '"]').tab('show');
    }
});

