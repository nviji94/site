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
            console.log('clicked')
            if(banner.classList.contains('btn-left')){
                index--;
                if(index<0)
                {
                    index=imgList.length-1;
                }
                
                bannerContainer.style.background= `url('./Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat`;
            }
                else{
                    index++;
                    if(index===imgList.length)
                {
                    index=0;
                }
                bannerContainer.style.background= `url('./Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat `;
                }

            })
        })
        
        const cityInput = document.getElementById('cityInput');
        const weatherIcon = document.querySelector("#weatherIcon")
        const weatherInfo = document.getElementById('weatherInfo');
        
        function getWeather() {
            const cityName = cityInput.value.trim();
            if (cityName !== '') {
                const apiKey = 'acef5e85c384c89a2c4a9d4ac6a80040'; // Replace with your API key
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
            
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        displayWeather(data);
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                        weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
                    });
            } else {
                weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
            }
        }
    
        function displayWeather(data) {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const humidity = data.main.humidity + "%";
            const windSpeed = data.wind.speed + "km/h";
    
            switch (data.weather[0].main) {
                case 'Clouds':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
                    break;
                case 'Clear':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
                    break;
                case 'Rain':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
                    break;
                case 'Mist':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
                    break;
                case 'Snow':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
                    break;
                case 'Haze':
                    weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
                    break;
            }
        
    
    
            const weatherHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>humidity: ${humidity}</p>
                <p>windSpeed: ${windSpeed}</p>
            `;
    
            weatherInfo.innerHTML = weatherHTML;
        }
    
    
    
    
