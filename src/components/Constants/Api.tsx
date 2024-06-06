export const authHeaders =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGUyMzIxYzMwNmFlZTkwYmMwMjBkY2U2MTkzNWE0MiIsInN1YiI6IjY1ZTNmNTc2OTk3OWQyMDE2M2IwMTRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6opH20RAmX--d14u8eIf86EwEhu2RIzbeclZTB50DI";

export const imgPrefixURLPath = "https://image.tmdb.org/t/p/original/";

export const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authHeaders,
  },
};
