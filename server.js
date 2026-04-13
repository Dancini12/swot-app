const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY || '';
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/api/relatorio', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt ausente.' });
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 2000, temperature: 0.7 }
      })
    });
    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ content: [{ text }] });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Erro interno.' });
  }
});
app.listen(PORT, () => console.log(`✅ SWOT App rodando em http://localhost:${PORT}`));
