export const http = async (req, res) => {
  const name = req?.query?.name;
  res.send(`hello ${name}`);
};

export const event = async (event, _) => {
  const data = event?.data;
  console.log(JSON.stringify(data));
};
