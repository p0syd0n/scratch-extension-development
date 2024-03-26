async function getContent(query) {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Replace with your actual API key
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    });
    const body = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": query}],
      "temperature": 0.7
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data['choices'][0]['message']['content'];
    } catch (error) {
        console.error('Error:', error);
        return 'Error fetching content';
    }
}

// Usage
(async () => {
    let r = await getContent("Hello. How are you?");
    console.log(r);
})();
