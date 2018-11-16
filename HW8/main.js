$(document).ready(function(){
  
    $('.accordion>article').not(':first').hide();
    
    $('.accordion>h1').click(function(){
      
      var findArticle = $(this).next('article');
      var findAccordion = $(this).closest('.accordion');
     
      if(findArticle.is(':visible')){
         findArticle.slideUp();
        
      }else{
           findAccordion.find('>article').slideUp();
           findArticle.slideDown();
         }
    });
    
  });