const menu=document.querySelector('.menu')
const menuList=document.querySelector('nav ul')
menu.addEventListener('click' ,() => {
    menuList . classList.toggle('show-menu')

})



    const quoteText = document.getElementById('quote-text');

    function getRandomQuote() {
        const apiUrl = 'https://api.quotable.io/random';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayQuote(data);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteText.innerHTML = '<p>Unable to fetch a quote. Please try again later.</p>';
            });
    }

    function displayQuote(data) {
        const quote = `"${data.content}" - ${data.author}`;
        quoteText.innerHTML = `<p>${quote}</p>`;
    }

    const bannerContainer =document.querySelector('.banner-container')
    const banners = document.querySelectorAll('.banner')
    const imgList =['banner0','banner1','banner2','banner3','banner4']

    let index=0
    banners.forEach((banner)=>{
        banner.addEventListener('click',()=>{
          
            if(banner.classList.contains('btn-left')){
                index--;
                if(index<0)
                {
                    index=imgList.length-1;
                }
                
                bannerContainer.style.background= `url('../Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat`;
            }
                else{
                    index++;
                    if(index===imgList.length)
                {
                    index=0;
                }
                bannerContainer.style.background= `url('../Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat `;
                }

            })
        })
    
