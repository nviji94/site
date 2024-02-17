 
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

