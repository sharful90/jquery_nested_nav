$(document).ready(function() {

 let m= $(".drop1");
 let n= $(".drop2");
 let o= $(".drop3");
 let p= $(".drop4");
 let q= $(".drop5");

  $("#home").click(function() {
    m.slideToggle();
    if (m.css("display","block")) {
      n.css("display", "none");
      o.css("display", "none");
      p.css("display", "none");
      q.css("display", "none");
    }
  });

  $("#about").click(function() {
    n.slideToggle();
    if (n.css("display", "block")) {
      m.css("display", "none");
      o.css("display", "none");
      p.css("display", "none");
      q.css("display", "none");
    }
  });

  $("#service").click(function() {
    o.slideToggle();
    if (o.css("display", "block")) {
      n.css("display", "none");
      m.css("display", "none");
      p.css("display", "none");
      q.css("display", "none");
    }
  });

  $("#portfolios").click(function() {
    p.slideToggle();
    if (p.css("display", "block")) {
      n.css("display", "none");
      o.css("display", "none");
      m.css("display", "none");
      q.css("display", "none");
    }
  });

  $("#team").click(function() {
    q.slideToggle();
    if (q.css("display", "block")) {
      n.css("display", "none");
      o.css("display", "none");
      p.css("display", "none");
      m.css("display", "none");
    }
  });
});


