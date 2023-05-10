// const URL = process.env.NEXT_PUBLIC_DATABASE_URL || '';
const fetchURL = process.env.NEXT_PUBLIC_DATABASE_URL;

export async function getData() {
  try {
    const res = await fetch(<any>fetchURL);
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
}
