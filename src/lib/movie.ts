export interface Movie {
    id: string;
    title: string;
    year: number;
    image: string;
  }
  
  export const movies: Movie[] = [
    {
      id: "1",
      title: "The Godfather",
      year: 1972,
      image: "/movies/godfather.png"
    },
    {
      id: "2",
      title: "Inception",
      year: 2010,
      image: "/movies/inception.png"
    },
    {
      id: "3", 
      title: "Avengers: Endgame",
      year: 2019,
      image: "/movies/avengers_endgame.png"
    },
    {
      id: "4",
      title: "The Menu",
      year: 2022,
      image: "/movies/the_menu.png"
    },
    {
      id: "5",
      title: "Get Out",
      year: 2017,
      image: "/movies/get_out.png"
    },
    {
      id: "6",
      title: "National Treasure",
      year: 2004,
      image: "/movies/national_treasure.png"
    }
  ];