'use strict';

document.addEventListener('DOMContentLoaded', () => {

    function setMenuBar () {

        let bar = document.createElement('div'),
            section = document.querySelector('.header');

        bar.classList.add('bar');
        bar.innerHTML = `<div class="sandwich">
                            <div class="sandwich__top"></div>
                            <div class="sandwich__center"></div>
                            <div class="sandwich__bottom"></div>
                        </div>`;
        
        section.prepend(bar);
    }

    function showMenu (selector) {

        let bar = document.querySelector('.bar'),
            block = document.querySelector(selector);

        bar.addEventListener('click', (event) => {

            let et = event.target,
                icon = document.querySelector('.sandwich'),
                top = 'sandwich__top',
                center = 'sandwich__center',
                bottom = 'sandwich__bottom';

            if (et && et.classList.contains('sandwich') || et.classList.contains(top) || 
            et.classList.contains(center) || et.classList.contains(bottom)) 
            {

                icon.classList.toggle('animated');
                block.classList.toggle('animated');
                document.body.classList.toggle('noScroll');
            }
        });
    }
    
    setMenuBar();
    showMenu('.promo__menu');
});
