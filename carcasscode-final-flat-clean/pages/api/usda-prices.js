export default function handler(req, res) {
  res.status(200).json({
    boxedBeefChoice: "312.45",
    liveSteers: "186.37",
    liveHogs: "72.19",
    boxedPorkLoins: "105.12"
  });
}