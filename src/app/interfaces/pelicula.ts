
export interface PeliculaResults {
    results: pelicula[];
    page: number;
    total_results: number;
    total_pages: number;
}


export interface pelicula {
    title: string;
    imageUrl: string; 
    overview: string; 
    isFavorite?: boolean;
    seen?: boolean; 
}
