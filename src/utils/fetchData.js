export const createUser = async (userData) => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};
