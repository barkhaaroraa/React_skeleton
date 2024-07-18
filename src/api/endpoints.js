const getReport = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  return {
    name: "Naman Arora",
    comp_name: "closeAI",
    domain: "Tech",
  };
};

const getDrawerItems = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  return {
    barColor: "#35434",
    highlightColor: "#00000",
    titles: ["input", "report", "analysis"],
  };
};

const pushInput = async (data) => {
  await new Promise((r) => setTimeout(r, 2000));
  console.log(data);
};

function yolo() {
  console.log("hello");
}
