
export type rocket = {
        id:number;
        active: boolean;
        cost_per_launch: number;
        success_rate_pct: 40,
        first_flight:string,
        height: {
          meters: number;
          feet:number;
        },
        diameter: {
          meters:number;
          feet: number;
        },
        mass: {
          kg: number;
          lb: number;
        }
      
        flickr_images: string[];
        wikipedia: string;
        description: string;
        rocket_id: string;
        rocket_name:string;
        rocket_type: string;
}