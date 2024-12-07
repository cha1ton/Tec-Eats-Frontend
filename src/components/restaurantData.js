// src/components/user/restaurantData.js

const restaurantData = [
  {
    id: 1,
    name: "Restaurante A",
    description: "Descripción del Restaurante A",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [  // Restaurante A tiene entradas
        {
          id: 1,
          name: "Ceviche",
          description: "Ceviche fresco con pescado de la región",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 2,
          name: "Ensalada de palta",
          description: "Ensalada ligera y fresca",
          price: 8,
          image: "https://comidaperuana.org/wp-content/uploads/2023/12/receta-de-ensalada-de-palta-con-lechuga.jpg",
        },
      ],
      platosPrincipales: [
        {
          id: 1,
          name: "Lomo saltado",
          description: "Descripción del plato 1 - Rest. A",
          price: 12,
          image: "https://i.ytimg.com/vi/sWXRJbGi6yQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmzgGJ6J0eLasWLgYE-TcZgyiSJQ",
        },
        {
          id: 2,
          name: "Ají de gallina",
          description: "Descripción del plato 2 - Rest. A",
          price: 10,
          image: "https://www.lopesa.com/storage/recetas/December2021/6abtjojj4vy1cMfW90Gg.jpeg",
        },
        {
          id: 3,
          name: "Tallarines verdes",
          description: "Descripción del plato 3 - Rest. A",
          price: 8,
          image: "https://imag.bonviveur.com/tallarines-verdes-peruanos-servidos-en-un-plato.jpg",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Restaurante B",
    description: "Descripción del Restaurante B",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [],  // Restaurante B no tiene entradas
      platosPrincipales: [
        {
          id: 1,
          name: "Plato 1",
          description: "Descripción del plato 1 - Rest. B",
          price: 12,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
    },
  },
  // Otros restaurantes...
  {
    id: 3,
    name: "Restaurante C",
    description: "Descripción del Restaurante C",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [  // Restaurante A tiene entradas
        {
          id: 1,
          name: "Ceviche",
          description: "Ceviche fresco con pescado de la región",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
      platosPrincipales: [
        {
          id: 1,
          name: "Plato 1",
          description: "Descripción del plato 1 - Rest. C",
          price: 12,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 2,
          name: "Plato 2",
          description: "Descripción del plato 2 - Rest. C",
          price: 10,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 3,
          name: "Plato 3",
          description: "Descripción del plato 3 - Rest. C",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Restaurante D",
    description: "Descripción del Restaurante D",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [  // Restaurante A tiene entradas
        {
          id: 1,
          name: "Ceviche",
          description: "Ceviche fresco con pescado de la región",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
      platosPrincipales: [
        {
          id: 1,
          name: "Plato 1",
          description: "Descripción del plato 1 - Rest. D",
          price: 12,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 2,
          name: "Plato 2",
          description: "Descripción del plato 2 - Rest. D",
          price: 10,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 3,
          name: "Plato 3",
          description: "Descripción del plato 3 - Rest. D",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Restaurante E",
    description: "Descripción del Restaurante E",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [  // Restaurante A tiene entradas
        {
          id: 1,
          name: "Ceviche",
          description: "Ceviche fresco con pescado de la región",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
      platosPrincipales: [
        {
          id: 1,
          name: "Plato 1",
          description: "Descripción del plato 1 - Rest. E",
          price: 12,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 2,
          name: "Plato 2",
          description: "Descripción del plato 2 - Rest. E",
          price: 10,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 3,
          name: "Plato 3",
          description: "Descripción del plato 3 - Rest. E",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Restaurante F",
    description: "Descripción del Restaurante F",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dc/12/90/ite-esperamos.jpg?w=1200&h=-1&s=1",
    menu: {
      entradas: [  // Restaurante A tiene entradas
        {
          id: 1,
          name: "Ceviche",
          description: "Ceviche fresco con pescado de la región",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
      platosPrincipales: [
        {
          id: 1,
          name: "Plato 1",
          description: "Descripción del plato 1 - Rest. F",
          price: 12,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 2,
          name: "Plato 2",
          description: "Descripción del plato 2 - Rest. F",
          price: 10,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
        {
          id: 3,
          name: "Plato 3",
          description: "Descripción del plato 3 - Rest. F",
          price: 8,
          image: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.jpg",
        },
      ],
    },
  },
  
];

export default restaurantData;
