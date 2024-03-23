function getContent(query) {
    const OPENAI_API_KEY = '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'; // Replace with your actual API key
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

    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data['choices'][0]['message']['content'];
    })
    .catch(error => {
      console.error('Error:', error);
      return 'Error fetching content';
    });
 }

let r = getContent("Hello. How are you?")
setTimeout(() => {
    console.log(r)
}, 10000)
