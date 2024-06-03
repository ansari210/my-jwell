export async function getData(productId: string) {
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4YmNiMmJkZTM1MTUxNjc2MWY0YzEiLCJpYXQiOjE3MTU1NzQyMjMsImV4cCI6MTcxODk1ODIyM30.GC6LKCG2-K3JYH8h_8lvS5fZd0D_GjOJiJKKHCBJ7G4'; // Replace with your actual JWT token
console.log("hlo")
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-web-preview/www.myjwell.com`, {
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
      cache: "no-cache"
    });
    const data = await res.json();
    return data;
  }
  
