const ghibliUrl = "https://ghibliapi.vercel.app/films/";
const httpStatus = "https://httpstat.us/404";

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
const test = await fetchData(ghibliUrl);
console.log(fetchData(ghibliUrl));
console.log(test);

function useThen(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error", error));
}
console.log(await useThen(httpStatus));

// const response = await fetch(ghibliUrl);
// const data = await response.json();
// // const useAwait = async (url) => {
// //   const response = await fetch(url);
// //   const data = await response.json();
// console.log(data);

//   return data;
// // };
// const test = useAwait(ghibliUrl);
// console.log(useAwait(test));
