// /src/routes.ts

import { Router, Request, Response } from 'express';
import { phrases } from './data';

const router = Router();

// Search phrases using GET with the following params: query, status
http://localhost:3000/api/phrase/search?query=earn&status=spam
router.get('/phrase/search', (req: Request, res: Response) => {
  const query = (req.query.query as string)?.toLowerCase() || '';
  const status = req.query.status as string;

  let results = phrases.filter(p => p.phrase.toLowerCase().includes(query));

  if (status) {
    results = results.filter(p => p.status === status);
  }

  if (results.length > 0) {
    res.json(results);
  } else {
    res.status(404).json({ message: "No phrases with this criteria were found." });
  }
});

// Return phrase using GET by index/id
// http://localhost:3000/api/phrase/1
router.get('/phrase/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const phrase = phrases.find(p => p.id === id);
  if (phrase) {
    const { translations, ...phraseWithoutTranslations } = phrase;
    // res.json(phraseWithoutTranslations);
    res.json(phrase);
  } else {
    res.status(404).json({ message: "No phrase with this ID was found." });
  }
});

// Return phrase using GET by index/id and language
// Example: http://localhost:3000/api/phrase/1/fr
router.get('/phrase/:id/:language', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const language = req.params.language;
  const phrase = phrases.find(p => p.id === id);
  if (phrase && phrase.translations[language]) {
    res.json({ translation: phrase.translations[language] });
  } else {
    res.status(404).json({ message: "Translation for this language and/or ID was not found." });
  }
});

export default router;
