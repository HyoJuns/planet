
window.onload = function(){
    
    const planets = document.querySelectorAll('.space');
    const fullpage = document.querySelectorAll('.fullpage');

    // 메뉴 클릭
    planets.forEach(item => {
        item.addEventListener('click', function(){
            planets.forEach(item => {
                item.classList.remove('select');
            });

            item.classList.add('select');
            
            const num = Number(item.getAttribute('data-type'));
            
            fullpage.forEach((item, index)=>{
                item.classList.remove('hide');
                if(index < num-1){
                    item.classList.add('hide');
                }
                else
                {
                    
                }
            });

        });
    });

};