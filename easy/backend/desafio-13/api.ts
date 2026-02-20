export function getUserData(userId: number): Promise<object> {
  return fetch(`https://api.example.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
      return fetch(`https://api.example.com/orders?userId=${userId}`)
        .then((res) => res.json())
        .then((orders) => {
          return fetch(`https://api.example.com/addresses?userId=${userId}`)
            .then((res) => res.json())
            .then((addresses) => {
              return { user, orders, addresses };
            });
        });
    })
    .catch((err) => {
      console.log("Error:", err);
      return {};
    });
}
