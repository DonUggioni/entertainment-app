// const URL = process.env.NEXT_PUBLIC_DATABASE_URL || '';
const fetchURL = process.env.NEXT_PUBLIC_DATABASE_URL;

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
  isBookmarked: boolean;
  thumbnail: Thumbnail;
  year: string;
  category: string;
  isTrending?: boolean;
  rating: string;
  title: string;
}

export async function getData(): Promise<InfoProps[]> {
  try {
    const res = await fetch(<any>fetchURL);
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
}
