const productos = [
    { 
        id: 1,
        img: "https://acdn.mitiendanube.com/stores/835/701/products/fernet-branca-aperitivo-1000-ml1-f361be27b92a8c5e0b16661028118789-640-0.jpg",
        nombre: "Fernet", 
        precio:10000, 
        marca: "Branca", 
        // cantidad: 1,
    },
    { 
        id: 2,
        img: "https://acdn.mitiendanube.com/stores/835/701/products/gancia-americano-aperitivo-950ml11-bf7834f088aa34805b16661029164377-1024-1024.webp", 
        nombre: "Gancia", 
        precio:6000, 
        marca: "Gancia", 
        // cantidad: 1,
    },
    { 
        id: 3,
        img: "https://acdn.mitiendanube.com/stores/835/701/products/bombay-sapphire-gin-750-ml1-b33473c110eff3705016660932418972-1024-1024.webp", 
        nombre: "Gin", 
        precio:18000, 
        marca:"Bombay Sapphire", 
        // cantidad: 1,
    },
    { 
        id: 4, 
        img: "https://acdn.mitiendanube.com/stores/835/701/products/absolut-vodka-700-ml1-0e53d51eeb7dec82e016932519289590-1024-1024.webp",
        nombre: "Vodka", 
        precio: 8000, 
        marca: "Absolut", 
        // cantidad: 1,
    }


    ];

    JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
