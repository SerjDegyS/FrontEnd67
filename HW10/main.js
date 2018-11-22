$(document).ready(function(){
  
    $('.accordion>article').not(':first').hide();
    
    $('.accordion>h1').click(function(){
      
      var findArticle = $(this).next('article');
      var findAccordion = $(this).closest('.accordion');
     
      if(findArticle.is(':visible')){
         findArticle.slideUp(250);
        
      }else{
           findAccordion.find('>article').slideUp(250);
           findArticle.slideDown(250);
         }
    });
    
  });