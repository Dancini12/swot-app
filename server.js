const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY || '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';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ── Proxy para a API da Anthropic ──────────────────── */
app.post('/api/relatorio', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt ausente.' });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':    'application/json',
        'x-api-key':       API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model:      'claude-opus-4-5',
        max_tokens: 2000,
        messages:   [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Erro interno do servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ SWOT App rodando em http://localhost:${PORT}\n`);
});
