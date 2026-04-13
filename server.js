const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY || '';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/relatorio', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt ausente.' });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });

    const text = data.choices?.[0]?.message?.content || '';
    res.json({ content: [{ text }] });

  } catch (err) {
    res.status(500).json({ error: err.message || 'Erro interno.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ SWOT App rodando em http://localhost:${PORT}\n`);
});
