const URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export type Thumbnail = {
  trending?: {
    small: string;
    large: string;
  };
  regular?: {
    small: string;
    medium: string;
    large: string;
  };
};

export interface InfoProps {
  title: string;
  thumbnail: Thumbnail;
  year: string;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
}

export async function getData(): Promise<InfoProps[]> {
  try {
    const res = await fetch(<any>URL);
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
}
