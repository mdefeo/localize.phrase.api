// /src/data.ts

export interface Phrase {
  id: number;
  phrase: string;
  status: "active" | "pending" | "spam" | "deleted";
  createdAt: string;
  updatedAt: string;
  translations: {
    [key: string]: string;
  };
}

export const phrases: Phrase[] = [
  {
    id: 1,
    phrase: "Hi, I’m a phrase",
    status: "active",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Salut, je suis une phrase",
      es: "hola soy una frase"
    }
  },
  {
    id: 2,
    phrase: "My name is Marcello",
    status: "active",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Je m'appelle Marcello",
      es: "mi nombre es marcelo"
    }
  },
  {
    id: 3,
    phrase: "Where is the library",
    status: "pending",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Où est la bibliothèque",
      es: "Donde está la biblioteca"
    }
  },
  {
    id: 4,
    phrase: "Earn money fast",
    status: "spam",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Gagnez de l'argent rapidement",
      es: "Gana dinero rapido"
    }
  },
  {
    id: 5,
    phrase: "This is an example of a deleted phrase",
    status: "deleted",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Ceci est un exemple de phrase supprimée",
      es: "Este es un ejemplo de una frase eliminada."
    }
  },
  {
    id: 6,
    phrase: "Get a reverse mortgage",
    status: "spam",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Obtenez un prêt hypothécaire inversé",
      es: "Obtener una hipoteca inversa"
    }
  },
  {
    id: 7,
    phrase: "I am a tourist",
    status: "pending",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Je suis un touriste",
      es: "Soy un turista"
    }
  },
  {
    id: 8,
    phrase: "This is the final test comment",
    status: "deleted",
    createdAt: "2024-06-16T15:58:35+00:00",
    updatedAt: "2024-06-16T15:58:35+00:00",
    translations: {
      fr: "Ceci est le dernier commentaire du test",
      es: "Este es el comentario final de la prueba."
    }
  },
];
